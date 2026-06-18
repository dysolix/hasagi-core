# Type System

Hasagi's headline feature is that nearly every LCU endpoint and event is **fully typed**. The types are
auto-generated from the LCU's schema, so request bodies, query/path params, responses, and event
payloads are all checked and inferred for known endpoints.

## How typed requests work

When you call `request("get", "/lol-summoner/v1/current-summoner")`, the `method` + `path` literals are
matched against a generated `LCUEndpoints` map. From that match TypeScript derives:

- which `path` parameters, `query`, and `body` the options object requires (and their types),
- the **response type** the promise resolves to.

```ts
// `summoner` is typed as the summoner resource, not `any`.
const summoner = await client.request("get", "/lol-summoner/v1/current-summoner");
```

### Unknown endpoints

If a `path`/`method` pair isn't in the generated map, the options stay permissive (`query`/`body` are
loosely typed) and the response is `unknown`. You can still call it — you just assert the response type
yourself. The [[Requests|raw axios config]] form behaves the same way (response is `unknown`).

## Importing types by name — `@hasagi/core/types`

The generated types are exported from the `@hasagi/core/types` subpath, so you can reference an
endpoint's resource type directly:

```ts
import type { LolSummonerSummoner } from "@hasagi/core/types";

function format(summoner: LolSummonerSummoner): string {
  return `${summoner.displayName} (level ${summoner.summonerLevel})`;
}
```

The same types are also available at the package root under the `LCUTypes` namespace:

```ts
import type { LCUTypes } from "@hasagi/core";

type Summoner = LCUTypes.LolSummonerSummoner;
```

## Helper types

These generic helpers (exported from `@hasagi/core/types`) let you work with the endpoint map
programmatically:

| Type | Use |
|------|-----|
| `LCUEndpoints` | The full generated endpoint map. |
| `HttpMethod` | `"get" \| "post" \| "put" \| "patch" \| "delete" \| "head"`. |
| `EndpointsWithMethod<Method>` | Union of all paths that support a given method. |
| `LCUEndpoint<Method, Path>` | The callable function signature for an endpoint. |
| `LCUEndpointResponseType<Method, Path>` | The response type for an endpoint. |
| `LCUEndpointBodyType<Method, Path>` | The request-body type for an endpoint. |
| `LCUWebSocketEvents` | Map of WebSocket event names to their payload types. |

These power `buildRequest`, `poll`, and the event API internally, and are useful when writing your own
generic wrappers over Hasagi.

## Event payload types

WebSocket events are typed through `LCUWebSocketEvents`, which maps each event name (e.g.
`OnJsonApiEvent`) to its payload type. Most JSON API events are a `PluginResourceEvent`:

```ts
interface PluginResourceEvent<DataType = unknown> {
  uri: string;
  eventType: "Create" | "Update" | "Delete";
  data: DataType;
}
```

See [[Events]] for how listener callbacks receive these payloads.

## Subpath exports

The package is organized into three entry points:

| Import | Contents |
|--------|----------|
| `@hasagi/core` | The core API: `HasagiClient`, `request`, `getCredentials`, error classes, `RIOT_GAMES_CERTIFICATE`, the `LCUTypes` namespace, and core option types. |
| `@hasagi/core/types` | The generated LCU types, importable by name, plus the helper types above. |
| `@hasagi/core/credentials` | Low-level credential/process helpers (see [[Credentials and Discovery]]). |

### Deprecated root re-exports (removed in v1)

For backwards compatibility, the generated types (`LCUEndpoints`, `LCUEndpointResponseType`,
`LCUEndpointBodyType`, `EndpointsWithMethod`, `HttpMethod`, `LCUWebSocketEvents`) and the low-level
credential helpers (`getLeagueClientUxProcesses`, `getCredentialsByProcessId`) are **still re-exported
from the package root** — but they are **deprecated** and will be **removed from the root in v1**.

Migrate to the subpaths:

```ts
// Before (deprecated)
import type { LCUEndpoints } from "@hasagi/core";
import { getCredentialsByProcessId } from "@hasagi/core";

// After
import type { LCUEndpoints } from "@hasagi/core/types";
import { getCredentialsByProcessId } from "@hasagi/core/credentials";
```

## Regenerating the types

The LCU schema changes between patches. The bundled types are regenerated with the
[`@hasagi/cli`](https://www.npmjs.com/package/@hasagi/cli) tool:

```bash
hasagi schema --typescript ./src/types
```

In this repo that's wired up as an npm script:

```bash
npm run update-types
```

This is a maintainer task — published releases already include up-to-date generated types.

## See also

- [[Requests]] — typed requests in practice.
- [[Events]] — typed event payloads.
- [[Credentials and Discovery]] — the `@hasagi/core/credentials` subpath.
