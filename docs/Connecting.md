# Connecting

`connect()` is the single entry point that brings a `HasagiClient` online. It:

1. **Discovers credentials** (the client's port + password) using the chosen authentication strategy.
2. **Waits until the client is ready** to serve requests (the *readiness check*).
3. **Opens the event WebSocket** (unless disabled), so [[Events|event listeners]] start firing.

```ts
import { HasagiClient } from "@hasagi/core";

const client = new HasagiClient();
await client.connect();
// ...
client.disconnect();
```

`connect()` returns a promise that resolves once the client is fully online. If any step fails, the
client is left cleanly disconnected and the error is thrown.

## Options

All options are optional except where an authentication strategy requires them.

```ts
await client.connect({
  authenticationStrategy: "process", // "process" (default) | "lockfile" | "manual"
  // lockfile: "<absolute path or lockfile content>", // required for "lockfile"
  // credentials: { port, password },                 // required for "manual"
  useWebSocket: true,            // open the event socket (default: true)
  maxConnectionAttempts: -1,     // -1 = retry until the client is found (default)
  connectionAttemptDelay: 5000,  // ms between credential-discovery attempts
  webSocketTimeoutMs: 10000,     // fail if the socket doesn't open in time
  readinessCheck: false,         // or { endpoint?, maxRetries?, retryDelay? } — false to skip
  certificate: undefined,        // see TLS and Certificates
});
```

| Option | Default | Meaning |
|--------|---------|---------|
| `authenticationStrategy` | `"process"` | How credentials are discovered. See below. |
| `lockfile` | — | Required for `"lockfile"`: an absolute path to the lockfile **or** its raw content. |
| `credentials` | — | Required for `"manual"`: `{ port, password }`. |
| `useWebSocket` | `true` | Open the event WebSocket. Set `false` if you only make HTTP requests. |
| `maxConnectionAttempts` | `-1` | Credential-discovery attempts before failing. `-1` = retry forever. |
| `connectionAttemptDelay` | `5000` | Milliseconds between discovery attempts. |
| `webSocketTimeoutMs` | `10000` | Fail the connection if the socket doesn't open within this time. Only relevant when `useWebSocket` is on. |
| `readinessCheck` | see below | Configure or skip the post-credentials readiness wait. |
| `certificate` | bundled Riot cert | TLS validation behaviour. See [[TLS and Certificates]]. |

## Authentication strategies

### `process` (default)

Finds the running `LeagueClientUx` process and reads the port and password from its command-line
arguments. **Supported on Windows and macOS only** — on other platforms it throws immediately (so it's
not retried). Use `lockfile` or `manual` elsewhere.

```ts
await client.connect(); // authenticationStrategy: "process" is implied
```

> If multiple `LeagueClientUx` processes are running (e.g. a second client starting before the first has
> fully exited), the first one reported by the OS is used. To target a specific client, use `lockfile`
> or pass `manual` credentials you selected yourself — see [[Credentials and Discovery]].

### `lockfile`

Reads credentials from the client's `lockfile`. Pass either an absolute path to it, or its raw content.

```ts
await client.connect({
  authenticationStrategy: "lockfile",
  lockfile: "C:\\Riot Games\\League of Legends\\lockfile",
});
```

The lockfile lives in the League installation directory and is written while the client runs. This
strategy works on any platform.

### `manual`

Supply credentials you already have:

```ts
await client.connect({
  authenticationStrategy: "manual",
  credentials: { port: 12345, password: "abc123" },
});
```

Useful when you discover credentials yourself (see [[Credentials and Discovery]]) or proxy a remote
client.

## Readiness check

Finding credentials doesn't mean the client is ready to answer requests — it may still be starting up.
After discovery, `connect()` polls a lightweight endpoint until it responds before resolving.

By default it issues `GET /lol-summoner/v1/current-summoner`, retried up to **10 times** with a
**1000 ms** delay. Override the endpoint and/or retry behaviour:

```ts
await client.connect({
  readinessCheck: {
    endpoint: "/lol-gameflow/v1/gameflow-phase", // any GET endpoint that signals "ready"
    maxRetries: 20,
    retryDelay: 500,
  },
});
```

Or skip the wait entirely with `readinessCheck: false`:

```ts
await client.connect({ readinessCheck: false });
```

Skipping it means your first request might hit the client before it's ready — only do this if you have
your own readiness logic.

## Lifecycle events

`HasagiClient` is a typed event emitter. Connection-related events:

| Event | Fires when |
|-------|-----------|
| `connecting` | A credential-discovery attempt is starting. |
| `connection-attempt-failed` | A discovery attempt failed and will be retried. |
| `connected` | The client is fully online (credentials + readiness + socket). |
| `disconnected` | The connection was lost or `disconnect()` was called. |
| `websocket-error` | A runtime error occurred on the open WebSocket. |

```ts
client.on("connecting", () => console.log("looking for the client..."));
client.on("connected", () => console.log("connected"));
client.on("disconnected", () => console.log("disconnected"));
client.on("websocket-error", (err) => console.error("socket error:", err));
```

There's also a low-level `lcu-event` for *every* WebSocket event — see [[Events]].

## Reconnecting

`connect()` is safe to call again at any time. It performs a **clean reconnect**: it tears down the old
connection, discovers credentials again, and **re-subscribes your existing event listeners**
automatically. You don't need to re-add listeners after a reconnect.

It's also safe to call **concurrently** — the latest call wins and any earlier in-flight `connect()`
bails out without corrupting state.

A common pattern is to reconnect when the client disappears (e.g. the user closed and reopened League):

```ts
client.on("disconnected", () => {
  client.connect().catch((err) => console.error("reconnect failed:", err));
});
```

> Because `connect()` resets and rebuilds state, calling it from inside a `disconnected` handler is
> safe — the internal teardown is done silently so it won't recurse.

## Disconnecting

```ts
client.disconnect();
```

Closes the WebSocket, destroys the keep-alive HTTP agent, and clears all per-connection state. It's a
no-op if the client isn't connected. After disconnecting, requests throw `NotConnectedError` (see
[[Error Handling]]).

## Connection info getters

Once connected, these expose the current connection identity:

```ts
client.isConnected;                  // boolean
client.getPort();                    // number | null
client.getPassword();                // string | null
client.getProcessId();               // number | null (always null for the lockfile strategy)
client.getBasicAuthToken();          // base64 "riot:{password}" | null
client.getHostWithAuthentication();  // "riot:<pw>@127.0.0.1:<port>" | null
```

`getHostWithAuthentication()` is handy for building URLs for other tools (it URL-encodes the password).

## See also

- [[Requests]] — making requests once connected.
- [[TLS and Certificates]] — the `certificate` option in depth.
- [[Credentials and Discovery]] — discovering credentials yourself for the `manual` strategy.
- [[Troubleshooting]] — when `connect()` hangs or fails.
