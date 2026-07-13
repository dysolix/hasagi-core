import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Agent } from "https";
import { WebSocket } from "ws";
import { LCUCredentials, MaybePromise, abortableDelay, delay, getCredentials } from "./util.js";
import { TypedEmitter, type ListenerSignature } from "./typed-emitter.js";
import RIOT_GAMES_CERTIFICATE from "./riot-games-certificate.js";
import { EndpointsWithMethod, HttpMethod, LCUEndpoint, LCUEndpointResponseType, LCUEndpoints } from "./types/lcu-endpoints.js";
import { ConnectionCancelledError, LCUError, NotConnectedError, RequestError } from "./errors.js";
import { LCUWebSocketEvents } from "./types/lcu-events.js";

/**
 * Default TLS agent for standalone `request` calls: validates against the built-in Riot Games
 * certificate. No keep-alive — a pooled socket would keep the process alive at exit.
 */
const DEFAULT_STANDALONE_AGENT = new Agent({ rejectUnauthorized: true, ca: RIOT_GAMES_CERTIFICATE });

/** `undefined` → shared default agent, `null` → no validation, string → trust that CA. */
function resolveStandaloneAgent(certificate: string | null | undefined): Agent {
  if (certificate === undefined)
    return DEFAULT_STANDALONE_AGENT;
  return new Agent({ rejectUnauthorized: certificate !== null, ca: certificate ?? undefined });
}

/** Substitutes every `{name}` placeholder with its URL-encoded value; unmatched ones are left intact. (Replacer callback so `$` in values isn't a replacement pattern.) */
function substitutePathParameters(path: string, params: Record<string, string>): string {
  return path.replace(/{(.*?)}/g, (match, name: string) => name in params ? encodeURIComponent(params[name]) : match);
}

/** Normalizes the two request argument shapes (raw axios config, or method/path/options). */
function parseRequestArgs(args: any[], defaultRetryOptions?: Partial<RequestRetryOptions> | null): { axiosConfig: AxiosRequestConfig; returnAxiosResponse: boolean; retryOptions: RequestRetryOptions; certificate: string | null | undefined } {
  let retryOptions: RequestRetryOptions = {
    maxRetries: 0,
    retryDelay: 1000,
    noRetryStatusCodes: [400],
    ...defaultRetryOptions,
  };

  let axiosConfig: AxiosRequestConfig;
  let returnAxiosResponse = false;
  // Only the standalone `request` consumes this; HasagiClient.request ignores it.
  let certificate: string | null | undefined;

  if (typeof args[0] !== "string") {
    // Raw axios config overload
    const config = args[0] as AxiosRequestConfig & { returnAxiosResponse?: boolean; retryOptions?: Partial<RequestRetryOptions>; certificate?: string | null };
    // Copy (never mutate the caller's config) and strip the non-axios keys.
    const configCopy = { ...config };
    delete configCopy.returnAxiosResponse;
    delete configCopy.retryOptions;
    delete configCopy.certificate;
    configCopy.headers = config.data !== undefined
      ? { "Content-Type": "application/json", ...config.headers }
      : { ...config.headers };
    axiosConfig = configCopy;
    certificate = config.certificate;

    if (config.returnAxiosResponse)
      returnAxiosResponse = true;

    if (config.retryOptions)
      retryOptions = { ...retryOptions, ...config.retryOptions };
  } else {
    // method/path/options overload
    const method = args[0] as string;
    let path = args[1] as string;
    const _config = args[2] as (LCURequestOptions<string, string> & { certificate?: string | null; returnAxiosResponse?: boolean }) | undefined;

    if (_config && "path" in _config)
      path = substitutePathParameters(path, _config.path as Record<string, string>);

    axiosConfig = {
      method,
      url: path,
      data: _config?.body,
      params: _config?.query,
      headers: {
        "Content-Type": _config?.body !== undefined ? "application/json" : undefined,
        ..._config?.headers,
      },
    };
    certificate = _config?.certificate;

    if (_config?.returnAxiosResponse)
      returnAxiosResponse = true;

    if (_config?.retryOptions)
      retryOptions = { ...retryOptions, ..._config.retryOptions };
  }

  // An explicit `undefined` in an override must fall back to the default, not clobber it
  // (an undefined maxRetries would make runWithRetry's attempt count NaN). Negative maxRetries
  // clamps to 0 — a -1 (the "infinite" convention of maxConnectionAttempts) would otherwise make
  // runWithRetry skip the request entirely.
  return {
    axiosConfig,
    returnAxiosResponse,
    certificate,
    retryOptions: {
      maxRetries: Math.max(0, retryOptions.maxRetries ?? 0),
      retryDelay: retryOptions.retryDelay ?? 1000,
      noRetryStatusCodes: retryOptions.noRetryStatusCodes ?? [400],
    },
  };
}

/**
 * Runs an axios request with the shared retry/error-wrapping behavior.
 * @param onExhausted Invoked once all attempts are used up, before the final throw. May throw to short-circuit.
 */
