# Events

The LCU pushes real-time updates over a WebSocket — phase changes, champ-select updates, chat messages,
lobby changes, and much more. When you [[Connecting|connect]] with `useWebSocket` enabled (the default),
`HasagiClient` opens that socket and dispatches events to listeners you register.

## Adding a listener

```ts
const listener = {
  path: "/lol-gameflow/v1/gameflow-phase",
  types: ["Update"],
  callback: (event) => console.log(event.eventType, event.data),
};

client.addLCUEventListener(listener);
```

A listener is an object with a `callback` plus any combination of three optional filters. The callback
only fires when **all** present filters match:

| Field | Type | Filters by |
|-------|------|-----------|
| `path` | `string \| RegExp` | The event's resource URI. A string matches exactly; a `RegExp` is tested against the URI. |
| `types` | `("Create" \| "Update" \| "Delete")[]` | The event type — only events whose type is in the array match. |
| `name` | event name (e.g. `"OnJsonApiEvent"`) | The raw WebSocket event name. |
| `callback` | function | **Required.** Receives the event payload. |

### The callback payload

The callback receives the event payload object:

```ts
{
  uri: string;        // the resource path, e.g. "/lol-gameflow/v1/gameflow-phase"
  eventType: string;  // "Create" | "Update" | "Delete"
  data: unknown;      // the resource's new value (typed per event where known)
}
```

So for the example above, `event.data` is the new gameflow phase and `event.eventType` is `"Update"`.

## Subscriptions are automatic

The LCU requires you to *subscribe* to an event name before it sends it. `addLCUEventListener` handles
this for you:

- If you pass a **`path`** (and no `name`), it automatically subscribes to **`OnJsonApiEvent`** — the
  firehose of all JSON API events — and filters by your URI client-side.
- If you pass a **`name`**, it subscribes to that specific event.

So in most cases you just specify a `path` and a `callback`:

```ts
client.addLCUEventListener({
  path: "/lol-champ-select/v1/session",
  callback: (event) => console.log("champ select session changed", event.data),
});
```

### RegExp paths

Match a family of resources with a `RegExp`:

```ts
client.addLCUEventListener({
  path: /^\/lol-chat\/v1\/conversations\/.+\/messages$/,
  callback: (event) => console.log("new chat activity:", event.data),
});
```

## Removing listeners

`removeLCUEventListener` removes the **first** listener matching what you pass — the original object, the
callback function, an event name, or a path:

```ts
client.removeLCUEventListener(listener);        // by the object
client.removeLCUEventListener(myCallback);      // by callback reference
client.removeLCUEventListener("OnJsonApiEvent"); // by event name
client.removeLCUEventListener("/lol-gameflow/v1/gameflow-phase"); // by path
```

It returns `true` if a listener was removed, `false` otherwise. When no remaining listener subscribes to
the removed listener's event name, that event is also **unsubscribed** from the WebSocket automatically.

Remove everything at once:

```ts
client.removeAllLCUEventListeners();
```

## Listener isolation

Each callback is invoked in isolation — if one throws, the error is contained and the remaining
listeners still run. Adding or removing listeners from inside a callback is also safe: dispatch works on
a snapshot, so you won't accidentally skip siblings.

## Low-level: every event

Besides the filtered listeners above, the client emits a raw `lcu-event` for **every** WebSocket event,
delivered as the raw 3-element tuple `[opcode, name, data]`:

```ts
client.on("lcu-event", ([opcode, name, payload]) => {
  console.log(name, payload.uri, payload.eventType);
});
```

Use this for logging or custom dispatch. For normal filtering, prefer `addLCUEventListener`.

## Manual subscription control

You rarely need these — `addLCUEventListener` manages subscriptions — but they're available for advanced
cases (e.g. pre-subscribing before listeners are wired up):

```ts
client.subscribeWebSocketEvent("OnJsonApiEvent");
client.unsubscribeWebSocketEvent("OnJsonApiEvent");
```

Subscriptions made while disconnected are queued and (re-)sent automatically once the socket opens — and
they survive reconnects.

## Disabling the WebSocket

If you only make HTTP requests, skip the socket entirely:

```ts
await client.connect({ useWebSocket: false });
```

Event listeners won't fire while the socket is disabled.

## See also

- [[Connecting]] — lifecycle events (`connected`, `disconnected`, `websocket-error`).
- [[Polling]] — for endpoints you'd rather poll than subscribe to.
- [[Type System]] — typed event payloads and the `LCUWebSocketEvents` map.
