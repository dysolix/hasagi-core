import { default as HasagiClient, request, type ConnectionOptions, type RequestRetryOptions, type PollOptions, type LCUEventListener, type HasagiCoreEvents, type LCURequestOptionsParameter } from "./client.js";

import { getLeagueClientUxProcesses, getCredentialsByProcessId, getCredentials, type LCUCredentials } from "./util.js";

import { LCUError, RequestError, NotConnectedError } from "./errors.js";

import { default as RIOT_GAMES_CERTIFICATE } from "./riot-games-certificate.js";

import type { LCUEndpoints, LCUEndpointBodyType, LCUEndpointResponseType, EndpointsWithMethod, HttpMethod } from "./types/lcu-endpoints";
import type { LCUWebSocketEvents } from "./types/lcu-events";

// Core API types — used directly when working with HasagiClient.
export type {
  ConnectionOptions, RequestRetryOptions, PollOptions, LCUEventListener, HasagiCoreEvents, LCURequestOptionsParameter, LCUCredentials,
};

export type { LCUTypes } from "./types";

// Core API values.
export {
  HasagiClient, getCredentials, request, LCUError, RequestError, NotConnectedError, RIOT_GAMES_CERTIFICATE,
};

/*
 * Deprecated root re-exports. These remain available for backwards compatibility but will be
 * removed from the root in v1. Import the generated LCU types from "@hasagi/core/types" and the
 * low-level credential/process helpers from "@hasagi/core/credentials".
 */
export type {
  /** @deprecated Import from `@hasagi/core/types` instead. Removed from the root in v1. */
  LCUEndpoints,
  /** @deprecated Import from `@hasagi/core/types` instead. Removed from the root in v1. */
  LCUEndpointBodyType,
  /** @deprecated Import from `@hasagi/core/types` instead. Removed from the root in v1. */
  LCUEndpointResponseType,
  /** @deprecated Import from `@hasagi/core/types` instead. Removed from the root in v1. */
  EndpointsWithMethod,
  /** @deprecated Import from `@hasagi/core/types` instead. Removed from the root in v1. */
  HttpMethod,
  /** @deprecated Import from `@hasagi/core/types` instead. Removed from the root in v1. */
  LCUWebSocketEvents,
};

export {
  /** @deprecated Import from `@hasagi/core/credentials` instead. Removed from the root in v1. */
  getLeagueClientUxProcesses,
  /** @deprecated Import from `@hasagi/core/credentials` instead. Removed from the root in v1. */
  getCredentialsByProcessId,
};
