# Common Endpoints

A cookbook of LCU endpoints most tools end up needing, with notes where the usage isn't obvious from
the types. All examples assume a [[Connecting|connected]] client; request/response shapes are enforced
by the generated types (see [[Type System]]).

> **Riot restricts what third-party tools may do with the LCU.** Rules of thumb:
>
> - No interacting with the shop, chat, or anything authentication-related.
> - Don't automate anything Riot doesn't want automated (e.g. ready check, bans, champ selection).
> - If you can do it using the official Riot API, don't do it using the LCU.
> - Don't expose data Riot deliberately hides (e.g. names in ranked champ select).
>
> Just because something isn't listed here doesn't mean it's allowed — when in doubt, ask, e.g. in
> the [Riot third-party developer Discord](https://discord.gg/riotgamesdevrel). This page sticks to
> commonly accepted functionality.

## Current summoner and lookups

Most endpoints want a `summonerId` or `puuid`. The logged-in player's come from:

```ts
const me = await client.request("get", "/lol-summoner/v1/current-summoner");
// me.summonerId, me.puuid
```

Look up other players by Riot ID (`gameName#tagLine`) via query parameters:

```ts
const alias = await client.request("get", "/lol-summoner/v1/alias/lookup", {
  query: { gameName: "Player", tagLine: "EUW" },
});
```

By PUUID, or several at once by id:

```ts
await client.request("get", "/lol-summoner/v1/summoners-by-puuid-cached/{puuid}", { path: { puuid } });
await client.request("get", "/lol-summoner/v2/summoners", { query: { ids: [123, 456] } });
```

> The Riot API uses **encrypted** ids that are not interchangeable with the LCU's. To feed an LCU endpoint that takes a
> `puuid` or `summonerId`, resolve it through the LCU (e.g. from the player's Riot ID via `alias/lookup`).

## Gameflow (game state)

`/lol-gameflow/v1/gameflow-phase` returns the current phase as a plain string — `"None"`, `"Lobby"`,
`"Matchmaking"`, `"ChampSelect"`, `"InProgress"`, `"EndOfGame"`, and a few more:

```ts
const phase = await client.request("get", "/lol-gameflow/v1/gameflow-phase");
```

`/lol-gameflow/v1/session` returns the full session (game data, map, queue). For reacting to phase
*changes*, prefer an [[Events|event listener]] over polling:

```ts
client.addLCUEventListener({
  path: "/lol-gameflow/v1/gameflow-phase",
  callback: (event) => console.log("phase:", event.data),
});
```

## Ranked stats

```ts
const ranked = await client.request("get", "/lol-ranked/v1/current-ranked-stats");
```

## Lobby

Create a lobby by queue id, read it, or leave it:

```ts
await client.request("post", "/lol-lobby/v2/lobby", { body: { queueId: 450 } }); // create (450 = ARAM)
const lobby = await client.request("get", "/lol-lobby/v2/lobby");
await client.request("delete", "/lol-lobby/v2/lobby"); // leave
```

Queue ids come from `/lol-game-queues/v1/queues`.

Received invitations are accepted/declined via a **POST with a path parameter and no body**:

```ts
const invitations = await client.request("get", "/lol-lobby/v2/received-invitations");

await client.request("post", "/lol-lobby/v2/received-invitations/{invitationId}/accept", {
  path: { invitationId: invitations[0].invitationId },
});
```

## Rune pages

The active page is read from `/lol-perks/v1/currentpage`. Selecting a different page is unusual:
**the PUT body is just the page id, as a bare number**:

```ts
const page = await client.request("get", "/lol-perks/v1/currentpage");

await client.request("put", "/lol-perks/v1/currentpage", { body: 50 }); // select page with id 50
```

Pages are created with `post /lol-perks/v1/pages` and deleted with `delete /lol-perks/v1/pages/{id}`.
Page slots are limited, so "editing" a managed page is typically delete-then-recreate. The LCU accepts
a partial page resource on create (e.g. just `name`, `primaryStyleId`, `subStyleId`,
`selectedPerkIds`), even though the generated body type requires the full resource — cast the partial
if you take this route.

## Replays

Downloading or watching a replay is a POST with the game id in the path **and a context body** the
types won't hint at a value for:

```ts
await client.request("post", "/lol-replays/v1/rofls/{gameId}/download", {
  path: { gameId: "2809535942" },
  body: { componentType: "replay-button_match-history" },
});
```

`watch` at `/lol-replays/v1/rofls/{gameId}/watch` works the same way and launches the replay client.

## Champion and skin inventory

The inventory endpoints take a `summonerId` path parameter, so the current summoner has to be fetched
first:

```ts
const me = await client.request("get", "/lol-summoner/v1/current-summoner");

const skins = await client.request("get", "/lol-champions/v1/inventories/{summonerId}/skins-minimal", {
  path: { summonerId: String(me.summonerId) },
});
const owned = skins.filter((skin) => skin.ownership.owned);
```

`/lol-champions/v1/owned-champions-minimal` returns the owned champions without a path parameter.
See [[Requests#transforming-parameters]] for wrapping this pattern in a reusable `buildRequest`.

## Item sets

Item sets are stored as **one object per summoner**, and the PUT **replaces all of them** — always
read, modify, and write back:

```ts
const me = await client.request("get", "/lol-summoner/v1/current-summoner");
const path = { summonerId: String(me.summonerId) };

const current = await client.request("get", "/lol-item-sets/v1/item-sets/{summonerId}/sets", { path });

await client.request("put", "/lol-item-sets/v1/item-sets/{summonerId}/sets", {
  path,
  body: { ...current, itemSets: [...current.itemSets, myNewItemSet] },
});
```

## Account loadout

The account loadout (TFT companion, arena skin, etc.) is read from a scope endpoint that returns an
**array** — the account loadout is its first element. Updating it means merging into the existing
loadout and PUTting to `/lol-loadouts/v4/loadouts/{id}`:

```ts
const [loadout] = await client.request("get", "/lol-loadouts/v4/loadouts/scope/account");

await client.request("put", "/lol-loadouts/v4/loadouts/{id}", {
  path: { id: loadout.id },
  body: { ...loadout, loadout: { ...loadout.loadout, /* changed slots */ } },
});
```

## Client notifications

Showing a notification inside the League client uses translation keys. For free-form text, use the
`pre_translated` keys and put the text in `data`:

```ts
await client.request("post", "/player-notifications/v1/notifications", {
  body: {
    titleKey: "pre_translated_title",
    detailKey: "pre_translated_details",
    data: { title: "Hello", details: "Sent through hasagi" },
  } as any, // the generated type requires the full resource; the LCU accepts this subset
});
```

## Region and locale

```ts
const { region, locale } = await client.request("get", "/riotclient/region-locale");
```

## See also

- [[Requests]] — request forms, retries, `buildRequest`.
- [[Events]] — reacting to changes instead of polling.
- [[Type System]] — how the endpoint types work and what `unknown` responses mean.
