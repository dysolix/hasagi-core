import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Agent } from "https";
import { WebSocket } from "ws";
import { LCUCredentials, MaybePromise, delay, getPortAndBasicAuthToken } from "./util.js";
import { TypedEmitter } from "tiny-typed-emitter";
import RIOT_GAMES_CERTIFICATE from "./riot-games-certificate.js";
import { EndpointsWithMethod, HttpMethod, LCUEndpoint, LCUEndpointResponseType, LCUEndpoints } from "./types/lcu-endpoints.js";
import { LCUError, NotConnectedError, RequestError } from "./errors.js";
import { LCUWebSocketEvents } from "./types/lcu-events.js";

export default class HasagiClient extends TypedEmitter<HasagiCoreEvents> {
    public isConnected: boolean = false;
    /** Will always be null if lockfile authentication is used */
    private processId: number | null = null;
    private port: number | null = null;
    private password: string | null = null;
    private basicAuthToken: string | null = null;
    private lcuAxiosInstance: AxiosInstance | null = null;
    private webSocket: WebSocket | null = null;
    private lcuEventListeners: LCUEventListener[] = [];
    private defaultRetryOptions: RequestRetryOptions | null = null;

    constructor(options?: { defaultRetryOptions?: RequestRetryOptions }) {
        super();

        this.defaultRetryOptions = options?.defaultRetryOptions ?? null;
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

    //#region WebSocket

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
        this.webSocket!.send(JSON.stringify([5, eventName]))
    };

    public unsubscribeWebSocketEvent = (eventName: keyof LCUWebSocketEvents) => {
        if (this.subscribedEvents.delete(eventName))
            this.webSocket!.send(JSON.stringify([6, eventName]));
    }

    //#endregion

    //#region Connection
    public async connect(options?: ConnectionOptions): Promise<void> {
        const maxConnectionAttempts = options?.maxConnectionAttempts ?? -1;
        const useWebSocket = options?.useWebSocket ?? true;
        const connectionAttemptDelay = options?.connectionAttemptDelay ?? 5000;
        const authenticationStrategy = options?.authenticationStrategy ?? "process";
        const lockfile = options?.authenticationStrategy === "lockfile" ? options.lockfile : null;

        this.processId = null;
        this.port = null;
        this.basicAuthToken = null;
        this.lcuAxiosInstance = null;
        this.webSocket = null;
        this.password = null;

        const agent = {
            rejectUnauthorized: options?.certificate !== null,
            ca: options?.certificate === null ? undefined : (options?.certificate ?? RIOT_GAMES_CERTIFICATE)
        }

        if (options?.authenticationStrategy === "manual") {
            const credentials = options.credentials;
            if (!credentials)
                throw new Error("No credentials provided for manual authentication strategy.");

            this.processId = credentials.processId ?? null;
            this.port = credentials.port;
            this.password = credentials.password;
            this.basicAuthToken = Buffer.from(`riot:${credentials.password}`).toString("base64");

            this.lcuAxiosInstance = axios.create({
                baseURL: "https://127.0.0.1:" + this.port,
                httpsAgent: new Agent(agent),
                auth: {
                    username: "riot",
                    password: credentials.password
                },
                adapter: "http"
            });
        } else {
            let attempt = 0;
            while (maxConnectionAttempts === -1 || attempt++ < maxConnectionAttempts) {
                this.emit("connecting");

                try {
                    const authData = authenticationStrategy === "process" ? await getPortAndBasicAuthToken("process") : await getPortAndBasicAuthToken("lockfile", lockfile!);

                    this.processId = authData.processId ?? null;
                    this.port = authData.port;
                    this.password = authData.password;
                    this.basicAuthToken = Buffer.from(`riot:${authData.password}`).toString("base64");

                    this.lcuAxiosInstance = axios.create({
                        baseURL: "https://127.0.0.1:" + this.port,
                        httpsAgent: new Agent(agent),
                        auth: {
                            username: "riot",
                            password: authData.password
                        },
                        adapter: "http"
                    });

                    break;
                } catch (e) {
                    if (attempt >= maxConnectionAttempts && maxConnectionAttempts !== -1)
                        throw new Error("Could not connect to the League of Legends client.", { cause: e });

                    this.emit("connection-attempt-failed");
                    await delay(connectionAttemptDelay);
                }
            }
        }

        // Waits for the client to be ready
        await this.request("get", "/lol-summoner/v1/current-summoner", { retryOptions: { maxRetries: 10, retryDelay: 1000 } }).catch(() => { throw new Error("Successfully retrieved credentials but could not connect to the League of Legends client.") })

        if (useWebSocket) {
            let resolve: any;
            const webSocketConnectionPromise = new Promise(res => resolve = res);

            this.webSocket = new WebSocket(("wss://127.0.0.1:" + this.port), undefined, { headers: { Authorization: "Basic " + this.basicAuthToken }, ...agent });
            this.webSocket.onopen = async (ev) => {
                while (this.webSocket?.readyState !== WebSocket.OPEN) // TODO Check if this is still needed
                    await delay(250);

                resolve();
            }

            this.webSocket.onclose = (ev) => {
                this.onDisconnected();
            }

            this.webSocket.onmessage = (ev) => {
                try {
                    let data = JSON.parse(ev.data.toString('utf8'));
                    if (data.length == 3) this.handleLCUEvent(data as [opcode: number, name: keyof LCUWebSocketEvents, data: LCUWebSocketEvents[string]]); // [opcode: 8, name: string, data: { eventType: string; uri: string; data: any; }]
                } catch (ex) { }
            }

            this.webSocket.onerror = (ev) => { }

            await webSocketConnectionPromise;
        }

        this.onConnected();
    }

    private onConnected() {
        if (this.isConnected)
            return;

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

        this.processId = null;
        this.port = null;
        this.basicAuthToken = null;
        this.lcuAxiosInstance = null;
        this.webSocket = null;
        this.password = null;

        this.emit("disconnected");
    }
    //#endregion

    //#region Requests

    /**
     * Send a request to the League of Legends client (LCU). Authentication is automatically included and the base url is already set.
     */
    public async request<ReturnAxiosResponse extends boolean = false>(config: AxiosRequestConfig & { returnAxiosResponse?: ReturnAxiosResponse, retryOptions?: RequestRetryOptions }): Promise<ReturnAxiosResponse extends true ? AxiosResponse<unknown> : unknown>;
    public async request<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>>(method: Method, path: Path, ...options: LCURequestOptionsParameter<Method, Path>): Promise<LCUEndpointResponseType<Method, Path>>;
    public async request() {
        if (this.lcuAxiosInstance === null)
            throw new NotConnectedError();

        let axiosConfig: AxiosRequestConfig;
        let returnAxiosResponse = false;

        let retryOptions: RequestRetryOptions = {
            maxRetries: 0,
            retryDelay: 1000,
            noRetryStatusCodes: [400],
            ...this.defaultRetryOptions
        };

        if (arguments.length === 1) {
            axiosConfig = arguments[0] as AxiosRequestConfig;
            if (axiosConfig.data !== undefined)
                axiosConfig.headers = { "Content-Type": "application/json", ...axiosConfig.headers };

            if (arguments[0].returnAxiosResponse)
                returnAxiosResponse = true;

            if (arguments[0].retryOptions)
                retryOptions = arguments[0].retryOptions;
        } else {
            const method = arguments[0] as string;
            let path = arguments[1] as string;
            const _config = arguments[2] as LCURequestOptions<string, string> | undefined;

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
                    ..._config?.headers
                }
            }

            returnAxiosResponse = false;