async function runWithRetry(send: () => Promise<AxiosResponse<unknown>>, returnAxiosResponse: boolean, retryOptions: RequestRetryOptions, onExhausted?: (err: unknown) => void): Promise<unknown> {
  const maxAttempts = retryOptions.maxRetries + 1;
  const retryDelay = retryOptions.retryDelay;
  const noRetryStatusCodes = retryOptions.noRetryStatusCodes!; // always populated by parseRequestArgs

  const errors: unknown[] = [];
  while (errors.length < maxAttempts) {
    try {
      const axiosResponse = await send().catch(err => {
        if (err instanceof AxiosError && err.response)
          throw new LCUError(err);

        throw new RequestError(err);
      });

      return returnAxiosResponse ? axiosResponse : axiosResponse.data;
    } catch (err) {
      errors.push(err);

      if (err instanceof LCUError && noRetryStatusCodes.includes(err.statusCode))
        throw errors.length === 1 ? err : new AggregateError(errors, `Request failed after ${errors.length} attempts.`);

      if (errors.length >= maxAttempts) {
        onExhausted?.(err);
        throw errors.length === 1 ? err : new AggregateError(errors, `Request failed after ${errors.length} attempts.`);
      }

      await delay(retryDelay);
    }
  }

  throw new Error("An unknown error occurred. Please report this issue to the developer."); // Should never be reached
}

/**
 * Sends a one-off request to the League of Legends client (LCU) using the given credentials.
 * Authentication and the base URL are added automatically, and the connection is validated against the
 * built-in Riot Games certificate by default (matching {@link HasagiClient}). Call it either with a raw
 * axios config, or with a typed `method` + `path` (+ options) for full request/response typing on known
 * endpoints. Pass `returnAxiosResponse: true` (in either form) to resolve with the full `AxiosResponse`
 * instead of the parsed body — its `data` stays typed per endpoint in the method/path form.
 *
 * Override validation with the `certificate` option (in either form): pass your own certificate in
 * string form to validate against it, or `null` to disable validation; omit it to use the built-in
 * certificate. A caller-supplied `httpsAgent` (raw axios config overload) takes precedence over `certificate`.
 *
 * Failures are wrapped: a response with a non-success status becomes an {@link LCUError}, a transport
 * failure becomes a {@link RequestError}, and (with retries configured) repeated failures become an
 * `AggregateError`.
 *
 * For repeated or high-frequency requests, prefer a {@link HasagiClient} instance, whose agent pools
 * sockets via keep-alive.
 * @param credentials Port and password. You can use the `getCredentials` function to get them.
 */
async function request<ReturnAxiosResponse extends boolean = false>(credentials: LCUCredentials, config: AxiosRequestConfig & { returnAxiosResponse?: ReturnAxiosResponse; retryOptions?: Partial<RequestRetryOptions>; certificate?: string | null }): Promise<ReturnAxiosResponse extends true ? AxiosResponse<unknown> : unknown>;
async function request<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>, ReturnAxiosResponse extends boolean = false>(credentials: LCUCredentials, method: Method, path: Path, ...options: LCURequestOptionsParameter<Method, Path, { certificate?: string | null; returnAxiosResponse?: ReturnAxiosResponse }>): Promise<ReturnAxiosResponse extends true ? AxiosResponse<LCUEndpointResponseType<Method, Path>> : LCUEndpointResponseType<Method, Path>>;
async function request() {
  const credentials: LCUCredentials = arguments[0];
  const { axiosConfig, returnAxiosResponse, retryOptions, certificate } = parseRequestArgs(Array.prototype.slice.call(arguments, 1));

  const finalAxiosConfig: AxiosRequestConfig = {
    ...axiosConfig,
    baseURL: `https://127.0.0.1:${credentials.port}`,
    auth: {
      username: "riot",
      password: credentials.password,
    },
    httpsAgent: axiosConfig.httpsAgent ?? resolveStandaloneAgent(certificate),
    adapter: "http",
  };

  return runWithRetry(() => axios.request(finalAxiosConfig), returnAxiosResponse, retryOptions);
}

export { request };

/**
 * Client for the League of Legends client API (LCU): connects (credentials + readiness + event
 * WebSocket), sends authenticated HTTP requests with optional retries, polls endpoints, and dispatches
 * LCU WebSocket events to listeners. Extends a typed event emitter (see {@link HasagiCoreEvents}).
 */
export default class HasagiClient<Events extends HasagiCoreEvents & ListenerSignature<Events> = HasagiCoreEvents> extends TypedEmitter<Events> {
  private static Instance?: HasagiClient<any>;
  /**
   * Returns the **most recently constructed** `HasagiClient`, or `undefined` if none exists — a
   * convenience global, not a true singleton. Pass the event-map type argument (e.g. a subclass's
   * widened events) to type the result accordingly.
   */
  public static getInstance = <Events extends HasagiCoreEvents & ListenerSignature<Events> = HasagiCoreEvents>(): HasagiClient<Events> | undefined =>
    HasagiClient.Instance as HasagiClient<Events> | undefined;

  /**
   * Overrides what {@link HasagiClient.getInstance} returns, or clears it (pass `undefined`/`null`)
   * so a no-longer-used client can be garbage collected.
   */
  public static setInstance = (instance?: HasagiClient<any> | null): void => {
    HasagiClient.Instance = instance ?? undefined;
  };

  private _isConnected = false;
  /** Whether the client is currently connected. */
  public get isConnected(): boolean {
    return this._isConnected;
  }

