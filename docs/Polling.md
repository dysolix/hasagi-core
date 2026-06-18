# Polling

When an endpoint doesn't push [[Events|WebSocket events]] — or you just want a simple loop —
`client.poll()` requests it on an interval and invokes callbacks for each result. It resolves once
polling stops.

```ts
await client.poll("get", "/lol-gameflow/v1/gameflow-phase", {
  intervalMs: 1000,
  onDistinctResponse: (phase) => {
    console.log("phase changed:", phase);
    return phase === "InProgress"; // return true to stop polling
  },
});
```

## Signature

```ts
client.poll(method, path, pollOptions, options?)
```

- `method` and `path` are the same typed endpoint pair as [[Requests|`request`]].
- `pollOptions` controls the loop (below).
- `options` is the optional per-request options object (`path` params, `query`, `body`, `headers`) —
  identical to `request`'s options, **except** that retries are forced off for poll requests.

## Poll options

| Field | Default | Meaning |
|-------|---------|---------|
| `intervalMs` | *(required)* | Milliseconds to wait between executions. |
| `maxExecutions` | unlimited | Stop after this many requests. |
| `onResponse` | — | Called on **every** response. |
| `onDistinctResponse` | — | Called only when the response **differs** from the previous one. |
| `onError` | — | Called when a request fails. |

### Stopping

Return `true` from **any** callback to stop polling immediately. Polling also stops on its own after
`maxExecutions` requests (if set). When polling stops, the promise returned by `poll()` resolves.

The wait is skipped after the final execution, so there's no trailing idle delay.

### `onResponse` vs `onDistinctResponse`

- **`onResponse`** fires for every poll, regardless of whether the value changed — useful for heartbeats
  or continuously refreshing state.
- **`onDistinctResponse`** fires only when the new response differs from the last (compared by JSON
  serialization) — useful for reacting to *changes*, like a phase transition.

```ts
await client.poll("get", "/lol-gameflow/v1/gameflow-phase", {
  intervalMs: 1000,
  onResponse: (phase) => console.log("current phase:", phase),         // every second
  onDistinctResponse: (phase) => console.log("phase changed to:", phase), // only on change
});
```

### Handling errors

Without an `onError` callback, request failures are swallowed and polling continues to the next
interval. Provide `onError` to observe them (and optionally stop):

```ts
await client.poll("get", "/lol-summoner/v1/current-summoner", {
  intervalMs: 2000,
  maxExecutions: 30,
  onResponse: (summoner) => console.log(summoner.displayName),
  onError: (err) => {
    console.error("poll failed:", err);
    return false; // keep going; return true to stop
  },
});
```

## Polling vs. events

| | Polling | [[Events]] |
|---|---|---|
| Mechanism | Repeated HTTP requests | WebSocket push |
| Latency | Up to `intervalMs` | Near-instant |
| Load | One request per interval | None until something changes |
| Best for | Endpoints without events, simple one-shot waits | Reacting to live changes efficiently |

Prefer events when the resource emits them. Reach for polling for one-off "wait until X" loops, or
endpoints that don't push updates.

## See also

- [[Requests]] — the request options shared by `poll`.
- [[Events]] — the usually-better alternative for live updates.