            if (_config?.retryOptions)
                retryOptions = _config.retryOptions;
        }

        const maxAttempts = retryOptions.maxRetries + 1;
        const retryDelay = retryOptions.retryDelay;
        const noRetryStatusCodes = retryOptions?.noRetryStatusCodes ?? [400];

        let errors: any[] = [];
        while (errors.length < maxAttempts) {
            try {
                const axiosResponse = await this.lcuAxiosInstance.request(axiosConfig).catch(err => {
                    if (err instanceof AxiosError && err.response)
                        throw new LCUError(err);

                    throw new RequestError(err);
                });

                if (returnAxiosResponse)
                    return axiosResponse;

                return axiosResponse.data;
            } catch (err) {
                errors.push(err);

                if (err instanceof LCUError && noRetryStatusCodes.includes(err.statusCode))
                    if (errors.length === 1)
                        throw err;
                    else
                        throw new AggregateError(errors, `Request failed after ${errors.length} attempts.`);

                if (errors.length >= maxAttempts) {
                    if (!this.webSocket && err instanceof RequestError && err.errorCode === "ECONNREFUSED") {
                        this.onDisconnected();
                        throw err;
                    }

                    if (errors.length === 1)
                        throw err;
                    else
                        throw new AggregateError(errors, `Request failed after ${errors.length} attempts.`);
                }

                await delay(retryDelay);
            }
        }

        throw new Error("An unknown error occurred. Please report this issue to the developer."); // Should never be reached
    }

    /**
     * Polls an endpoint with a specific interval and executes callbacks on response, distinct response and error
     */
    public async poll<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>>(method: Method, path: Path, pollOptions: PollOptions<Method, Path>, ...options: LCURequestOptionsParameter<Method, Path>): Promise<void> {
        const pollFunction = async () => {
            let lastResponse: any = null;
            let executions = 1;

            while (executions++ < (pollOptions.maxExecutions ?? Number.MAX_SAFE_INTEGER)) {
                try {
                    const response = await this.request(method, path, { ...arguments[3], retryOptions: { maxRetries: 0 } }); // Disable retries for poll requests

                    if (pollOptions.onResponse && await pollOptions.onResponse(response))
                        return;

                    if (lastResponse === null || JSON.stringify(lastResponse) !== JSON.stringify(response)) {
                        lastResponse = response;
                        if (pollOptions.onDistinctResponse && await pollOptions.onDistinctResponse(response))
                            return;
                    }
                } catch (err) {
                    if (pollOptions.onError && await pollOptions.onError(err))
                        return;
                }

                await delay(pollOptions.intervalMs);
            }
        }

        await pollFunction();
    }

    /**
     * Builds a request function that calls a specific endpoint with full type support for parameter and response types
     * @param method The http method the request should use
     * @param path The path the request should use
     * @returns A function that takes all of the endpoint's parameters that returns a Promise resolving to the response data including full auto-generated types for most endpoints
    */
    public buildRequest<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>, ParameterTypes extends any[] = Parameters<LCUEndpoint<Method, Path>>, ResponseType = LCUEndpointResponseType<Method, Path>>(method: Method, path: Path, options?: { retryOptions?: RequestRetryOptions, transformResponse?: (response: Awaited<ReturnType<LCUEndpoint<Method, Path>>>) => ResponseType; transformParameters?: (...args: ParameterTypes) => Readonly<Parameters<LCUEndpoint<Method, Path>>> | Promise<Readonly<Parameters<LCUEndpoint<Method, Path>>>> }): (...args: ParameterTypes) => Promise<ResponseType> {
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
                headers: {
                    "Content-Type": body !== undefined && method !== "get" ? "application/json" : undefined
                },
                retryOptions: options?.retryOptions
            });

            if (options?.transformResponse)
                return options.transformResponse(lcuResponse as any);

            return lcuResponse;
        }

        return callableEndpoint as any;
    }
    //#endregion

    //#region LCU Events
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

        if (!listener.name && listener.path) {
            this.subscribeWebSocketEvent("OnJsonApiEvent");
            (listener.name as string) = "OnJsonApiEvent";
        }

        this.lcuEventListeners.push(listener);
    }
    /**
     * Removes the first listener that matches the provided listener parameter.
     * @argument listener Can be the callback function, the event name, the event path or the entire LCUEventListener object
     * @returns true, if the listener was found and removed
     */
    public removeLCUEventListener(listener: LCUEventListener | LCUEventListener["callback"] | string) {
        if (typeof listener === "function") {
            const index = this.lcuEventListeners.findIndex(registeredListener => registeredListener.callback === listener);
            if (index === -1)
                return false;

            const removedListeners = this.lcuEventListeners.splice(index, 1);
            if (removedListeners[0].name && !this.lcuEventListeners.some(listener => listener.name === removedListeners[0].name))
                this.unsubscribeWebSocketEvent(removedListeners[0].name)
        } else if (typeof listener === "string") {
            const index = this.lcuEventListeners.findIndex(registeredListener => registeredListener.name === listener || registeredListener.path === listener);
            if (index === -1)
                return false;

            const removedListeners = this.lcuEventListeners.splice(index, 1);
            if (removedListeners[0].name && !this.lcuEventListeners.some(listener => listener.name === removedListeners[0].name))
                this.unsubscribeWebSocketEvent(removedListeners[0].name)
        } else {
            const index = this.lcuEventListeners.indexOf(listener);
            if (index === -1)
                return false;

            const removedListeners = this.lcuEventListeners.splice(index, 1);
            if (removedListeners[0].name && !this.lcuEventListeners.some(listener => listener.name === removedListeners[0].name))
                this.unsubscribeWebSocketEvent(removedListeners[0].name)
        }

        return true;
    }

    public removeAllLCUEventListeners() {
        this.lcuEventListeners = [];
        this.subscribedEvents.forEach(event => this.unsubscribeWebSocketEvent(event));
    }

    private handleLCUEvent<EventName extends keyof LCUWebSocketEvents = "OnJsonApiEvent">(event: [opcode: number, name: EventName, data: LCUWebSocketEvents[EventName]]) {
        this.emit("lcu-event", event);

        const uri = (event[2] as any).uri;
        const eventType = (event[2] as any).eventType;
        const name = event[1];

        this.lcuEventListeners.filter(listener => {
            if (listener.path && (typeof listener.path === "string" ? uri !== listener.path : !listener.path.test(uri)))
                return false;

            if (listener.types && !listener.types.includes(eventType as any))
                return false;

            if (listener.name && name !== listener.name)
                return false;

            return true;
        }).forEach(listener => listener.callback(event[2]));
    }
    //#endregion
}

