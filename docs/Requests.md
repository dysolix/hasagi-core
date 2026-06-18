# Requests

Once a client is [[Connecting|connected]], `client.request()` sends authenticated requests to the LCU.
Authentication and the base URL (`https://127.0.0.1:<port>`) are added automatically.

There are two call shapes:

- **Typed** — `request(method, path, options?)`: path params, query, body, and the response are all
  typed per endpoint.
- **Raw axios config** — `request(config)`: an escape hatch for anything the typed form can't express.

## Typed requests

```ts
// Simple GET
const summoner = await client.request("get", "/lol-summoner/v1/current-summoner");

// Path parameters
await client.request("get", "/lol-summoner/v1/summoners/{id}", { path: { id: "123" } });

// Request body
await client.request("post", "/lol-lobby/v2/lobby", { body: { queueId: 430 } });

// Query parameters
await client.request("get", "/lol-match-history/v1/products/lol/{puuid}/matches", {
  path: { puuid },
  query: { begIndex: 0, endIndex: 20 },
});
```

The `options` object accepts (all typed and required/optional per endpoint):

| Field | Description |
|-------|-------------|
| `path` | An object of path-parameter values for `{placeholder}` segments. |
| `query` | Query-string parameters. |
| `body` | The request body (sent as JSON; `Content-Type` is set for you). |
| `headers` | Extra request headers. |
| `retryOptions` | Per-call retry configuration — see [Retries](#retries). |

When the endpoint and method are known to the generated types, TypeScript enforces the correct shape of
`path`, `query`, and `body`, and infers the response type. See [[Type System]] for how this works and
what happens for unknown endpoints.

## Raw axios config

For full control (or endpoints the types don't cover), pass an axios request config. The response is
`unknown` — you assert the type yourself.

```ts
await client.request({ method: "get", url: "/lol-summoner/v1/current-summoner" });
```

### Getting the full response

By default `request()` resolves to the **parsed response body**. Pass `returnAxiosResponse: true` to get
the entire `AxiosResponse` instead (status, headers, etc.):

```ts
const res = await client.request({
  method: "get",
  url: "/lol-summoner/v1/current-summoner",
  returnAxiosResponse: true,
});
console.log(res.status, res.headers, res.data);
```

> `returnAxiosResponse` is available on both the raw-config and (via `options`) typed forms.

## Retries

Requests can retry on failure. Retry options:

| Field | Default | Meaning |
|-------|---------|---------|
| `maxRetries` | `0` | Number of **additional** attempts after the first (so `2` = up to 3 total). |
| `retryDelay` | `1000` | Milliseconds to wait between attempts. |
| `noRetryStatusCodes` | `[400]` | Response status codes that should **not** be retried (fail fast). |

### Per call

```ts
await client.request("get", "/lol-summoner/v1/current-summoner", {
  retryOptions: { maxRetries: 2, retryDelay: 500, noRetryStatusCodes: [400, 404] },
});
```

### Client-wide default

```ts
const client = new HasagiClient({
  defaultRetryOptions: { maxRetries: 3, retryDelay: 1000 },
});

// Or change it later:
client.setDefaultRetryOptions({ maxRetries: 5, retryDelay: 2000 });
```

### How they merge

`retryOptions` resolve as a **last-wins merge** across three layers:

```
built-in defaults  <  client-wide defaultRetryOptions  <  per-call retryOptions
```

Each layer overrides only the fields it sets, so a per-call override changes just those fields and keeps
the rest of the client default:

```ts
const client = new HasagiClient({
  defaultRetryOptions: { maxRetries: 3, retryDelay: 1000, noRetryStatusCodes: [400, 404] },
});

// Only maxRetries changes; retryDelay (1000) and noRetryStatusCodes ([400, 404]) are inherited.
await client.request("get", "/lol-summoner/v1/current-summoner", {
  retryOptions: { maxRetries: 1 },
});
```

When all attempts are exhausted, the last error is thrown — or, if there was more than one failure, an
`AggregateError` wrapping every attempt's error. See [[Error Handling]].

## Prepared requests (`buildRequest`)

`buildRequest` returns a **reusable, typed function** bound to one method + path. Call it repeatedly
without restating the method and path, and optionally transform parameters and/or the response.

```ts
const getSummonerById = client.buildRequest("get", "/lol-summoner/v1/summoners/{id}");

// Path params are positional, in the order they appear in the path; the body (if any) comes last.
const summoner = await getSummonerById("123");
```

### Transforming the response

```ts
const getCurrentRunePageName = client.buildRequest("get", "/lol-perks/v1/currentpage", {
  transformResponse: (page) => page.name, // returns a string instead of the full page
});

const name = await getCurrentRunePageName();
```

### Transforming parameters

`transformParameters` lets the built function take friendlier arguments and map them to the endpoint's
actual parameters (it may be async):

```ts
const setLobbyQueue = client.buildRequest("post", "/lol-lobby/v2/lobby", {
  transformParameters: (queue: "draft" | "ranked") => {
    const queueId = queue === "ranked" ? 420 : 400;
    return [{ queueId }]; // the endpoint's real parameter tuple: [body]
  },
});

await setLobbyQueue("ranked");
```

### Options

| Field | Description |
|-------|-------------|
| `retryOptions` | Retry config for every call made through this prepared request. |
| `transformResponse` | Maps the raw response to a custom return type. |
| `transformParameters` | Maps caller-friendly arguments to the endpoint's real parameter tuple (sync or async). |

## See also

- [[Standalone Requests]] — make a single request without constructing a client.
- [[Error Handling]] — the errors `request()` can throw.
- [[Type System]] — how request/response typing works.
- [[Polling]] — repeatedly request an endpoint on an interval.