  private processId: number | null = null;
  private port: number | null = null;
  private password: string | null = null;
  private basicAuthToken: string | null = null;
  private lcuAxiosInstance: AxiosInstance | null = null;
  private httpsAgent: Agent | null = null;
  private webSocket: WebSocket | null = null;
  private lcuEventListeners: LCUEventListener[] = [];
  private defaultRetryOptions: Partial<RequestRetryOptions> | null = null;
  /**
   * Token identifying the in-flight {@link HasagiClient.connect} call; a call whose token no longer
   * matches has been superseded and must not mutate shared state.
   */
  private connectGeneration = 0;
  /** The most recent connect() call — superseded calls adopt its outcome (see adoptNewerConnect). */
  private latestConnect: { generation: number; promise: Promise<void> } | null = null;

  /**
   * Creates a new HasagiClient instance.
   * @note Each instantiation overwrites `HasagiClient.Instance`. If multiple instances are created, `HasagiClient.getInstance()` will return the most recently constructed one.
   */
  constructor(options?: { defaultRetryOptions?: Partial<RequestRetryOptions> }) {
    super();

    this.defaultRetryOptions = options?.defaultRetryOptions ?? null;
    HasagiClient.setInstance(this);
  }

  /** The connected LeagueClientUx process id, or null if unknown (e.g. manual credentials without one) */
  public readonly getProcessId = () => this.processId;
  /** The password used to authenticate with the LCU (remoting auth token) */
  public readonly getPassword = () => this.password;
  /** The port the LCU is listening on */
  public readonly getPort = () => this.port;
  /** The base64 encoded basic auth token ("riot:{password}") */
  public readonly getBasicAuthToken = () => this.basicAuthToken;

  /** e.g. riot:123456789@127.0.0.1:12345 */
  public readonly getHostWithAuthentication = () => this.password && this.port ? `riot:${encodeURIComponent(this.password)}@127.0.0.1:${this.port}` : null;

  /** Sets the client-wide default retry options. Per-call `retryOptions` are merged on top of these. */
  public readonly setDefaultRetryOptions = (options: Partial<RequestRetryOptions>) => this.defaultRetryOptions = options;

  /**
   * Emits a built-in {@link HasagiCoreEvents} event. From inside the generic class,
   * `Parameters<Events[U]>` doesn't resolve, so `this.emit("connected")` wouldn't typecheck.
   */
  private emitCore<U extends keyof HasagiCoreEvents>(event: U, ...args: Parameters<HasagiCoreEvents[U]>): boolean {
    return (this as unknown as TypedEmitter<HasagiCoreEvents>).emit(event, ...args);
  }

  // #region WebSocket

  private subscribedEvents = new Set<keyof LCUWebSocketEvents>();

  /*
        LCU WEBSOCKET OPCODES
        0: Welcome
        1: Prefix
        2: Call
        3: CallResult
        4: CallError
        5: Subscribe
        6: Unsubscribe
        7: Publish
        8: Event
    */

  /**
   * Subscribes to a WebSocket event so the LCU starts sending it. Subscriptions made while the
   * socket isn't open yet are queued and sent once it opens, and survive reconnects.
   *
   * @deprecated Use {@link HasagiClient.addLCUEventListener} with a `name` instead — it subscribes
   * automatically (pass a no-op callback to only consume the raw `lcu-event` emitter). Becomes
   * private in v1.
   */
  public subscribeWebSocketEvent = (eventName: keyof LCUWebSocketEvents) => {
    if (this.webSocket === null || this.webSocket.readyState !== WebSocket.OPEN) {
      this.subscribedEvents.add(eventName);
      return;
    }

    if (this.subscribedEvents.has(eventName))
      return;

    this.subscribedEvents.add(eventName);
    this.webSocket.send(JSON.stringify([5, eventName]));
  };

  /**
   * Unsubscribes from a WebSocket event. No-op if the event isn't subscribed. While the socket
   * isn't open, this removes the event from the queued subscriptions so it won't be subscribed on
   * connect.
   *
   * @deprecated Use {@link HasagiClient.removeLCUEventListener} instead — it unsubscribes the event
   * once no remaining listener needs it. Becomes private in v1.
   */
  public unsubscribeWebSocketEvent = (eventName: keyof LCUWebSocketEvents) => {
    if (this.subscribedEvents.delete(eventName) && this.webSocket?.readyState === WebSocket.OPEN)
      this.webSocket.send(JSON.stringify([6, eventName]));
  };

  // #endregion

  // #region Connection
  /**
   * Connects to the League of Legends client: discovers credentials, waits until the client is ready,
   * and (unless `useWebSocket` is disabled) opens the event WebSocket.
   *
   * Resolution always means the client is connected. Safe to call while already connected — it
   * performs a clean reconnect, re-subscribing existing event listeners. Also safe to call
   * concurrently: the latest call wins and earlier in-flight calls settle with the winning call's
   * outcome. A call cancelled by {@link HasagiClient.disconnect} rejects with
   * {@link ConnectionCancelledError}. If any step fails the client is left in a consistent
   * disconnected state and the error is thrown (so a subsequent {@link HasagiClient.request} will
   * throw {@link NotConnectedError}).
   */
  public connect(options?: ConnectionOptions): Promise<void> {
    const generation = ++this.connectGeneration;
    const promise = this.performConnect(options, generation);
    this.latestConnect = { generation, promise };
    return promise;
  }

