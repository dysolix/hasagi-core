# @hasagi/core

A TypeScript library that makes using the League of Legends client API (LCU) easy — fully typed
requests, WebSocket events, polling, and automatic credential discovery.

## Features

- Fully typed requests and responses, auto-generated for (almost) every LCU endpoint
- Credential discovery via process arguments, the lockfile, or manual input
- WebSocket event subscriptions with path / type / name filtering
- Endpoint polling with response / distinct-response / error callbacks
- Reusable, pre-typed request builders (`buildRequest`)
- Built-in request retries and typed errors

## Installation

```bash
npm install @hasagi/core
```

Requires Node.js >= 18.

## Quick start

```ts
import { HasagiClient } from "@hasagi/core";

const client = new HasagiClient();
await client.connect();

// `summoner` is fully typed from the endpoint
const summoner = await client.request("get", "/lol-summoner/v1/current-summoner");
console.log(summoner.summonerId);
```

## Connecting

`connect()` discovers credentials, waits until the client is ready, and (by default) opens the event
WebSocket. It's safe to call again to reconnect.

```ts
await client.connect({
  authenticationStrategy: "process", // "process" (default) | "lockfile" | "manual"
  // lockfile: "<absolute path or lockfile content>", // required for "lockfile"
  // credentials: { port, password },                 // required for "manual"
  useWebSocket: true,            // open the event socket (default: true)
  maxConnectionAttempts: -1,     // -1 = retry until the client is found (default)
  connectionAttemptDelay: 5000,  // ms between attempts
  webSocketTimeoutMs: 10000,     // fail if the socket doesn't open in time
  readinessCheck: false,         // or { endpoint?, maxRetries?, retryDelay? } — skip with false
  certificate: undefined,        // omit (default): validate against Hasagi's bundled Riot cert; a string: trust that cert instead; null: disable TLS validation
});

client.disconnect();
```

### Readiness check

After credentials are found, `connect()` waits until the client actually responds before resolving —
by default a `GET /lol-summoner/v1/current-summoner`, retried up to 10 times with a 1000 ms delay.
Override the endpoint and/or retry behaviour, or pass `false` to skip the wait entirely:

```ts
await client.connect({
  readinessCheck: {
    endpoint: "/lol-gameflow/v1/gameflow-phase", // any GET endpoint that signals "ready"
    maxRetries: 20,
    retryDelay: 500,
  },
});
```

Lifecycle events: `connecting`, `connection-attempt-failed`, `connected`, `disconnected`,
`websocket-error`.

```ts
client.on("connected", () => console.log("connected"));
client.on("disconnected", () => console.log("disconnected"));
```

## Requests

Call with a typed `method` + `path` (path params, query, body and the response are all typed per
endpoint), or with a raw axios config as an escape hatch:

```ts
// Typed
await client.request("get", "/lol-summoner/v1/summoners/{id}", { path: { id: "123" } });
await client.request("post", "/lol-lobby/v2/lobby", { body: { queueId: 430 } });

// Raw axios config (pass returnAxiosResponse: true to get the full AxiosResponse)
await client.request({ method: "get", url: "/lol-summoner/v1/current-summoner" });
```

Retries are configurable per call, or as a client-wide default:

```ts
const client = new HasagiClient({ defaultRetryOptions: { maxRetries: 3, retryDelay: 1000 } });

await client.request("get", "/lol-summoner/v1/current-summoner", {
  retryOptions: { maxRetries: 2, retryDelay: 500, noRetryStatusCodes: [400, 404] },
});
```

`retryOptions` resolve as a last-wins merge — built-in defaults, then the client-wide
`defaultRetryOptions`, then the per-call `retryOptions` — so a per-call override only changes the
fields you set and keeps the rest of the client default:

```ts
const client = new HasagiClient({ defaultRetryOptions: { maxRetries: 3, retryDelay: 1000, noRetryStatusCodes: [400, 404] } });

// Only maxRetries changes; retryDelay and noRetryStatusCodes are inherited from the client default.
await client.request("get", "/lol-summoner/v1/current-summoner", { retryOptions: { maxRetries: 1 } });
```

### Prepared requests

`buildRequest` returns a reusable, typed function, and can transform the parameters and/or the
response:

```ts
const getSummonerById = client.buildRequest("get", "/lol-summoner/v1/summoners/{id}");
const summoner = await getSummonerById("123");

const getCurrentRunePageName = client.buildRequest("get", "/lol-perks/v1/currentpage", {
  transformResponse: (page) => page.name,
});
```

## Events

Subscribe to LCU WebSocket events. If you pass only a `path`, `OnJsonApiEvent` is subscribed
automatically and filtered by URI; you can additionally filter by event `types` and/or `name`.

```ts
const listener = {
  path: "/lol-gameflow/v1/gameflow-phase",
  types: ["Update"],
  callback: (event) => console.log(event.eventType, event.data),
};

client.addLCUEventListener(listener);

// Remove by the object, the callback, an event name, or a path:
client.removeLCUEventListener(listener);
client.removeAllLCUEventListeners();
```

## Polling

Poll an endpoint on an interval. Return `true` from any callback to stop early.

```ts
await client.poll("get", "/lol-gameflow/v1/gameflow-phase", {
  intervalMs: 1000,
  onDistinctResponse: (phase) => {
    console.log("phase changed:", phase);
    return phase === "InProgress"; // stop polling
  },
});
```

## Subpath exports

- **`@hasagi/core/types`** — the generated LCU types, importable by name (they're also available at
  the root under the `LCUTypes` namespace):
  ```ts
  import type { LolSummonerSummoner } from "@hasagi/core/types";
  ```
- **`@hasagi/core/credentials`** — low-level credential / process helpers (`getCredentials`,
  `getCredentialsByProcessId`, `getLeagueClientUxProcesses`, `getCredentialsFromLockfileContent`) for
  building custom discovery. Most apps don't need these — `connect()` handles it.

## Errors

- **`NotConnectedError`** — a request was made before a successful `connect()`.
- **`LCUError`** — the client responded with a non-success status (`statusCode`, `errorCode`, `message`).
- **`RequestError`** — the request failed without a response (e.g. `ECONNREFUSED`).

## Disclaimer

Hasagi is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or
anyone officially involved in producing or managing Riot Games properties. Riot Games and all
associated properties are trademarks or registered trademarks of Riot Games, Inc.
