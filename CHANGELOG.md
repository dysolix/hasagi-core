# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.9.0] - 2026-07-05

### Added

- **`connect()` cancellation.** `disconnect()` now also cancels an in-flight `connect()`, which then
  rejects with the new `ConnectionCancelledError` (exported from the package root).
- **`connection-failed` event.** Emitted with the error when `connect()` gives up and is about to
  reject (attempts exhausted, readiness or WebSocket failure). Not emitted for superseded or
  cancelled calls — see the `connect()` changes below.
- **`poll()` abort support.** `PollOptions` accepts an `AbortSignal` via `signal`; polling stops when
  it aborts, cutting an in-progress interval wait short.
- **Lockfile credentials now include the process id.** `getCredentialsFromLockfileContent` parses it,
  so `getProcessId()` returns it for the `lockfile` strategy (previously always `null`).
- `LCURequestOptionsParameter` is now exported from `@hasagi/core/types` (the root export is
  deprecated, see below).
- New **Common Endpoints** wiki page, and JSDoc on the remaining undocumented public API (options
  types, events, credential helpers).

### Changed

- **Raised the supported Node.js floor to 22** (`engines.node >=22`) — Node 18 and 20 are both past
  end-of-life. Consumers on older Node versions get an engines warning on install; the code itself
  has no new runtime requirements yet.
- **Concurrent `connect()` calls settle with the winning call's outcome.** A superseded call no
  longer resolves early while the newest call is still connecting — it adopts the newest call's
  result, so a resolved `connect()` always means the client is connected.
- **Path parameters are now URL-encoded** during substitution (`request`, `buildRequest`). Callers
  who pre-encoded values will now double-encode — pass raw values instead.
- **`removeLCUEventListener` with a name/path string removes every matching listener**, not just the
  first. The callback and object forms still remove a single listener.
- **`isConnected` is now a read-only getter** (previously a public, assignable field).
- **Dropped the `tiny-typed-emitter` dependency** in favor of an internal typed wrapper over Node's
  `EventEmitter`. Runtime behavior and the event-map typing are unchanged.

### Deprecated

- **`subscribeWebSocketEvent` / `unsubscribeWebSocketEvent`** — become private in v1. Use
  `addLCUEventListener` / `removeLCUEventListener`, which manage subscriptions automatically.
- **Root export of `LCURequestOptionsParameter`** — import it from `@hasagi/core/types` instead.
  Removed from the root in v1.

### Fixed

- **`buildRequest` sends the trailing argument as query params (not a request body) for DELETE and
  HEAD** endpoints, matching GET.
- **Listener/subscription bookkeeping:** `removeLCUEventListener` now finds path-only listeners by
  their original object; removing the last path-only listener unsubscribes `OnJsonApiEvent`; and
  `unsubscribeWebSocketEvent` while disconnected removes the queued subscription so it is no longer
  re-subscribed on the next connect.
- **Subscription frames are only sent on an open socket.** Adding/removing listeners while the
  WebSocket is still opening no longer throws — subscriptions are queued and flushed once it opens.
- **A `connect()` pending at `disconnect()` time always rejects as cancelled**, even if a newer
  `connect()` had already succeeded before the disconnect — it no longer adopts that stale success
  and resolves while the client is disconnected.
- **Lockfile parsing tolerates trailing whitespace**, so raw lockfile content ending in a newline no
  longer fails to parse.

## [0.8.1] - 2026-06-24

### Changed

- Regenerated the bundled LCU types against client patch **16.13**.
- Lowered dependency floors back to `axios` `^1.6.0` and `ws` `^8.0.0` (relaxing the `^1.17.0` /
  `^8.21.0` floors raised in 0.7.0) so consumers on older but still-compatible releases aren't
  forced to upgrade.
- Documented in JSDoc that `LCUError.implementationDetails` is typed `any` for now and is planned
  to narrow to `unknown` in v1.0.0 — a breaking change for code that reads the field without
  narrowing it first.

