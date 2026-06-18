# Standalone Requests

For a single call without setting up (and connecting) a `HasagiClient`, use the standalone `request`
function. You pass credentials explicitly, and get the same typed `method` + `path` form, raw-config
form, `retryOptions`, and `returnAxiosResponse` as [[Requests|`client.request`]].

```ts
import { request, getCredentials } from "@hasagi/core";

const credentials = await getCredentials();

// Typed method + path
const summoner = await request(credentials, "get", "/lol-summoner/v1/current-summoner");

// Raw axios config
await request(credentials, { method: "get", url: "/lol-summoner/v1/current-summoner" });
```

`getCredentials()` discovers the running client's port and password (see
[[Credentials and Discovery]]). You can also pass credentials you obtained any other way:

```ts
const summoner = await request(
  { port: 12345, password: "abc123" },
  "get",
  "/lol-summoner/v1/current-summoner",
);
```

## Signature

```ts
// Typed form
request(credentials, method, path, options?)

// Raw axios config form
request(credentials, config)
```

The first argument is always the credentials (`{ port, password }`). Everything after it mirrors
`client.request` — see [[Requests]] for `path` / `query` / `body` / `headers`, `retryOptions`,
and `returnAxiosResponse`.

## TLS certificate

Like `connect()`, the standalone `request` validates the connection against **Hasagi's bundled Riot
certificate by default**. Override it with the `certificate` option (in either call form):

```ts
// Disable validation
await request(credentials, "get", "/lol-summoner/v1/current-summoner", { certificate: null });

// Trust a specific certificate
await request(credentials, {
  method: "get",
  url: "/lol-summoner/v1/current-summoner",
  certificate: myCert,
});
```

| `certificate` value | Behaviour |
|---------------------|-----------|
| *omitted* | Validate against the bundled Riot certificate (default). |
| a string | Trust that certificate as the CA. |
| `null` | Disable TLS validation entirely. |

In the raw-config form, a caller-supplied `httpsAgent` takes precedence over `certificate`. See
[[TLS and Certificates]] for the full picture.

## Standalone vs. client

Each standalone call opens a **fresh connection** — there's no socket pooling. For repeated or
high-frequency calls, prefer a `HasagiClient` instance instead: its HTTP agent pools sockets via
keep-alive, so each request skips a new TCP + TLS handshake.

| | Standalone `request` | `HasagiClient` |
|---|---|---|
| Setup | None — just pass credentials | `connect()` first |
| Connection reuse | New connection per call | Pooled (keep-alive) |
| Events / polling | No | Yes |
| Best for | One-off calls, scripts | Apps, repeated calls |

## Errors

Failures are wrapped exactly like the client method: a non-success status becomes an `LCUError`, a
transport failure becomes a `RequestError`, and exhausted retries become an `AggregateError`. See
[[Error Handling]].

## See also

- [[Requests]] — the full request option reference (shared with this function).
- [[Credentials and Discovery]] — obtaining the credentials to pass in.
- [[TLS and Certificates]] — the `certificate` option.