  private async performConnect(options: ConnectionOptions | undefined, myGen: number): Promise<void> {
    const useWebSocket = options?.useWebSocket ?? true;

    // Tear down any existing connection silently (no "disconnected" emit).
    this._isConnected = false;
    this.resetConnectionState();

    // TLS options shared by the request agent and the WebSocket.
    const agent = {
      rejectUnauthorized: options?.certificate !== null,
      ca: options?.certificate === null ? undefined : (options?.certificate ?? RIOT_GAMES_CERTIFICATE),
    };
    this.httpsAgent = new Agent({ ...agent, keepAlive: true });

    try {
      let credentials: LCUCredentials;
      if (options?.authenticationStrategy === "manual") {
        if (!options.credentials)
          throw new Error("No credentials provided for manual authentication strategy.");
        // The process/lockfile path emits "connecting" inside acquireCredentials; manual skips it.
        this.emitCore("connecting");
        credentials = options.credentials;
      } else {
        const strategy = options?.authenticationStrategy ?? "process";
        const lockfile = options?.authenticationStrategy === "lockfile" ? options.lockfile : null;
        credentials = await this.acquireCredentials(strategy, lockfile, options?.maxConnectionAttempts ?? -1, options?.connectionAttemptDelay ?? 5000, myGen);
      }
      if (this.connectGeneration !== myGen)
        return this.adoptNewerConnect(myGen);
      this.applyCredentials(credentials);

      if (options?.readinessCheck !== false) {
        await this.runReadinessCheck(options?.readinessCheck);
        if (this.connectGeneration !== myGen)
          return this.adoptNewerConnect(myGen);
      }

      if (useWebSocket) {
        await this.openWebSocket(agent, options?.webSocketTimeoutMs ?? 10000);
        if (this.connectGeneration !== myGen)
          return this.adoptNewerConnect(myGen);
      }
    } catch (err) {
      if (this.connectGeneration !== myGen)
        return this.adoptNewerConnect(myGen);
      this.resetConnectionState();
      this.emitCore("connection-failed", err);
      throw err;
    }

    this.onConnected();
  }

  /**
   * Settles a superseded connect() call: adopts the newest call's outcome so resolution still means
   * "connected", or rejects with {@link ConnectionCancelledError} when no newer call exists (i.e. the
   * generation was bumped by {@link HasagiClient.disconnect}).
   */
  private adoptNewerConnect(myGen: number): Promise<void> {
    const latest = this.latestConnect;
    if (latest && latest.generation > myGen)
      return latest.promise;
    throw new ConnectionCancelledError();
  }

  /**
   * Closes the current connection. Also cancels an in-flight {@link HasagiClient.connect} call, which
   * then rejects with {@link ConnectionCancelledError}. No-op if neither applies.
   */
  public disconnect(): void {
    this.connectGeneration++;
    // Invalidate the latest connect() so calls pending at this point reject as cancelled instead
    // of adopting a stale (pre-disconnect) success.
    this.latestConnect = null;
    if (this.isConnected) {
      this.onDisconnected();
      return;
    }
    // Tear down anything a cancelled in-flight connect() has already built.
    this.resetConnectionState();
  }

  private onConnected() {
    if (this.isConnected)
      return;

    // Re-send every queued / previously-subscribed event on the now-open socket.
    const previouslySubscribedEvents = this.subscribedEvents;
    this.subscribedEvents = new Set();
    previouslySubscribedEvents.forEach(event => this.subscribeWebSocketEvent(event));

    this._isConnected = true;
    this.emitCore("connected");
  }

  private onDisconnected() {
    if (!this.isConnected)
      return;

    this._isConnected = false;
    this.resetConnectionState();
    this.emitCore("disconnected");
  }

  /** Closes the socket, destroys the keep-alive agent, and clears all per-connection credentials/state. */
  private resetConnectionState() {
    this.webSocket?.close();
    this.webSocket = null;
    this.httpsAgent?.destroy();
    this.httpsAgent = null;
    this.lcuAxiosInstance = null;
    this.processId = null;
    this.port = null;
    this.password = null;
    this.basicAuthToken = null;
  }

  /**
   * Acquires credentials via the `process`/`lockfile` strategy, retrying transient failures (e.g. the
   * client not running yet) up to `maxAttempts` (`-1` = infinite). Fails fast on non-transient errors
   * (unsupported platform, missing lockfile path) so they aren't retried.
   */
  private async acquireCredentials(strategy: "process" | "lockfile", lockfile: string | null, maxAttempts: number, attemptDelay: number, generation: number): Promise<LCUCredentials> {
    if (strategy === "process" && process.platform !== "win32" && process.platform !== "darwin")
      throw new Error(`Authentication strategy 'process' is not supported on this platform. (${process.platform})`);
    if (strategy === "lockfile" && typeof lockfile !== "string")
      throw new Error("Parameter 'lockfile' not provided or has an invalid type.");

    let attempt = 0;
    while (maxAttempts === -1 || attempt++ < maxAttempts) {
      // Superseded — stop retrying; connect() discards this throw via its generation check.
      if (this.connectGeneration !== generation)
        throw new Error("connect() superseded by a newer connection attempt.");

      this.emitCore("connecting");

      try {
        return strategy === "process" ? await getCredentials("process") : await getCredentials("lockfile", lockfile!);
      } catch (e) {
        if (maxAttempts !== -1 && attempt >= maxAttempts)
          throw new Error("Could not connect to the League of Legends client.", { cause: e });

        this.emitCore("connection-attempt-failed");
        await delay(attemptDelay);
      }
    }

    // Only reached when maxAttempts < 1 (the loop never ran).
    throw new Error("Could not connect to the League of Legends client.");
  }

