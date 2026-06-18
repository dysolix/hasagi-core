# Troubleshooting

Common problems and how to resolve them. If something here doesn't cover your case, check the
[issue tracker](https://github.com/dysolix/hasagi-core/issues).

## `connect()` never resolves

**Cause:** by default `connect()` retries credential discovery **forever** (`maxConnectionAttempts: -1`),
waiting for the League client to appear. If the client isn't running, it just keeps waiting.

**Fix:** start the League client, or cap the attempts so a missing client surfaces as an error:

```ts
await client.connect({ maxConnectionAttempts: 3, connectionAttemptDelay: 2000 });
```

Listen for progress to confirm it's trying:

```ts
client.on("connecting", () => console.log("looking..."));
client.on("connection-attempt-failed", () => console.log("not found yet, retrying"));
```

## "Authentication strategy 'process' is not supported on this platform"

**Cause:** the `process` strategy is only implemented for **Windows and macOS**. On Linux (and other
platforms) it throws immediately.

**Fix:** use the `lockfile` strategy and point it at the client's lockfile:

```ts
await client.connect({
  authenticationStrategy: "lockfile",
  lockfile: "/path/to/League of Legends/lockfile",
});
```

See [[Connecting]] and [[Credentials and Discovery]].

## "Could not find process 'LeagueClientUx'"

**Cause:** no running `LeagueClientUx` process was found. The client isn't running, or only the early
`LeagueClient` process (not `LeagueClientUx`) has started.

**Fix:** make sure you're fully logged in / past the launcher. If you're scripting startup, keep
`maxConnectionAttempts` high (or `-1`) so Hasagi waits for the UX process to appear.

## Connection drops to the wrong client / multiple clients

**Cause:** with several `LeagueClientUx` processes running (e.g. a second client launched before the
first exited), the `process` strategy uses whichever the OS reports first.

**Fix:** select the PID yourself and connect with `manual` credentials:

```ts
import { getLeagueClientUxProcesses, getCredentialsByProcessId } from "@hasagi/core/credentials";

const pids = await getLeagueClientUxProcesses();
const credentials = await getCredentialsByProcessId(pids[/* the one you want */ 0]);

await client.connect({ authenticationStrategy: "manual", credentials });
```

## TLS / certificate errors

**Cause:** a certificate mismatch — most likely Riot rotated their root certificate and Hasagi's bundled
copy is older.

**Fixes (in order of preference):**

1. Update `@hasagi/core` to the latest version (the bundled certificate may already be refreshed).
2. Supply the current certificate yourself: `connect({ certificate: myPemString })`.
3. As a last resort, disable validation: `connect({ certificate: null })`. The connection is always to
   `127.0.0.1`, so the practical risk is low, but validation is preferable.

Please also [open an issue](https://github.com/dysolix/hasagi-core/issues) so the bundled certificate
gets updated. See [[TLS and Certificates]].

## Requests throw `NotConnectedError`

**Cause:** you made a request before `connect()` resolved, or after `disconnect()` / a lost connection.

**Fix:** `await client.connect()` before requesting, and guard against disconnects:

```ts
client.on("disconnected", () => client.connect().catch(console.error));
```

See [[Error Handling]].

## Requests fail with `ECONNREFUSED`

**Cause:** the client process is gone or its API port closed (e.g. League was closed). This surfaces as a
[[Error Handling|`RequestError`]] with `errorCode === "ECONNREFUSED"`. If no WebSocket is active, Hasagi
also emits `disconnected`.

**Fix:** reconnect when the client comes back (see the snippet above).

## Event listeners never fire

**Checklist:**

- Did you connect with the WebSocket enabled? `useWebSocket` defaults to `true`, but `connect({
  useWebSocket: false })` disables it — listeners won't fire.
- Does your `path` filter match the event URI **exactly**? A trailing slash or wrong segment silently
  filters everything out. Try a `RegExp`, or temporarily log all events via the raw `lcu-event` emitter:
  ```ts
  client.on("lcu-event", ([, name, payload]) => console.log(name, payload.uri, payload.eventType));
  ```
- If you used `types`, remember it filters to `"Create" | "Update" | "Delete"` — a missing type drops the
  event.

See [[Events]].

## Standalone `request` keeps the process alive / is slow

**Cause:** for one-off calls this is expected — but if you're making **many** standalone calls, each
opens a fresh connection (no socket pooling).

**Fix:** use a `HasagiClient` instead. Its agent pools sockets via keep-alive and is destroyed on
`disconnect()`. See [[Standalone Requests]].

## A response is typed as `unknown`

**Cause:** the endpoint/method pair isn't in the generated type map (or you used the raw axios config
form), so Hasagi can't infer the response type.

**Fix:** assert the type yourself, or import a matching resource type from `@hasagi/core/types`. If you
believe the endpoint *should* be typed, the generated types may be out of date — see
[[Type System#regenerating-the-types]].

## See also

- [[Connecting]] · [[Requests]] · [[Events]] · [[Error Handling]] · [[TLS and Certificates]]
