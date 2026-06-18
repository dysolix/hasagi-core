# TLS & Certificates

The LCU serves its API over HTTPS with a **self-signed certificate** issued by Riot's own CA. Node
rejects such certificates by default, so any client has to decide how to handle TLS validation. Hasagi's
default is to validate against the correct Riot certificate — which it bundles — so you get real TLS
verification out of the box without any setup.

## The bundled certificate

Hasagi ships Riot's root certificate and uses it as the trusted CA by default. This means:

- Connections are genuinely **validated** (not blindly trusted).
- It keeps working unless Riot changes their root certificate.

The certificate is exported if you need it directly:

```ts
import { RIOT_GAMES_CERTIFICATE } from "@hasagi/core";
```

## The `certificate` option

`connect()` and the standalone [[Standalone Requests|`request`]] both accept a `certificate` option with
the same three behaviours:

| `certificate` value | Behaviour |
|---------------------|-----------|
| *omitted* / `undefined` | **Default.** Validate against Hasagi's bundled Riot certificate. |
| a `string` | Trust **that** certificate (PEM string) as the CA and validate against it. |
| `null` | **Disable** TLS validation entirely (`rejectUnauthorized: false`). |

### On a client connection

```ts
// Default — validate against the bundled cert
await client.connect();

// Trust your own certificate
await client.connect({ certificate: myPemString });

// Disable validation
await client.connect({ certificate: null });
```

The chosen setting applies to **both** the HTTP request agent and the event WebSocket for that
connection.

### On a standalone request

```ts
await request(credentials, "get", "/lol-summoner/v1/current-summoner", { certificate: null });

await request(credentials, {
  method: "get",
  url: "/lol-summoner/v1/current-summoner",
  certificate: myPemString,
});
```

In the raw-config form, a caller-supplied `httpsAgent` **takes precedence** over `certificate` — if you
pass your own agent, configure validation on it directly.

## When would I override it?

- **`null` (disable):** quick local debugging, or if you've confirmed a certificate mismatch is blocking
  you and you accept the reduced security. Since the connection is always to `127.0.0.1`, the practical
  risk is low — but validation is still preferable.
- **A custom string:** if Riot rotates their root certificate before Hasagi's bundled copy is updated,
  you can supply the current one without waiting for a release. (Please also
  [open an issue](https://github.com/dysolix/hasagi-core/issues) so the bundled copy gets updated.)

## Connection pooling note

This is a TLS topic with a performance footnote worth knowing:

- A **`HasagiClient`** builds one keep-alive HTTPS agent per connection and **pools sockets**, so repeated
  requests reuse the TCP + TLS handshake. The agent is destroyed on `disconnect()`.
- The **standalone `request`** opens a fresh connection each call (no keep-alive), so a pooled socket
  can't keep the process alive at exit.

For repeated or high-frequency calls, prefer a client instance. See [[Standalone Requests]].

## See also

- [[Connecting]] — the `certificate` connect option in context.
- [[Standalone Requests]] — the `certificate` request option.
- [[Troubleshooting]] — certificate / TLS errors.
