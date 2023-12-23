import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { Agent } from "https";
import { WebSocket } from "ws";
import { delay, getPortAndBasicAuthToken } from "./util.js";
import RequestError from "./request-error.js";
import { TypedEmitter } from "tiny-typed-emitter";
import { LCUEndpoint, LCUEndpointResponseType, LCUWebSocketEvents, HttpMethod, EndpointsWithMethod, ConnectionOptions, HasagiEvents, LCUEventListener, LCURequestPayload, LCURequestConfig } from "./index"

export default class HasagiClient extends TypedEmitter<HasagiEvents> {
    public isConnected: boolean = false;
    private port: number | null = null;
    private basicAuthToken: string | null = null;
    private lcuAxiosInstance: AxiosInstance | null = null;
    private webSocket: WebSocket | null = null;
    private lcuEventListeners: LCUEventListener[] = [];

    getPort = () => this.port;
    /** The base64 encoded basic auth token ("riot:{password}") */
    getBasicAuthToken = () => this.basicAuthToken;

    /**
     * Builds a request function that calls a specific endpoint with full type support for parameter and response types
     * @param method The http method the request should use
     * @param path The path the request should use
     * @returns A function that takes all of the endpoint's parameters that returns a Promise resolving to the response data including full auto-generated types for most endpoints
     * @throws {RequestError} 
    */
    buildRequest<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>, ParameterTypes extends any[] = Parameters<LCUEndpoint<Method, Path>>, ResponseType = LCUEndpointResponseType<Method, Path>>(method: Method, path: Path, options?: { transformResponse?: (response: Awaited<ReturnType<LCUEndpoint<Method, Path>>>) => ResponseType; transformParameters?: (...args: ParameterTypes) => Readonly<Parameters<LCUEndpoint<Method, Path>>> | Promise<Readonly<Parameters<LCUEndpoint<Method, Path>>>> }): (...args: ParameterTypes) => Promise<ResponseType> {
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
                path: requestPath,
                body: method !== "get" ? body : undefined,
                params: method === "get" ? body : undefined,
                headers: {
                    "Content-Type": body !== undefined && method !== "get" ? "application/json" : undefined
                },
            });

            if (options?.transformResponse)
                return options.transformResponse(lcuResponse as any);

            return lcuResponse;
        }

        return callableEndpoint as any;
    }

    //#region WebSocket

    private subscribedEvents = new Set<keyof LCUWebSocketEvents>();

    public subscribeWebSocketEvent = (eventName: keyof LCUWebSocketEvents) => {
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

        this.port = null;
        this.basicAuthToken = null;
        this.lcuAxiosInstance = null;
        this.webSocket = null;

        let attempt = 0;
        while (maxConnectionAttempts === -1 || attempt++ < maxConnectionAttempts) {
            this.emit("connecting");

            try {
                const authData = authenticationStrategy === "process" ? await getPortAndBasicAuthToken("process") : await getPortAndBasicAuthToken("lockfile", lockfile!);

                this.port = authData.port;
                this.basicAuthToken = Buffer.from(`riot:${authData.password}`).toString("base64");

                this.lcuAxiosInstance = axios.create({
                    baseURL: "https://127.0.0.1:" + this.port,
                    httpsAgent: new Agent({ rejectUnauthorized: false }),
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

        this.lcuAxiosInstance!.interceptors.response.use(res => { return res; }, err => {
            if (err instanceof AxiosError) {
                if (err.code === "ECONNREFUSED") {
                    if (this.webSocket === null) {
                        this.onDisconnected();
                    }
                }
            }

            throw err;
        })

        // Waits for the client to be ready. TODO: Add timeout
        while (await this.request("get", "/lol-summoner/v1/current-summoner").then(() => false, () => true))
            await delay(1000);

        if (useWebSocket) {
            let resolve: any;
            const webSocketConnectionPromise = new Promise(res => resolve = res);

            this.webSocket = new WebSocket(("wss://127.0.0.1:" + this.port), undefined, { headers: { Authorization: "Basic " + this.basicAuthToken }, rejectUnauthorized: false });
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
        this.port = null;
        this.basicAuthToken = null;
        this.lcuAxiosInstance = null;
        this.webSocket = null;

        this.emit("disconnected");
    }
    //#endregion

    //#region Requests

    /**
     * Send a request to the League of Legends client (LCU). Authentication is automatically included and the base url is already set.
     */
    public async request<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>>(config: LCURequestConfig<Method, Path> & { returnAxiosResponse: true }): Promise<AxiosResponse<LCUEndpointResponseType<Method, Path>>>
    public async request<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>>(config: LCURequestConfig<Method, Path> & { returnAxiosResponse?: false }): Promise<LCUEndpointResponseType<Method, Path>>
    public async request(method: string, path: string, options?: LCURequestPayload & { returnAxiosResponse: true }): Promise<AxiosResponse<unknown>>;
    public async request(method: string, path: string, options?: LCURequestPayload & { returnAxiosResponse?: false }): Promise<unknown>;
    public async request<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>>(method: Method, path: Path, options?: LCURequestPayload & { returnAxiosResponse: true }): Promise<AxiosResponse<LCUEndpointResponseType<Method, Path>>>;
    public async request<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>>(method: Method, path: Path, options?: LCURequestPayload & { returnAxiosResponse?: false }): Promise<LCUEndpointResponseType<Method, Path>>;
    public async request() {
        if (this.lcuAxiosInstance === null)
            throw new Error("Hasagi is not connected to the League of Legends client.");

        let config: LCURequestConfig;
        let returnAxiosResponse = false;

        if (arguments.length === 1) {
            config = arguments[0];
            returnAxiosResponse = arguments[0].returnAxiosResponse ?? false;
        } else {
            const method = arguments[0] as string;
            const path = arguments[1] as string;
            const _config = arguments[2] ?? {} as LCURequestConfig & { returnAxiosResponse?: boolean };
            returnAxiosResponse = _config.returnAxiosResponse ?? false;
            config = {
                method,
                path,
                body: _config.body,
                params: _config.params,
                headers: _config.headers
            }
        }

        const axiosResponse = await this.lcuAxiosInstance.request({
            method: config.method,
            url: config.path,
            data: config.body,
            params: config.params,
            headers: config.headers
        }).catch(err => { throw new RequestError(err); });
        if (returnAxiosResponse)
            return axiosResponse;

        return axiosResponse.data;
    }
    //#endregion

    //#region LCU Events
    /**
     * Adds a LCU event listener 
     */
    public addLCUEventListener<EventName extends keyof LCUWebSocketEvents = "OnJsonApiEvent">(listener: {
        /** If present, the callback will only be called if the event's path matches. OnJsonApiEvent needs to be subscribed if you only use the path. */
        path?: string | RegExp;
        /** If present, the callback will only be called if the event's type is in the array */
        types?: ("Create" | "Update" | "Delete")[];
        /** If present, the callback will only be called if the event's name matches */
        name?: EventName;
        callback: (event: LCUWebSocketEvents[EventName]) => void;
    }) {
        if (listener.name)
            this.subscribeWebSocketEvent(listener.name);

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