## [0.8.0] - 2026-06-18

### Added

- **Generic event map on `HasagiClient`.** The class now takes an optional event-map type parameter
  (`HasagiClient<Events extends HasagiCoreEvents & ListenerSignature<Events>>`, defaulting to
  `HasagiCoreEvents`), so it can be subclassed with a widened set of typed events. `new HasagiClient()`
  and the bare `HasagiClient` type are unchanged.
- **`HasagiClient.setInstance(instance?)`.** Sets the instance returned by `getInstance()`, or releases
  the global reference when passed `undefined`/`null` so a no-longer-used client can be garbage
  collected — the static otherwise retains the most recently constructed instance for the life of the
  process, even after `disconnect()`.

### Changed

- **`HasagiClient.getInstance()` is now generic.** It defaults to `HasagiCoreEvents` typing instead of
  returning an untyped instance, and accepts an event-map type argument to type a subclass's events.

## [0.7.0] - 2026-06-17

### Added

- **Subpath exports.** The generated LCU types are now importable from `@hasagi/core/types`,
  and the low-level credential/process helpers from `@hasagi/core/credentials`
  (`getCredentials`, `getCredentialsByProcessId`, `getLeagueClientUxProcesses`,
  `getCredentialsFromLockfileContent`). The root re-exports of these remain available but are
  deprecated and will be removed in v1.
- **Standalone `request(credentials, ...)` function** for one-off LCU calls without constructing
  and connecting a `HasagiClient`. Supports the same typed `method`/`path` and raw-axios-config
  forms, plus `retryOptions` and `returnAxiosResponse`.
- **`certificate` option on the standalone `request`** — pass a certificate string to validate
  against it, or `null` to disable TLS validation. By default it validates against the bundled
  Riot certificate, matching `HasagiClient`.
- **Layered retry options.** `retryOptions` now resolve as a last-wins merge: built-in defaults,
  then the client-wide `defaultRetryOptions` (constructor), then the per-call `retryOptions`. A
  per-call override only changes the fields it sets.

### Changed

- Upgraded the build to **TypeScript 6**.
- Raised dependency floors to patched versions (`axios` `^1.17.0`, `ws` `^8.21.0`).
- Reworked the build/release scripts and dropped the interactive prepublish step; the package is
  now published from a fresh `./dist` build validated by `publint` and `arethetypeswrong`.
- Hardened credential lookup: `getCredentialsByProcessId` validates that the process id is an
  integer before interpolating it into the platform shell command.

### Fixed

- **Concurrent `connect()` calls are now serialized** via a generation guard — the latest call
  wins and any superseded in-flight call bails out without mutating shared state. Stale sockets
  can no longer null or disconnect a newer connection.
- **Connection lifecycle hardening.** A forced reconnect (calling `connect()` while already
  connected) now re-subscribes existing event listeners and re-emits `connected`. A failure after
  credentials are acquired (readiness check or WebSocket) tears down to a clean disconnected state,
  so a subsequent `request()` throws `NotConnectedError` and no pooled socket keeps the process
  alive.
- **Event listener isolation.** A throwing LCU event listener can no longer abort dispatch to the
  other listeners or propagate out of the WebSocket message handler.
- Raw axios request configs (and their `headers`) are shallow-copied so a caller's objects are
  never mutated, and non-axios keys (`returnAxiosResponse`, `retryOptions`, `certificate`) are
  stripped before the request is forwarded to axios.
- Credential discovery tolerates non-fatal PowerShell warnings written to `stderr` instead of
  treating them as failures.

[0.9.0]: https://github.com/dysolix/hasagi-core/releases/tag/v0.9.0
[0.8.1]: https://github.com/dysolix/hasagi-core/releases/tag/v0.8.1
[0.8.0]: https://github.com/dysolix/hasagi-core/releases/tag/v0.8.0
[0.7.0]: https://github.com/dysolix/hasagi-core/releases/tag/v0.7.0