  /** Stores the connection identity and creates the authenticated, base-URL'd axios instance. */
  private applyCredentials(credentials: LCUCredentials) {
    this.processId = credentials.processId ?? null;
    this.port = credentials.port;
    this.password = credentials.password;
    this.basicAuthToken = Buffer.from(`riot:${credentials.password}`).toString("base64");

    this.lcuAxiosInstance = axios.create({
      baseURL: "https://127.0.0.1:" + this.port,
      httpsAgent: this.httpsAgent,
      auth: { username: "riot", password: credentials.password },
      adapter: "http",
    });
  }

  /** Waits for the client to start responding on the readiness endpoint before requests are issued. */
  private async runReadinessCheck(readinessCheck?: { endpoint?: string; maxRetries?: number; retryDelay?: number }): Promise<void> {
    const endpoint = readinessCheck?.endpoint ?? "/lol-summoner/v1/current-summoner";
    const maxRetries = readinessCheck?.maxRetries ?? 10;
    const retryDelay = readinessCheck?.retryDelay ?? 1000;
    await this.request("get", endpoint as any, { retryOptions: { maxRetries, retryDelay } }).catch(err => {
      throw new Error("Successfully retrieved credentials but could not connect to the League of Legends client.", { cause: err });
    });
  }

  /**
   * Opens the LCU event WebSocket: resolves once open, rejects on an early error/close or after
   * `timeoutMs`. Events from a socket replaced by a newer connect() are ignored via identity checks.
   */
  private openWebSocket(agent: { rejectUnauthorized: boolean; ca: string | undefined }, timeoutMs: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let settled = false;

      const ws = new WebSocket("wss://127.0.0.1:" + this.port, undefined, { headers: { Authorization: "Basic " + this.basicAuthToken }, ...agent });
      this.webSocket = ws;

      const timeout = setTimeout(() => {
        if (settled) return;
        settled = true;
        ws.close();
        if (this.webSocket === ws) this.webSocket = null;
        reject(new Error(`WebSocket connection to the League of Legends client timed out after ${timeoutMs}ms.`));
      }, timeoutMs);

      ws.onopen = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        resolve();
      };

      ws.onclose = () => {
        if (!settled) {
          settled = true;
          clearTimeout(timeout);
          if (this.webSocket === ws) this.webSocket = null;
          reject(new Error("WebSocket connection to the League of Legends client closed before it opened."));
          return;
        }

        if (this.webSocket === ws) this.onDisconnected();
      };

      ws.onmessage = (ev) => {
        // A replaced socket can still deliver frames until its close handshake completes.
        if (this.webSocket !== ws) return;

        let data: unknown;
        try {
          data = JSON.parse(ev.data.toString("utf8"));
        } catch {
          // Ignore malformed WebSocket messages
          return;
        }

        // LCU events are 3-element tuples: [opcode: 8, name: string, data: { eventType: string; uri: string; data: any; }]
        if (Array.isArray(data) && data.length === 3)
          this.handleLCUEvent(data as [opcode: number, name: keyof LCUWebSocketEvents, data: LCUWebSocketEvents[string]]);
      };

