import HasagiClient from "./client.js";
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