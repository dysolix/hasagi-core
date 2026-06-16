import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Agent } from "https";
import { WebSocket } from "ws";
import { LCUCredentials, MaybePromise, delay, getCredentials } from "./util.js";
import { TypedEmitter } from "tiny-typed-emitter";
import RIOT_GAMES_CERTIFICATE from "./riot-games-certificate.js";
import { EndpointsWithMethod, HttpMethod, LCUEndpoint, LCUEndpointResponseType, LCUEndpoints } from "./types/lcu-endpoints.js";
import { LCUError, NotConnectedError, RequestError } from "./errors.js";
import { LCUWebSocketEvents } from "./types/lcu-events.js";

/**
 * Shared agent for the standalone `request` function; disables certificate validation.
 * No keep-alive: the standalone helper is for one-off calls, and a pooled socket would keep the
 * process alive at exit. Repeated/high-frequency requests should use a HasagiClient instance, whose
 * agent pools sockets (keep-alive) and is destroyed on disconnect.
 */
const HTTPS_AGENT = new Agent({ rejectUnauthorized: false });

/**
 * Parses the two supported request argument shapes (a raw axios config, or method/path/options)
 * into a normalized form shared by both the standalone `request` function and `HasagiClient.request`.
 */
function parseRequestArgs(args: any[], defaultRetryOptions?: RequestRetryOptions | null): { axiosConfig: AxiosRequestConfig; returnAxiosResponse: boolean; retryOptions: RequestRetryOptions } {
  let retryOptions: RequestRetryOptions = {
    maxRetries: 0,
    retryDelay: 1000,
    noRetryStatusCodes: [400],
    ...defaultRetryOptions,
  };

  let axiosConfig: AxiosRequestConfig;
  let returnAxiosResponse = false;

  if (typeof args[0] !== "string") {
    // Raw axios config overload
    const config = args[0] as AxiosRequestConfig & { returnAxiosResponse?: boolean; retryOptions?: RequestRetryOptions };
    // Shallow-copy so we never mutate the caller's config object (e.g. injecting Content-Type below),
    // and strip our own non-axios keys so they aren't forwarded into the axios request config.
    const configCopy = { ...config };
    delete configCopy.returnAxiosResponse;
    delete configCopy.retryOptions;
    axiosConfig = configCopy;
    if (config.data !== undefined)
      axiosConfig.headers = { "Content-Type": "application/json", ...config.headers };

    if (config.returnAxiosResponse)
      returnAxiosResponse = true;

    if (config.retryOptions)
      retryOptions = config.retryOptions;
  } else {
    // method/path/options overload
    const method = args[0] as string;
    let path = args[1] as string;
    const _config = args[2] as LCURequestOptions<string, string> | undefined;

    // Replace path parameters
    if (_config && "path" in _config) {
      Object.entries(_config.path as Record<string, string>).forEach(([key, value]) => {
        path = path.replace(`{${key}}`, value);
      });
    }

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

    if (_config?.retryOptions)
      retryOptions = _config.retryOptions;
  }

  return { axiosConfig, returnAxiosResponse, retryOptions };
}

/**
 * Runs an axios request with the shared retry/error-wrapping behavior.
 * @param send Performs the actual axios call (raw or via an instance).
 * @param onExhausted Optional hook invoked once all attempts are used up, before the final throw. May throw to short-circuit.
 */
