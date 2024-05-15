import { default as HasagiClient, type ConnectionOptions, type RequestRetryOptions, type PollOptions, type LCUEventListener, type HasagiCoreEvents, type LCURequestOptionsParameter } from "./client.js";

import { getLeagueClientUxProcesses, getCredentialsByProcessId, getPortAndBasicAuthToken, type LCUCredentials } from "./util.js";

import { LCUError, RequestError, NotConnectedError } from "./errors.js";

import { default as RIOT_GAMES_CERTIFICATE } from "./riot-games-certificate.js";

import type { LCUEndpoints, LCUEndpointBodyType, LCUEndpointResponseType, EndpointsWithMethod, HttpMethod } from "./types/lcu-endpoints";
import type * as LCUTypes from "./types/lcu-types"
import type { LCUWebSocketEvents } from "./types/lcu-events";

export type { ConnectionOptions, RequestRetryOptions, PollOptions, LCUEventListener, HasagiCoreEvents, LCURequestOptionsParameter, LCUEndpoints, LCUEndpointBodyType, LCUEndpointResponseType, EndpointsWithMethod, HttpMethod, LCUCredentials, LCUTypes, LCUWebSocketEvents };
export { HasagiClient, getLeagueClientUxProcesses, getCredentialsByProcessId, getPortAndBasicAuthToken, LCUError, RequestError, NotConnectedError, RIOT_GAMES_CERTIFICATE };