export { default as HasagiClient, type ConnectionOptions, type RequestRetryOptions, type PollOptions, type LCUEventListener, type HasagiCoreEvents, type LCURequestOptionsParameter } from "./client.js";

export { getLeagueClientUxProcesses, getCredentialsByProcessId, getPortAndBasicAuthToken, type LCUCredentials } from "./util.js";

export { LCUError, RequestError, NotConnectedError } from "./errors.js";

export { default as RIOT_GAMES_CERTIFICATE } from "./riot-games-certificate.js";

export type { LCUEndpoints, LCUEndpointBodyType, LCUEndpointResponseType, EndpointsWithMethod, HttpMethod } from "./types/lcu-endpoints";
export type * as LCUTypes from "./types/lcu-types"
export type { LCUWebSocketEvents } from "./types/lcu-events";