async function runWithRetry(send: () => Promise<AxiosResponse<unknown>>, returnAxiosResponse: boolean, retryOptions: RequestRetryOptions, onExhausted?: (err: unknown) => void): Promise<unknown> {
  const maxAttempts = retryOptions.maxRetries + 1;
  const retryDelay = retryOptions.retryDelay;
  const noRetryStatusCodes = retryOptions.noRetryStatusCodes ?? [400];

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
 * Authorization and port will automatically be set using the provided credentials. Certificate validation is disabled.
 * @param credentials Port and password. You can use the `getCredentials` function to get them.
 */
async function request<ReturnAxiosResponse extends boolean = false>(credentials: LCUCredentials, config: AxiosRequestConfig & { returnAxiosResponse?: ReturnAxiosResponse; retryOptions?: RequestRetryOptions }): Promise<ReturnAxiosResponse extends true ? AxiosResponse<unknown> : unknown>;
async function request<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>>(credentials: LCUCredentials, method: Method, path: Path, ...options: LCURequestOptionsParameter<Method, Path>): Promise<LCUEndpointResponseType<Method, Path>>;
async function request() {
  const credentials: LCUCredentials = arguments[0];
  const { axiosConfig, returnAxiosResponse, retryOptions } = parseRequestArgs(Array.prototype.slice.call(arguments, 1));

  const finalAxiosConfig: AxiosRequestConfig = {
    ...axiosConfig,
    baseURL: `https://127.0.0.1:${credentials.port}`,
    auth: {
      username: "riot",
      password: credentials.password,
    },
    // Honor a caller-supplied agent (passed via the axios config overload); fall back to the shared, non-validating agent.
    httpsAgent: axiosConfig.httpsAgent ?? HTTPS_AGENT,
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
export default class HasagiClient extends TypedEmitter<HasagiCoreEvents> {
  /**
   * The most recently constructed instance. Every `new HasagiClient()` overwrites it — see
   * {@link HasagiClient.getInstance}. Holding only the latest is intentional (a convenience for
   * single-client apps), so be deliberate about constructing more than one.
   */
  private static Instance?: HasagiClient;
  /**
   * Returns the **most recently constructed** `HasagiClient`, or `undefined` if none exists.
   * @note This is a convenience global, not a true singleton: constructing another client replaces
   * what this returns. If your app uses multiple clients, pass references explicitly instead.
   */
  public static getInstance = () => HasagiClient.Instance;

  public isConnected: boolean = false;
  /** Will always be null if lockfile authentication is used */
  private processId: number | null = null;
  private port: number | null = null;
  private password: string | null = null;
  private basicAuthToken: string | null = null;
  private lcuAxiosInstance: AxiosInstance | null = null;
  private httpsAgent: Agent | null = null;
  private webSocket: WebSocket | null = null;
  private lcuEventListeners: LCUEventListener[] = [];
  private defaultRetryOptions: RequestRetryOptions | null = null;
  /**
   * Monotonic token identifying the in-flight {@link HasagiClient.connect} call. Every connect()
   * bumps it; an older call whose token no longer matches has been superseded by a newer connect()
   * and bails out without mutating shared state (generalizes the `this.webSocket === ws` guards).
   */
  private connectGeneration = 0;

  /**
   * Creates a new HasagiClient instance.
   * @note Each instantiation overwrites `HasagiClient.Instance`. If multiple instances are created, `HasagiClient.getInstance()` will return the most recently constructed one.
   */
  constructor(options?: { defaultRetryOptions?: RequestRetryOptions }) {
    super();

    this.defaultRetryOptions = options?.defaultRetryOptions ?? null;
    HasagiClient.Instance = this;
  }

  /** Will always be null if lockfile authentication is used */
  public readonly getProcessId = () => this.processId;
  public readonly getPassword = () => this.password;
  public readonly getPort = () => this.port;
  /** The base64 encoded basic auth token ("riot:{password}") */
  public readonly getBasicAuthToken = () => this.basicAuthToken;

  /** e.g. riot:123456789@127.0.0.1:12345 */
  public readonly getHostWithAuthentication = () => this.password && this.port ? `riot:${encodeURIComponent(this.password)}@127.0.0.1:${this.port}` : null;

  public readonly setDefaultRetryOptions = (options: RequestRetryOptions) => this.defaultRetryOptions = options;

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

  public subscribeWebSocketEvent = (eventName: keyof LCUWebSocketEvents) => {
    if (this.webSocket === null) {
      this.subscribedEvents.add(eventName);
      return;
    }

    if (this.subscribedEvents.has(eventName))
      return;

    this.subscribedEvents.add(eventName);
    this.webSocket!.send(JSON.stringify([5, eventName]));
  };

  public unsubscribeWebSocketEvent = (eventName: keyof LCUWebSocketEvents) => {
    if (this.webSocket === null) return;
    if (this.subscribedEvents.delete(eventName))
      this.webSocket!.send(JSON.stringify([6, eventName]));
  };

  // #endregion

  // #region Connection
  /**
   * Connects to the League of Legends client: discovers credentials, waits until the client is ready,
   * and (unless `useWebSocket` is disabled) opens the event WebSocket.
   *
   * Safe to call while already connected — it performs a clean reconnect, re-subscribing existing
   * event listeners. Also safe to call concurrently: the latest call wins and any earlier in-flight
   * call bails out (via {@link HasagiClient.connectGeneration}) without touching shared state. If any
   * step fails the client is left in a consistent disconnected state and the error is thrown (so a
   * subsequent {@link HasagiClient.request} will throw {@link NotConnectedError}).
   */
  public async connect(options?: ConnectionOptions): Promise<void> {
    const useWebSocket = options?.useWebSocket ?? true;

    // Claim this connect() as the current one. A later connect() bumps the token, after which the
    // checks below short-circuit this (now superseded) call so it can't clobber the newer state.
    const myGen = ++this.connectGeneration;

    // Deterministically tear down any existing connection first. Setting isConnected = false here
    // (rather than relying on the old socket's onclose, which the identity guard ignores) ensures
    // onConnected() re-subscribes events and emits "connected" on a forced reconnect. Done silently
    // (no "disconnected" emit) to avoid re-entrancy if a "disconnected" handler calls connect().
    this.isConnected = false;
    this.resetConnectionState();

    // TLS options shared by the request agent and the WebSocket. `certificate: null` disables
    // validation; otherwise the provided (or built-in Riot) certificate is trusted.
    const agent = {
      rejectUnauthorized: options?.certificate !== null,
      ca: options?.certificate === null ? undefined : (options?.certificate ?? RIOT_GAMES_CERTIFICATE),
    };
    // Reused across every request for this connection; keep-alive pools sockets so each LCU call
    // skips a fresh TCP + TLS handshake. Destroyed by resetConnectionState() on disconnect/reconnect.
    this.httpsAgent = new Agent({ ...agent, keepAlive: true });

    try {
      let credentials: LCUCredentials;
      if (options?.authenticationStrategy === "manual") {
        if (!options.credentials)
          throw new Error("No credentials provided for manual authentication strategy.");
        credentials = options.credentials;
      } else {
        const strategy = options?.authenticationStrategy ?? "process";
        const lockfile = options?.authenticationStrategy === "lockfile" ? options.lockfile : null;
        credentials = await this.acquireCredentials(strategy, lockfile, options?.maxConnectionAttempts ?? -1, options?.connectionAttemptDelay ?? 5000, myGen);
      }
      // Superseded by a newer connect() while acquiring credentials — the newer call owns the state.
      if (this.connectGeneration !== myGen)
        return;
      this.applyCredentials(credentials);

      if (options?.readinessCheck !== false) {
        await this.runReadinessCheck(options?.readinessCheck);
        if (this.connectGeneration !== myGen)
          return;
      }

      if (useWebSocket) {
        await this.openWebSocket(agent, options?.webSocketTimeoutMs ?? 10000);
        if (this.connectGeneration !== myGen)
          return;
      }
    } catch (err) {
      // Superseded mid-connect: a newer connect() already reset/rebuilt the state, so leave it alone.
      if (this.connectGeneration !== myGen)
        return;
      // Any failure after the agent was created — leave the client cleanly disconnected, then rethrow.
      this.resetConnectionState();
      throw err;
    }

    this.onConnected();
  }

  /** Closes the current connection. No-op if not connected. */
  public disconnect(): void {
    if (!this.isConnected) return;
    this.onDisconnected();
  }

  private onConnected() {
    if (this.isConnected)
      return;

    // Re-send every queued / previously-subscribed event on the now-open socket.
    const previouslySubscribedEvents = this.subscribedEvents;
    this.subscribedEvents = new Set();
    previouslySubscribedEvents.forEach(event => this.subscribeWebSocketEvent(event));

    this.isConnected = true;
    this.emit("connected");
  }

  private onDisconnected() {
    if (!this.isConnected)
      return;

    this.isConnected = false;
    this.resetConnectionState();
    this.emit("disconnected");
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
      // Stop a superseded connect() from retrying forever (maxAttempts === -1). connect() discards
      // this throw via its generation check, so the message is never surfaced to the caller.
      if (this.connectGeneration !== generation)
        throw new Error("connect() superseded by a newer connection attempt.");

      this.emit("connecting");

      try {
        return strategy === "process" ? await getCredentials("process") : await getCredentials("lockfile", lockfile!);
      } catch (e) {
        if (maxAttempts !== -1 && attempt >= maxAttempts)
          throw new Error("Could not connect to the League of Legends client.", { cause: e });

        this.emit("connection-attempt-failed");
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
   * Opens the LCU event WebSocket, resolving once it's open and rejecting (with a clear error) on an
   * early error/close or after `timeoutMs`. Once open, a later close drives onDisconnected() and
   * runtime errors surface via the "websocket-error" event. A stale socket (replaced by a newer
   * connect() call) is ignored via an identity check so it can't mutate the current connection.
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

        // Ignore close events from a stale socket replaced by a newer connect() call.
        if (this.webSocket === ws) this.onDisconnected();
      };

      ws.onmessage = (ev) => {
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

        // Ignore error events from a stale socket replaced by a newer connect() call.
        if (this.webSocket === ws) this.emit("websocket-error", ev.error);
      };
    });
  }

  // #endregion

  // #region Requests

  /**
   * Sends a request to the League of Legends client (LCU). Authentication and the base URL are added
   * automatically. Call it either with a raw axios config, or with a typed `method` + `path` (+ options)
   * for full request/response typing on known endpoints.
   *
   * Failures are wrapped: a response with a non-success status becomes an {@link LCUError}, a transport
   * failure becomes a {@link RequestError}, and (with retries configured) repeated failures become an
   * `AggregateError`. Throws {@link NotConnectedError} if the client isn't connected.
   * @throws {NotConnectedError} when called before a successful `connect()`.
   */
  public async request<ReturnAxiosResponse extends boolean = false>(config: AxiosRequestConfig & { returnAxiosResponse?: ReturnAxiosResponse; retryOptions?: RequestRetryOptions }): Promise<ReturnAxiosResponse extends true ? AxiosResponse<unknown> : unknown>;
  public async request<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>>(method: Method, path: Path, ...options: LCURequestOptionsParameter<Method, Path>): Promise<LCUEndpointResponseType<Method, Path>>;
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
   * callback returns `true` or after `maxExecutions` (default: unlimited). Resolves once polling stops.
   */
  public async poll<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>>(method: Method, path: Path, pollOptions: PollOptions<Method, Path>, ...options: LCURequestOptionsParameter<Method, Path>): Promise<void> {
    const maxExecutions = pollOptions.maxExecutions ?? Number.MAX_SAFE_INTEGER;
    let lastResponseJson: string | undefined;
    let executions = 0;

    while (executions++ < maxExecutions) {
      try {
        const response = await this.request(method, path, { ...(options as any)[0], retryOptions: { maxRetries: 0 } }); // Disable retries for poll requests

        if (pollOptions.onResponse && await pollOptions.onResponse(response))
          return;

        // Serialize the new response once and compare against the previously cached string.
        const responseJson = JSON.stringify(response);
        if (lastResponseJson === undefined || lastResponseJson !== responseJson) {
          lastResponseJson = responseJson;
          if (pollOptions.onDistinctResponse && await pollOptions.onDistinctResponse(response))
            return;
        }
      } catch (err) {
        if (pollOptions.onError && await pollOptions.onError(err))
          return;
      }

      // Skip the wait after the final execution.
      if (executions < maxExecutions)
        await delay(pollOptions.intervalMs);
    }
  }

  /**
     * Builds a request function that calls a specific endpoint with full type support for parameter and response types
     * @param method The http method the request should use
     * @param path The path the request should use
     * @returns A function that takes all of the endpoint's parameters that returns a Promise resolving to the response data including full auto-generated types for most endpoints
    */
  public buildRequest<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>, ParameterTypes extends any[] = Parameters<LCUEndpoint<Method, Path>>, ResponseType = LCUEndpointResponseType<Method, Path>>(method: Method, path: Path, options?: { retryOptions?: RequestRetryOptions; transformResponse?: (response: Awaited<ReturnType<LCUEndpoint<Method, Path>>>) => ResponseType; transformParameters?: (...args: ParameterTypes) => Readonly<Parameters<LCUEndpoint<Method, Path>>> | Promise<Readonly<Parameters<LCUEndpoint<Method, Path>>>> }): (...args: ParameterTypes) => Promise<ResponseType> {
    const callableEndpoint = async (...args: any) => {
      if (options?.transformParameters)
        args = await options.transformParameters(...args);

      const pathParams = path.match(/{(.*?)}/g)?.map(str => str.substring(1, str.length - 1)) ?? [];
      let i = 0;
      let requestPath = path;
      for (const param of pathParams)
        requestPath = requestPath.replace(`{${param}}`, args[i++]) as any;

      const body = args[i];

      const lcuResponse = await this.request({
        method,
        url: requestPath,
        data: method !== "get" ? body : undefined,
        params: method === "get" ? body : undefined,
        headers: { "Content-Type": body !== undefined && method !== "get" ? "application/json" : undefined },
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
     * Adds a LCU event listener. If only a path is provided then OnJsonApiEvent will automatically be subscribed.
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
   * Removes the first listener matching the given parameter — a callback function, an event name, an
   * event path, or the entire {@link LCUEventListener} object. If no remaining listener subscribes to
   * the removed listener's event name, that event is also unsubscribed from the WebSocket.
   * @returns `true` if a listener was found and removed, otherwise `false`.
   */
  public removeLCUEventListener(listener: LCUEventListener | LCUEventListener["callback"] | string) {
    const index = typeof listener === "function"
      ? this.lcuEventListeners.findIndex(l => l.callback === listener)
      : typeof listener === "string"
        ? this.lcuEventListeners.findIndex(l => l.name === listener || l.path === listener)
        : this.lcuEventListeners.indexOf(listener);

    if (index === -1)
      return false;

    const [removed] = this.lcuEventListeners.splice(index, 1);
    if (removed.name && !this.lcuEventListeners.some(l => l.name === removed.name))
      this.unsubscribeWebSocketEvent(removed.name);

    return true;
  }

  public removeAllLCUEventListeners() {
    this.lcuEventListeners = [];
    this.subscribedEvents.forEach(event => this.unsubscribeWebSocketEvent(event));
    // Clear directly: unsubscribeWebSocketEvent is a no-op (and doesn't clear the set) while disconnected.
    this.subscribedEvents.clear();
  }

  private handleLCUEvent<EventName extends keyof LCUWebSocketEvents = "OnJsonApiEvent">(event: [opcode: number, name: EventName, data: LCUWebSocketEvents[EventName]]) {
    // Isolate "lcu-event" emitter listeners (like the path/name listeners below) so a throwing
    // handler can't propagate out of the WebSocket message handler or abort the dispatch.
    try {
      this.emit("lcu-event", event);
    } catch {
      // Listener errors are contained here and do not affect the path/name listeners.
    }

    const payload = event[2] as any;
    const uri = payload?.uri;
    const eventType = payload?.eventType;
    const name = event[1];

    // Snapshot the listeners so a callback that adds/removes listeners during dispatch can't skip
    // siblings (e.g. a self-removing one-shot listener). Single inlined pass — no per-element
    // predicate closure or second forEach pass like the previous filter().forEach().
    for (const listener of this.lcuEventListeners.slice()) {
      if (listener.path && (typeof listener.path === "string" ? uri !== listener.path : !listener.path.test(uri)))
        continue;

      if (listener.types && !listener.types.includes(eventType as any))
        continue;

      if (listener.name && name !== listener.name)
        continue;

      // Isolate each callback so one throwing listener doesn't abort the others.
      try {
        listener.callback(event[2]);
      } catch {
        // Listener callback errors are contained here and do not affect other listeners.
      }
    }
  }
  // #endregion
}

export interface HasagiCoreEvents {
  "connected": () => void;
  "connecting": () => void;
  "connection-attempt-failed": () => void;
  "disconnected": () => void;
  "websocket-error": (error: Error | undefined) => void;
  "lcu-event": <EventName extends keyof LCUWebSocketEvents = "OnJsonApiEvent">(event: [opcode: number, name: EventName, data: LCUWebSocketEvents[EventName]]) => void;
}

export type LCUEventListener<EventName extends keyof LCUWebSocketEvents = keyof LCUWebSocketEvents> = {
  /** If present, the callback will only be called if the event's path matches */
  path?: string | RegExp;
  /** If present, the callback will only be called if the event's type is in the array */
  types?: ("Create" | "Update" | "Delete")[];
  /** If present, the callback will only be called if the event's name matches */
  name?: EventName;
  callback: (event: LCUWebSocketEvents[EventName]) => void;
};

export type ConnectionOptions = {
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
  authenticationStrategy: "lockfile";
  /**
     * This should either be the lockfile's content or an absolute path to the lockfile
     */
  lockfile: string;
} | {
  authenticationStrategy: "process";
} | {
  authenticationStrategy: "manual";
  credentials: LCUCredentials;
});

export type RequestRetryOptions = {
  maxRetries: number;
  /** In milliseconds */
  retryDelay: number;
  /** Won't retry if one of these status codes is returned. Defaults to [400] */
  noRetryStatusCodes?: number[];
};

export type PollOptions<Method extends string, Path extends string> = {
  intervalMs: number;
  maxExecutions?: number;
  /** Called whenever the poll function is executed and a response is received; Polling will be cancelled if 'true' is returned */
  onResponse?: (response: LCUEndpointResponseType<Method, Path>) => MaybePromise<boolean | void>;
  /** Called whenever the poll function is executed and the response is distinct from the last one; Polling will be cancelled if 'true' is returned */
  onDistinctResponse?: (response: LCUEndpointResponseType<Method, Path>) => MaybePromise<boolean | void>;
  /** Called whenever the poll function fails; Polling will be cancelled if 'true' is returned */
  onError?: (error: any) => MaybePromise<boolean | void>;
};

type LCURequestOptions<Method extends string, Path extends string> = { headers?: Record<string, any>; retryOptions?: RequestRetryOptions } &
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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type LCURequestOptionsParameter<Method extends string, Path extends string, AdditionalOptions = {}> = OptionsParameter<LCURequestOptions<Method, Path> & AdditionalOptions>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type OptionsParameter<T> = {} extends T ? [options?: T] : [options: T];

type ExtractParameter<Part> = Part extends `{${infer ParamName}}` ? ParamName : never;

/** Extracts parameters wrapped in braces to a string union type */
type PathParameters<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? ExtractParameter<PartA> | PathParameters<PartB>
  : ExtractParameter<Path>;
