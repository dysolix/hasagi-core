# Getting Started

This page gets you from an empty project to a typed, working request in a few minutes.

## Prerequisites

- **Node.js ≥ 18**
- The **League of Legends client** installed and running on the same machine (for a live connection).
  If you only want to compile against the types, the client doesn't need to be running.

## Installation

```bash
npm install @hasagi/core
```

The package ships as CommonJS with bundled type declarations and works in both `require` and `import`
projects.

## Your first request

```ts
import { HasagiClient } from "@hasagi/core";

const client = new HasagiClient();

// Discovers the running client's credentials, waits until it's ready,
// and opens the event WebSocket.
await client.connect();

// `summoner` is fully typed from the endpoint definition.
const summoner = await client.request("get", "/lol-summoner/v1/current-summoner");
console.log(summoner.displayName, summoner.summonerLevel);

client.disconnect();
```

If the League client isn't running yet, `connect()` waits for it — by default it retries credential
discovery indefinitely (see [[Connecting]] to change this).

## What just happened

1. **`new HasagiClient()`** created a client. Nothing connects yet.
2. **`connect()`** discovered the running client's port and password, waited for the client to start
   responding (the *readiness check*), and opened the event WebSocket.
3. **`request("get", …)`** sent an authenticated HTTPS request to the local LCU and returned the parsed
   JSON body, typed to that endpoint's response.

## A slightly bigger example

Connect, react to phase changes, and read the current summoner:

```ts
import { HasagiClient } from "@hasagi/core";

const client = new HasagiClient();

client.on("connected", () => console.log("Connected to the League client"));
client.on("disconnected", () => console.log("Disconnected"));

await client.connect();

const me = await client.request("get", "/lol-summoner/v1/current-summoner");
console.log(`Logged in as ${me.displayName}`);

// Log every gameflow phase change (Lobby → Matchmaking → ChampSelect → InProgress → …)
client.addLCUEventListener({
  path: "/lol-gameflow/v1/gameflow-phase",
  callback: (event) => console.log("Phase:", event.data),
});
```

## Where to go next

- **[[Connecting]]** — authentication strategies, the readiness check, reconnection, lifecycle events.
- **[[Requests]]** — typed vs. raw requests, retries, and reusable prepared requests.
- **[[Events]]** — filtering and managing WebSocket event listeners.
- **[[Type System]]** — how the typing works and how to import endpoint types by name.
- **[[Troubleshooting]]** — if `connect()` or a request isn't behaving.
