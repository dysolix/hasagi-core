# API Reference

A flat reference of everything `@hasagi/core` exports. For task-oriented guides, follow the links into
the dedicated pages.

## Entry points

| Import | Contents |
|--------|----------|
| `@hasagi/core` | Core API (below). |
| `@hasagi/core/types` | Generated LCU types + helper types — see [[Type System]]. |
| `@hasagi/core/credentials` | Low-level credential helpers — see [[Credentials and Discovery]]. |

## `HasagiClient`

The main class — a typed event emitter. See [[Connecting]], [[Requests]], [[Events]], [[Polling]].

### Constructor

```ts
new HasagiClient(options?: { defaultRetryOptions?: Partial<RequestRetryOptions> })
```

### Static

| Member | Returns | Notes |
|--------|---------|-------|
| `HasagiClient.getInstance()` | `HasagiClient \| undefined` | The **most recently constructed** instance. A convenience global, not a true singleton — constructing another client replaces it. Pass references explicitly in multi-client apps. |

### Connection

| Method | Description |
|--------|-------------|
| `connect(options?): Promise<void>` | Discover credentials, run the readiness check, open the WebSocket. Safe to re-call (clean reconnect) and call concurrently. See [[Connecting]]. |
| `disconnect(): void` | Close the connection and clear state. No-op if not connected. |
| `isConnected: boolean` | Whether the client is currently connected. |

### Connection info

| Method | Returns |
|--------|---------|
| `getPort()` | `number \| null` |
| `getPassword()` | `string \| null` |
| `getProcessId()` | `number \| null` (always `null` for the lockfile strategy) |
| `getBasicAuthToken()` | base64 `"riot:{password}"` \| `null` |
| `getHostWithAuthentication()` | `"riot:<encoded-pw>@127.0.0.1:<port>"` \| `null` |

### Requests

| Method | Description |
|--------|-------------|
| `request(method, path, options?)` | Typed request. See [[Requests]]. |
| `request(config)` | Raw axios config request (response `unknown`). |
| `buildRequest(method, path, options?)` | Returns a reusable, typed request function. See [[Requests#prepared-requests-buildrequest]]. |
| `poll(method, path, pollOptions, options?)` | Poll an endpoint on an interval. See [[Polling]]. |
| `setDefaultRetryOptions(options)` | Set the client-wide default retry options. |

### Events

| Method | Description |
|--------|-------------|
| `addLCUEventListener(listener)` | Register a filtered WebSocket event listener (auto-subscribes). See [[Events]]. |
| `removeLCUEventListener(listenerOrCallbackOrNameOrPath)` | Remove the first matching listener. Returns `boolean`. |
| `removeAllLCUEventListeners()` | Remove all listeners. |
| `subscribeWebSocketEvent(name)` | Manually subscribe to a WebSocket event. |
| `unsubscribeWebSocketEvent(name)` | Manually unsubscribe. |

### Emitted events ([`HasagiCoreEvents`](#types))

| Event | Payload | When |
|-------|---------|------|
| `connecting` | — | A discovery attempt is starting. |
| `connection-attempt-failed` | — | A discovery attempt failed (will retry). |
| `connected` | — | Fully online. |
| `disconnected` | — | Connection lost / `disconnect()` called. |
| `websocket-error` | `Error \| undefined` | Runtime WebSocket error. |
| `lcu-event` | `[opcode, name, data]` | **Every** raw WebSocket event. |

## Functions

| Export | Description |
|--------|-------------|
| `request(credentials, method, path, options?)` | Standalone typed request. See [[Standalone Requests]]. |
| `request(credentials, config)` | Standalone raw-config request. |
| `getCredentials(source?, lockfile?)` | Discover credentials. See [[Credentials and Discovery]]. |

### Deprecated root re-exports (removed in v1)

Available from the root for now; migrate to `@hasagi/core/credentials`:

- `getLeagueClientUxProcesses`
- `getCredentialsByProcessId`

(`getCredentialsFromLockfileContent` lives only on the `credentials` subpath.)

## Errors

See [[Error Handling]].

| Class | Thrown when | Key fields |
|-------|-------------|-----------|
| `NotConnectedError` | Request before `connect()` | — |
| `LCUError` | Non-success status response | `statusCode`, `errorCode`, `implementationDetails` |
| `RequestError` | No response (transport failure) | `errorCode` |

## Values

| Export | Description |
|--------|-------------|
| `RIOT_GAMES_CERTIFICATE` | The bundled Riot root certificate (PEM string). See [[TLS and Certificates]]. |

## Types

Exported from the root:

| Type | Description |
|------|-------------|
| `ConnectionOptions` | Options for `connect()`. See [[Connecting]]. |
| `RequestRetryOptions` | `{ maxRetries, retryDelay, noRetryStatusCodes? }`. See [[Requests]]. |
| `PollOptions<Method, Path>` | Options for `poll()`. See [[Polling]]. |
| `LCUEventListener<EventName>` | Shape of an event listener. See [[Events]]. |
| `HasagiCoreEvents` | The emitter event map. |
| `LCURequestOptionsParameter<Method, Path, Extra?>` | The per-request options tuple type. |
| `LCUCredentials` | `{ processId?, port, password }`. |
| `LCUTypes` | Namespace of all generated LCU resource types. See [[Type System]]. |

Endpoint/event helper types (`LCUEndpoints`, `LCUEndpointResponseType`, `LCUEndpointBodyType`,
`EndpointsWithMethod`, `HttpMethod`, `LCUWebSocketEvents`) are exported from `@hasagi/core/types` — and
deprecated at the root. See [[Type System]].

## Options shapes

```ts
type RequestRetryOptions = {
  maxRetries: number;        // additional attempts after the first (default 0)
  retryDelay: number;        // ms between attempts (default 1000)
  noRetryStatusCodes?: number[]; // statuses to fail fast on (default [400])
};

type LCUCredentials = {
  processId?: number;
  port: number;
  password: string;
};
```

```ts
type ConnectionOptions = {
  useWebSocket?: boolean;            // default true
  maxConnectionAttempts?: number;    // default -1 (infinite)
  connectionAttemptDelay?: number;   // default 5000 ms
  webSocketTimeoutMs?: number;       // default 10000 ms
  readinessCheck?: { endpoint?: string; maxRetries?: number; retryDelay?: number } | false;
  certificate?: string | null;       // default: bundled Riot cert
} & (
  | { authenticationStrategy: "process" }
  | { authenticationStrategy: "lockfile"; lockfile: string }
  | { authenticationStrategy: "manual"; credentials: LCUCredentials }
);
```

```ts
type PollOptions<Method, Path> = {
  intervalMs: number;
  maxExecutions?: number;
  onResponse?: (response) => boolean | void | Promise<boolean | void>;
  onDistinctResponse?: (response) => boolean | void | Promise<boolean | void>;
  onError?: (error) => boolean | void | Promise<boolean | void>;
};
```
