# Error Handling

Both `client.request` and the standalone [[Standalone Requests|`request`]] wrap failures in one of three
typed error classes, all exported from the package root. This lets you branch on *why* a request failed
without parsing axios internals.

```ts
import { LCUError, RequestError, NotConnectedError } from "@hasagi/core";
```

## The three errors

### `NotConnectedError`

Thrown when you call `client.request` (or `poll`) before a successful `connect()`, or after a
`disconnect()`.

```ts
try {
  await client.request("get", "/lol-summoner/v1/current-summoner");
} catch (err) {
  if (err instanceof NotConnectedError) {
    await client.connect();
    // ...retry
  }
}
```

### `LCUError`

Thrown when the client **responded** with a non-success status code. Carries the LCU's error detail:

| Property | Type | Meaning |
|----------|------|---------|
| `statusCode` | `number` | The HTTP status (e.g. `404`, `500`). |
| `errorCode` | `string \| null` | The LCU's machine-readable error code, when provided. |
| `implementationDetails` | `any` | Extra data from the LCU, often empty. |
| `message` | `string` | `[status] errorCode: message`, or a generic message if the LCU gave no detail. |

```ts
try {
  await client.request("get", "/lol-summoner/v1/summoners/{id}", { path: { id: "0" } });
} catch (err) {
  if (err instanceof LCUError) {
    if (err.statusCode === 404) console.log("summoner not found");
    else console.error(`LCU error ${err.statusCode}:`, err.errorCode);
  }
}
```

### `RequestError`

Thrown when the request failed **without a response** — a transport-level problem like the client not
running or refusing the connection.

| Property | Type | Meaning |
|----------|------|---------|
| `errorCode` | `string \| undefined` | The underlying error code, e.g. `ECONNREFUSED`. |
| `message` | `string` | A human-readable description. |

```ts
try {
  await client.request("get", "/lol-summoner/v1/current-summoner");
} catch (err) {
  if (err instanceof RequestError && err.errorCode === "ECONNREFUSED") {
    console.log("the League client isn't reachable");
  }
}
```

> **Auto-disconnect:** if a request hits `ECONNREFUSED` while **no WebSocket is active**, the client
> treats it as a disconnect (emits `disconnected`) before rethrowing. With the WebSocket active, the
> socket's own close drives the disconnect instead.

## Retries and `AggregateError`

When [[Requests|retries]] are configured and **every** attempt fails, the thrown error depends on how
many attempts there were:

- **One attempt failed** → that single error (an `LCUError` or `RequestError`) is thrown directly.
- **Multiple attempts failed** → an **`AggregateError`** is thrown, whose `errors` array holds every
  attempt's error in order. Its message is `Request failed after N attempts.`

```ts
try {
  await client.request("get", "/lol-summoner/v1/current-summoner", {
    retryOptions: { maxRetries: 2, retryDelay: 500 },
  });
} catch (err) {
  if (err instanceof AggregateError) {
    console.error(`failed after ${err.errors.length} attempts`);
    for (const e of err.errors) console.error(" -", (e as Error).message);
  }
}
```

A status code listed in `noRetryStatusCodes` (default `[400]`) short-circuits retries immediately — see
[[Requests]].

## Quick reference

| Error | Meaning | Key fields |
|-------|---------|-----------|
| `NotConnectedError` | Request made before `connect()` succeeded | — |
| `LCUError` | LCU responded with a non-success status | `statusCode`, `errorCode`, `implementationDetails` |
| `RequestError` | Request failed with no response | `errorCode` |
| `AggregateError` | All retry attempts failed (≥ 2) | `errors[]` |

## See also

- [[Requests]] — retry configuration and merge order.
- [[Connecting]] — connection lifecycle and `NotConnectedError`.
- [[Troubleshooting]] — diagnosing common error conditions.