      ws.onerror = (ev) => {
        if (!settled) {
          settled = true;
          clearTimeout(timeout);
          ws.close();
          if (this.webSocket === ws) this.webSocket = null;
          reject(new Error("WebSocket connection to the League of Legends client failed.", { cause: ev.error }));
          return;
        }

        if (this.webSocket === ws) this.emitCore("websocket-error", ev.error);
      };
    });
  }

  // #endregion

  // #region Requests

  /**
   * Sends a request to the League of Legends client (LCU). Authentication and the base URL are added
   * automatically. Call it either with a raw axios config, or with a typed `method` + `path` (+ options)
   * for full request/response typing on known endpoints. Pass `returnAxiosResponse: true` (in either
   * form) to resolve with the full `AxiosResponse` instead of the parsed body — its `data` stays typed
   * per endpoint in the method/path form.
   *
   * Failures are wrapped: a response with a non-success status becomes an {@link LCUError}, a transport
   * failure becomes a {@link RequestError}, and (with retries configured) repeated failures become an
   * `AggregateError`. Throws {@link NotConnectedError} if the client isn't connected.
   *
   * @note `retryOptions` resolve as a last-wins merge: built-in defaults, then the client-wide
   * `defaultRetryOptions` (constructor), then this per-call `retryOptions`. A per-call override only
   * changes the fields it sets; omitted fields keep the client default (or the built-in default).
   * @throws {NotConnectedError} when called before a successful `connect()`.
   */
  public async request<ReturnAxiosResponse extends boolean = false>(config: AxiosRequestConfig & { returnAxiosResponse?: ReturnAxiosResponse; retryOptions?: Partial<RequestRetryOptions> }): Promise<ReturnAxiosResponse extends true ? AxiosResponse<unknown> : unknown>;
  public async request<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>, ReturnAxiosResponse extends boolean = false>(method: Method, path: Path, ...options: LCURequestOptionsParameter<Method, Path, { returnAxiosResponse?: ReturnAxiosResponse }>): Promise<ReturnAxiosResponse extends true ? AxiosResponse<LCUEndpointResponseType<Method, Path>> : LCUEndpointResponseType<Method, Path>>;
  public async request() {
    if (this.lcuAxiosInstance === null)
      throw new NotConnectedError();

    const lcuAxiosInstance = this.lcuAxiosInstance;
    const { axiosConfig, returnAxiosResponse, retryOptions } = parseRequestArgs(Array.prototype.slice.call(arguments), this.defaultRetryOptions);

    return runWithRetry(
      () => lcuAxiosInstance.request(axiosConfig),
      returnAxiosResponse,
      retryOptions,
      (err) => {
        // If the connection is refused while no WebSocket is active, treat it as a disconnect.
        if (!this.webSocket && err instanceof RequestError && err.errorCode === "ECONNREFUSED") {
          this.onDisconnected();
          throw err;
        }
      },
    );
  }

  /**
   * Repeatedly requests an endpoint on an interval, invoking callbacks for each response, each response
   * that differs from the previous one, and each error. Per-request retries are disabled. Stops when a
   * callback returns `true`, after `maxExecutions` (default: unlimited), or when `signal` aborts.
   * Resolves once polling stops.
   */
  public async poll<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>>(method: Method, path: Path, pollOptions: PollOptions<Method, Path>, ...options: LCURequestOptionsParameter<Method, Path>): Promise<void> {
    const maxExecutions = pollOptions.maxExecutions ?? Number.MAX_SAFE_INTEGER;
    const signal = pollOptions.signal;
    let lastResponseJson: string | undefined;
    let executions = 0;

    while (executions++ < maxExecutions) {
      if (signal?.aborted)
        return;

      try {
        const response = await this.request(method, path, { ...(options as any)[0], retryOptions: { maxRetries: 0, retryDelay: 0 } }); // Disable retries for poll requests

        if (signal?.aborted)
          return;

        if (pollOptions.onResponse && await pollOptions.onResponse(response))
          return;

        const responseJson = JSON.stringify(response);
        if (lastResponseJson === undefined || lastResponseJson !== responseJson) {
          lastResponseJson = responseJson;
          if (pollOptions.onDistinctResponse && await pollOptions.onDistinctResponse(response))
            return;
        }
      } catch (err) {
        if (signal?.aborted)
          return;

        if (pollOptions.onError && await pollOptions.onError(err))
          return;
      }

      if (executions < maxExecutions)
        await abortableDelay(pollOptions.intervalMs, signal);
    }
  }

  /**
   * Builds a request function that calls a specific endpoint with full type support for parameter and response types
   * @param method The http method the request should use
   * @param path The path the request should use
   * @returns A function that takes all of the endpoint's parameters that returns a Promise resolving to the response data including full auto-generated types for most endpoints
   */
  public buildRequest<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>, ParameterTypes extends any[] = Parameters<LCUEndpoint<Method, Path>>, ResponseType = LCUEndpointResponseType<Method, Path>>(method: Method, path: Path, options?: { retryOptions?: Partial<RequestRetryOptions>; transformResponse?: (response: Awaited<ReturnType<LCUEndpoint<Method, Path>>>) => ResponseType; transformParameters?: (...args: ParameterTypes) => Readonly<Parameters<LCUEndpoint<Method, Path>>> | Promise<Readonly<Parameters<LCUEndpoint<Method, Path>>>> }): (...args: ParameterTypes) => Promise<ResponseType> {
    const callableEndpoint = async (...args: any) => {
      if (options?.transformParameters)
        args = await options.transformParameters(...args);

      // Path placeholders map, in order, to the leading positional args; the next arg is the
      // body/query. Assumes distinct placeholder names (true for all generated endpoints).
      const pathParams = path.match(/{(.*?)}/g)?.map(str => str.substring(1, str.length - 1)) ?? [];
      let i = 0;
      const pathParamValues: Record<string, string> = {};
      for (const param of pathParams)
        pathParamValues[param] = args[i++];
      const requestPath = substitutePathParameters(path, pathParamValues);

      const body = args[i];

      // The schema generator only emits request bodies for post/put/patch; for get/head/delete the
      // trailing argument is always query params. (Post/put/patch endpoints typed with query params
      // instead of a body still send them as a body — indistinguishable at runtime.)
      const isQueryMethod = method === "get" || method === "head" || method === "delete";

      const lcuResponse = await this.request({
        method,
        url: requestPath,
        data: isQueryMethod ? undefined : body,
        params: isQueryMethod ? body : undefined,
        headers: { "Content-Type": body !== undefined && !isQueryMethod ? "application/json" : undefined },
        retryOptions: options?.retryOptions,
      });

      if (options?.transformResponse)
        return options.transformResponse(lcuResponse as any);

      return lcuResponse;
    };

    return callableEndpoint as any;
  }
  // #endregion

  // #region LCU Events
  /**
   * Adds an LCU event listener and subscribes to the WebSocket event it needs, at the time of the
   * call: the listener's `name` if present, otherwise `OnJsonApiEvent` (the event stream all JSON API
   * events arrive on) if a `path` is given. A listener with neither `name` nor `path` subscribes to
   * nothing — its callback only fires for events subscribed to by other listeners.
   */
  public addLCUEventListener<EventName extends keyof LCUWebSocketEvents = "OnJsonApiEvent">(listener: {
    /** If present, the callback will only be called if the event's path matches. OnJsonApiEvent will be subscribed to if you only use the path. */
    path?: string | RegExp;
    /** If present, the callback will only be called if the event's type is in the array */
    types?: ("Create" | "Update" | "Delete")[];
    /** If present, the callback will only be called if the event's name matches */
    name?: EventName;
    callback: (event: LCUWebSocketEvents[EventName]) => void;
  }) {
    if (listener.name)
      this.subscribeWebSocketEvent(listener.name);

    let listenerToPush = listener as typeof listener & { name?: any };

    if (!listener.name && listener.path) {
      this.subscribeWebSocketEvent("OnJsonApiEvent");
      listenerToPush = { ...listener, name: "OnJsonApiEvent" as EventName };
    }

    this.lcuEventListeners.push(listenerToPush);
  }
  /**
   * Removes listeners matching the given parameter. A string (an event name or a path) removes
   * **every** listener whose name or path equals it; a callback function or the
   * {@link LCUEventListener} object removes the first matching listener. Events no remaining
   * listener subscribes to are unsubscribed from the WebSocket.
   *
   * Path-only listeners carry the implicit name `OnJsonApiEvent`, so removing by that name also
   * removes them — remove by path (or callback/object) to target them specifically.
   * @returns `true` if at least one listener was removed, otherwise `false`.
   */
  public removeLCUEventListener(listener: LCUEventListener | LCUEventListener["callback"] | string) {
    let removed: LCUEventListener[];
    if (typeof listener === "string") {
      removed = this.lcuEventListeners.filter(l => l.name === listener || l.path === listener);
      this.lcuEventListeners = this.lcuEventListeners.filter(l => !removed.includes(l));
    } else {
      let index: number;
      if (typeof listener === "function") {
        index = this.lcuEventListeners.findIndex(l => l.callback === listener);
      } else {
        index = this.lcuEventListeners.indexOf(listener);
        // Path-only listeners are stored as copies (implicit OnJsonApiEvent name), so identity can miss.
        if (index === -1)
          index = this.lcuEventListeners.findIndex(l => l.callback === listener.callback);
      }
      removed = index === -1 ? [] : this.lcuEventListeners.splice(index, 1);
    }

    if (removed.length === 0)
      return false;

    for (const name of new Set(removed.map(l => l.name))) {
      if (name && !this.lcuEventListeners.some(l => l.name === name))
        this.unsubscribeWebSocketEvent(name);
    }

    return true;
  }

  /** Removes all LCU event listeners and unsubscribes every subscribed WebSocket event. */
  public removeAllLCUEventListeners() {
    this.lcuEventListeners = [];
    this.subscribedEvents.forEach(event => this.unsubscribeWebSocketEvent(event));
  }

  private handleLCUEvent<EventName extends keyof LCUWebSocketEvents = "OnJsonApiEvent">(event: [opcode: number, name: EventName, data: LCUWebSocketEvents[EventName]]) {
    // Invoke a snapshot instead of emit() so a throwing listener can't abort the rest;
    // rawListeners() returns a fresh array and its once-wrappers still self-remove when called.
    for (const listener of this.rawListeners("lcu-event")) {
      try {
        (listener as (e: typeof event) => void)(event);
      } catch {
        // isolate listener errors
      }
    }

    const payload = event[2] as any;
    const uri = payload?.uri;
    const eventType = payload?.eventType;
    const name = event[1];

    // Snapshot so callbacks that add/remove listeners mid-dispatch can't skip siblings.
    for (const listener of this.lcuEventListeners.slice()) {
      if (listener.path && (typeof listener.path === "string" ? uri !== listener.path : !listener.path.test(uri)))
        continue;

      if (listener.types && !listener.types.includes(eventType as any))
        continue;

      if (listener.name && name !== listener.name)
        continue;

      try {
        listener.callback(event[2]);
      } catch {
        // isolate listener errors
      }
    }
  }
  // #endregion
}