export interface HasagiCoreEvents {
    "connected": () => void,
    "connecting": () => void,
    "connection-attempt-failed": () => void,
    "disconnected": () => void,
    "lcu-event": <EventName extends keyof LCUWebSocketEvents = "OnJsonApiEvent">(event: [opcode: number, name: EventName, data: LCUWebSocketEvents[EventName]]) => void
}

export type LCUEventListener<EventName extends keyof LCUWebSocketEvents = keyof LCUWebSocketEvents> = {
    /** If present, the callback will only be called if the event's path matches */
    path?: string | RegExp;
    /** If present, the callback will only be called if the event's type is in the array */
    types?: ("Create" | "Update" | "Delete")[];
    /** If present, the callback will only be called if the event's name matches */
    name?: EventName;
    callback: (event: LCUWebSocketEvents[EventName]) => void;
}

export type ConnectionOptions = {
    useWebSocket?: boolean;
    /** The amount of attempts before the connection fails. Defaults to infinite */
    maxConnectionAttempts?: number;
    /** The delay in milliseconds between each (re)connection attempt. Defaults to 5000 */
    connectionAttemptDelay?: number;

    /** The self signed Riot Games certificate in string format; Use 'null' to disable certificate validation or omit to use the certificate that is built into Hasagi (works unless Riot changes their root certificate) */
    certificate?: string | null;
} & ({
    authenticationStrategy: "lockfile",
    /**
     * This should either be the lockfile's content or an absolute path to the lockfile
     */
    lockfile: string
} | {
    authenticationStrategy: "process"
} | {
    authenticationStrategy: "manual",
    credentials: LCUCredentials
})

export type RequestRetryOptions = {
    maxRetries: number;
    /** In milliseconds */
    retryDelay: number;
    /** Won't retry if one of these status codes is returned. Defaults to [400] */
    noRetryStatusCodes?: number[];
}

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

type LCURequestOptions<Method extends string, Path extends string> = { headers?: Record<string, any>, retryOptions?: RequestRetryOptions } &
    (PathParameters<Path> extends never ? {} : string extends PathParameters<Path> ? {} : { path: { [K in PathParameters<Path>]: string } }) &
    (Path extends keyof LCUEndpoints ? Method extends keyof LCUEndpoints[Path] ? LCUEndpoints[Path][Method] extends { path: any, params: any, body: any, response: any } ? (
        (LCUEndpoints[Path][Method]["body"] extends never ? {} : { body: LCUEndpoints[Path][Method]["body"] }) &
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

export type LCURequestOptionsParameter<Method extends string, Path extends string, AdditionalOptions = {}> = OptionsParameter<LCURequestOptions<Method, Path> & AdditionalOptions>;

type OptionsParameter<T> = {} extends T ? [options?: T] : [options: T];

type ExtractParemeter<Part> = Part extends `{${infer ParamName}}` ? ParamName : never;

/** Extracts parameters wrapped in braces to a string union type */
type PathParameters<Path> = Path extends `${infer PartA}/${infer PartB}`
    ? ExtractParemeter<PartA> | PathParameters<PartB>
    : ExtractParemeter<Path>;