import HasagiClient from "./client.js";
import { EndpointsWithMethod, HttpMethod, LCUEndpointBodyType, LCUEndpoints } from "./types/lcu-endpoints";
import { LCUWebSocketEvents } from "./types/lcu-events";

export { HasagiClient };
export default HasagiClient;

export { default as RequestError } from "./request-error.js";

export type { LCUEndpoints, LCUEndpoint, LCUEndpointBodyType, LCUEndpointResponseType, EndpointsWithMethod, HttpMethod } from "./types/lcu-endpoints";
export type * as LCUTypes from "./types/lcu-types"
export type { LCUWebSocketEvents } from "./types/lcu-events";

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
} & ({
	authenticationStrategy: "lockfile",
	/**
	 * This should either be the lockfile's content or an absolute path to the lockfile
	 */
	lockfile: string
} | {
	authenticationStrategy: "process"
})

export interface HasagiEvents {
	"connected": () => void,
	"connecting": () => void,
	"connection-attempt-failed": () => void,
	"disconnected": () => void,
	"lcu-event": <EventName extends keyof LCUWebSocketEvents = "OnJsonApiEvent">(event: [opcode: number, name: EventName, data: LCUWebSocketEvents[EventName]]) => void
}

export type LCURequestConfig<Method extends string = string, Path extends string = string> = {
	method: Method;
	path: Path;
} & LCURequestOptions<Method, Path>;

type IsParameter<Part> = Part extends `{${infer ParamName}}` ? ParamName : never;
type FilteredParts<Path> = Path extends `${infer PartA}/${infer PartB}`
	? IsParameter<PartA> | FilteredParts<PartB>
	: IsParameter<Path>;

type ParamsWithoutBracket<Path extends string> = FilteredParts<Path>;

type IsLCUEndpoint<Method extends string, Path extends string> = Path extends keyof LCUEndpoints ? Method extends keyof LCUEndpoints[Path] ? LCUEndpoints[Path][Method] extends { path: any, params: any, body: any, response: any } ? true : false : false : false;

export type LCURequestOptionsParameter<Method extends string, Path extends string> = Path extends keyof LCUEndpoints ? Method extends keyof LCUEndpoints[Path] ? LCUEndpoints[Path][Method] extends { path: any, params: any, body: any, response: any } ?
	{} extends { [key in ParamsWithoutBracket<Path>]: string } ? [options?: LCURequestOptions<Method, Path>] : [options: LCURequestOptions<Method, Path>] :
	[options?: LCURequestOptions<Method, Path>] : [options?: LCURequestOptions<Method, Path>] : [options?: LCURequestOptions<Method, Path>];

export type LCURequestOptions<Method extends string, Path extends (Lowercase<Method> extends HttpMethod ? EndpointsWithMethod<Lowercase<Method>> : string)> = { headers?: Record<string, any> } & (ParamsWithoutBracket<Path> extends never ? {} : { path: { [K in ParamsWithoutBracket<Path>]: string } }) & (Path extends keyof LCUEndpoints ? Method extends keyof LCUEndpoints[Path] ? LCUEndpoints[Path][Method] extends { path: any, params: any, body: any, response: any } ? (
	(LCUEndpoints[Path][Method]["body"] extends never ? {} : { body: LCUEndpoints[Path][Method]["body"] }) &
	(LCUEndpoints[Path][Method]["params"] extends never ? {} : { params: LCUEndpoints[Path][Method]["params"] })
) : {
	params?: Record<string, any>;
	body?: any;
} : {
	params?: Record<string, any>;
	body?: any;
} : {
	params?: Record<string, any>;
	body?: any;
});