/** The events emitted by {@link HasagiClient} (its typed-emitter event map). Subclasses can widen it via the class's type parameter. */
export interface HasagiCoreEvents {
  /** The connection is fully established (credentials, readiness check, WebSocket if enabled) — also after each successful reconnect */
  "connected": () => void;
  /** A connection attempt is starting — emitted once per credential-discovery attempt (once in total for manual credentials) */
  "connecting": () => void;
  /** A single credential-discovery attempt failed and will be retried — see "connection-failed" for the terminal event */
  "connection-attempt-failed": () => void;
  /** connect() gave up and is about to reject (e.g. attempts exhausted, readiness or WebSocket failure). Not emitted for superseded or cancelled calls. */
  "connection-failed": (error: unknown) => void;
  /** The connection was closed — by disconnect(), the WebSocket closing, or a refused request while no socket is active. Not emitted when connect() tears down an existing connection to reconnect. */
  "disconnected": () => void;
  /** The event WebSocket errored after it was established; errors before that reject connect() instead */
  "websocket-error": (error: Error | undefined) => void;
  /** Every incoming WebSocket event as its raw [opcode, name, payload] tuple, regardless of registered LCU event listeners — see addLCUEventListener for filtered dispatch */
  "lcu-event": <EventName extends keyof LCUWebSocketEvents = "OnJsonApiEvent">(event: [opcode: number, name: EventName, data: LCUWebSocketEvents[EventName]]) => void;
}

/** A filtered LCU WebSocket event listener — see {@link HasagiClient.addLCUEventListener}. */
export type LCUEventListener<EventName extends keyof LCUWebSocketEvents = keyof LCUWebSocketEvents> = {
  /** If present, the callback will only be called if the event's path matches */
  path?: string | RegExp;
  /** If present, the callback will only be called if the event's type is in the array */
  types?: ("Create" | "Update" | "Delete")[];
  /** If present, the callback will only be called if the event's name matches */
  name?: EventName;
  /** Called with the event payload for every event that passes all of the filters above */
  callback: (event: LCUWebSocketEvents[EventName]) => void;
};

