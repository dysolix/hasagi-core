# @hasagi/core

A TypeScript library that makes using the **League of Legends client API (LCU)** easy — fully typed
requests, WebSocket events, polling, and automatic credential discovery.

```ts
import { HasagiClient } from "@hasagi/core";

const client = new HasagiClient();
await client.connect();

const summoner = await client.request("get", "/lol-summoner/v1/current-summoner");
console.log(summoner.summonerId); // fully typed
```

## What is this?

The League client (the launcher you use to log in, queue, pick champions, etc.) exposes a local HTTP +
WebSocket API on `127.0.0.1` — the **LCU API**. It's how the client's own UI talks to its backend, and
it's what tools like rank trackers, auto-accept utilities, and overlays are built on.

Talking to it directly is awkward: you have to find the running client's port and password, trust its
self-signed certificate, and there are no official types. `@hasagi/core` handles all of that and gives
you a typed surface over (almost) every endpoint and event.

## Feature map

- **[[Connecting]]** — credential discovery (process, lockfile, or manual), a readiness wait, and the
  event WebSocket, all from one `connect()` call. Safe to reconnect.
- **[[Requests]]** — fully typed `method` + `path` requests, a raw-axios escape hatch, configurable
  retries, and reusable prepared requests via `buildRequest`.
- **[[Events]]** — subscribe to LCU WebSocket events with path / type / name filtering.
- **[[Polling]]** — poll an endpoint on an interval with response / distinct-response / error callbacks.
- **[[Standalone Requests]]** — fire a single typed request without constructing a client.
- **[[Type System]]** — generated types for nearly every endpoint and event, importable by name.
- **[[Error Handling]]** — typed errors (`LCUError`, `RequestError`, `NotConnectedError`).

## Getting started

New here? Start with **[[Getting Started]]** for installation and your first request, then read
**[[Connecting]]** to understand the connection lifecycle.

## Page index

| Guide | What it covers |
|-------|----------------|
| [[Getting Started]] | Install and run your first request |
| [[Connecting]] | `connect()`, auth strategies, readiness, lifecycle events |
| [[Requests]] | Typed requests, retries, `buildRequest` |
| [[Standalone Requests]] | One-off `request()` without a client |
| [[Events]] | WebSocket event subscriptions and filtering |
| [[Polling]] | Interval polling of endpoints |
| [[Credentials and Discovery]] | Low-level credential helpers |
| [[TLS and Certificates]] | The `certificate` option and its defaults |
| [[Type System]] | Generated types and subpath exports |
| [[Error Handling]] | The three error classes |
| [[API Reference]] | Every export and options type |
| [[Troubleshooting]] | Common problems and fixes |

## Requirements

- **Node.js ≥ 18**
- The League of Legends client installed and running (for live connections)
- Credential auto-discovery via the `process` strategy is supported on **Windows** and **macOS**; the
  `lockfile` and `manual` strategies work anywhere. See [[Connecting]].

## Disclaimer

Hasagi is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone
officially involved in producing or managing Riot Games properties. Riot Games and all associated
properties are trademarks or registered trademarks of Riot Games, Inc.
