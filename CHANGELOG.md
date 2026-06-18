# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[0.7.0]: https://github.com/dysolix/hasagi-core/releases/tag/v0.7.0