/** Options for {@link HasagiClient.connect}. When passing an options object, `authenticationStrategy` is required; omit the object entirely for the default `process` strategy. */
export type ConnectionOptions = {
  /** Whether to open the LCU event WebSocket after connecting. Defaults to true. If disabled, no events are received */
  useWebSocket?: boolean;
  /** The amount of attempts before the connection fails. Defaults to infinite */
  maxConnectionAttempts?: number;
  /** The delay in milliseconds between each (re)connection attempt. Defaults to 5000 */
  connectionAttemptDelay?: number;
  /** How long to wait (in milliseconds) for the WebSocket to open before failing the connection. Defaults to 10000. Only relevant when `useWebSocket` is not disabled. */
  webSocketTimeoutMs?: number;

  /** Configures the readiness check performed after credentials are retrieved. Set to `false` to skip. Defaults to checking `/lol-summoner/v1/current-summoner` with 10 retries / 1 second delay. */
  readinessCheck?: { endpoint?: string; maxRetries?: number; retryDelay?: number } | false;
  /** The self signed Riot Games certificate in string format; Use 'null' to disable certificate validation or omit to use the certificate that is built into Hasagi (works unless Riot changes their root certificate) */
  certificate?: string | null;
} & ({
  /** Read the credentials from a lockfile */
  authenticationStrategy: "lockfile";
  /** Either the lockfile's content or an absolute path to the lockfile */
  lockfile: string;
} | {
  /** Discover the credentials from the running LeagueClientUx process (the default) */
  authenticationStrategy: "process";
} | {
  /** Use the provided `credentials` as-is */
  authenticationStrategy: "manual";
  /** The credentials to connect with — e.g. from {@link getCredentials} */
  credentials: LCUCredentials;
});

/** Retry behavior for LCU requests — see {@link HasagiClient.request} for how defaults, client-wide options and per-call overrides merge. */
export type RequestRetryOptions = {
  /** How many times a failed request is retried before giving up. 0 disables retries */
  maxRetries: number;
  /** In milliseconds */
  retryDelay: number;
  /** Won't retry if one of these status codes is returned. Defaults to [400] */
  noRetryStatusCodes?: number[];
};

/** Options for {@link HasagiClient.poll}. */
export type PollOptions<Method extends string, Path extends string> = {
  /** The delay in milliseconds between polls */
  intervalMs: number;
  /** The maximum number of polls before polling stops. Defaults to unlimited */
  maxExecutions?: number;
  /** Polling stops (and the poll() promise resolves) when this signal aborts */
  signal?: AbortSignal;
  /** Called whenever the poll function is executed and a response is received; Polling will be cancelled if 'true' is returned */
  onResponse?: (response: LCUEndpointResponseType<Method, Path>) => MaybePromise<boolean | void>;
  /** Called whenever the poll function is executed and the response is distinct from the last one; Polling will be cancelled if 'true' is returned */
  onDistinctResponse?: (response: LCUEndpointResponseType<Method, Path>) => MaybePromise<boolean | void>;
  /** Called whenever the poll function fails; Polling will be cancelled if 'true' is returned */
  onError?: (error: any) => MaybePromise<boolean | void>;
};

type LCURequestOptions<Method extends string, Path extends string> = { headers?: Record<string, any>; retryOptions?: Partial<RequestRetryOptions> } &
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    (PathParameters<Path> extends never ? {} : string extends PathParameters<Path> ? {} : { path: { [K in PathParameters<Path>]: string } }) &
    (Path extends keyof LCUEndpoints ? Method extends keyof LCUEndpoints[Path] ? LCUEndpoints[Path][Method] extends { path: any; params: any; body: any; response: any } ? (
        // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        (LCUEndpoints[Path][Method]["body"] extends never ? {} : { body: LCUEndpoints[Path][Method]["body"] }) &
        // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        (LCUEndpoints[Path][Method]["params"] extends never ? {} : {} extends LCUEndpoints[Path][Method]["params"] ? { query?: LCUEndpoints[Path][Method]["params"] } : { query: LCUEndpoints[Path][Method]["params"] })
    ) : {
      query?: Record<string, any>;
      body?: any;
    } : {
      query?: Record<string, any>;
      body?: any;
    } : {
      query?: Record<string, any>;
      body?: any;
    });

/**
 * The `...options` rest-parameter tuple of {@link HasagiClient.request} and {@link HasagiClient.poll}
 * for a typed endpoint: `[options]` when the endpoint requires path/body/query options, `[options?]`
 * when it doesn't. Exported so wrapper functions that forward to `request`/`poll` can type their own
 * rest parameter (`Parameters<...>` can't recover it from the generic overloads) — you rarely need it
 * directly otherwise.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type LCURequestOptionsParameter<Method extends string, Path extends string, AdditionalOptions = {}> = OptionsParameter<LCURequestOptions<Method, Path> & AdditionalOptions>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type OptionsParameter<T> = {} extends T ? [options?: T] : [options: T];

type ExtractParameter<Part> = Part extends `{${infer ParamName}}` ? ParamName : never;

/** Extracts parameters wrapped in braces to a string union type */
type PathParameters<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? ExtractParameter<PartA> | PathParameters<PartB>
  : ExtractParameter<Path>;
