# @hasagi/core

A TypeScript library that makes using the League of Legends client API (LCU) easy.

# Features

- Easy to use
- Auto-generated types for every request
- WebSocket support
- Lockfile and process arguments support
- Ability to prepare requests to modify their parameters and response

# Installation
```
npm install @hasagi/core
```
# Requests

You can use Hasagi to send a request like this

```ts
import { HasagiClient } from "@hasagi/core";

const client = new HasagiClient();
await client.connect();

// Type of response is automatically set by Hasagi
const response = await client.request("get", "/lol-summoner/v1/current-summoner");
```
# Disclaimer
Hasagi is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc
