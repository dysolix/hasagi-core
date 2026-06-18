# Credentials & Discovery

Most apps never touch this — [[Connecting|`connect()`]] discovers credentials for you, and the root
`getCredentials` export covers one-off [[Standalone Requests|standalone requests]]. This page is for the
cases where you need to discover credentials yourself: targeting a specific client, supplying them to
the `manual` strategy, or building custom discovery.

## What "credentials" are

To talk to the LCU you need two things, exposed as `LCUCredentials`:

```ts
type LCUCredentials = {
  processId?: number; // present when discovered via process; absent for lockfile
  port: number;       // the local port the client's API listens on
  password: string;   // the remoting auth token (used as HTTP basic-auth password "riot:<password>")
};
```

The client picks a random port and generates a fresh password every time it launches, which is why they
have to be discovered at runtime.

## `getCredentials`

The easiest entry point. Exported from both the package root and the `@hasagi/core/credentials` subpath.

```ts
import { getCredentials } from "@hasagi/core";

// Default: discover from the running process (Windows/macOS only)
const creds = await getCredentials();

// From a lockfile path or its content
const creds2 = await getCredentials("lockfile", "C:\\Riot Games\\League of Legends\\lockfile");
```

| Argument | Values | Notes |
|----------|--------|-------|
| `source` | `"process"` (default) \| `"lockfile"` | How to discover. |
| `lockfile` | path or content | Required when `source` is `"lockfile"`. |

> **`process` is Windows/macOS only.** On other platforms it throws — use `"lockfile"` there.
>
> With multiple `LeagueClientUx` processes running, `"process"` uses the first one the OS reports. To
> target a specific client, use the lockfile or `getCredentialsByProcessId` with a PID you select.

## Low-level helpers (`@hasagi/core/credentials`)

For custom discovery, the `@hasagi/core/credentials` subpath exports the building blocks
`getCredentials` uses internally:

```ts
import {
  getCredentials,
  getLeagueClientUxProcesses,
  getCredentialsByProcessId,
  getCredentialsFromLockfileContent,
} from "@hasagi/core/credentials";
```

> These also remain available from the package root for now, but are **deprecated there** and will be
> removed from the root in **v1**. Import them from `@hasagi/core/credentials`. See [[Type System]].

### `getLeagueClientUxProcesses(): Promise<number[]>`

Returns the PIDs of all running `LeagueClientUx` processes. An empty array means none are running.

```ts
const pids = await getLeagueClientUxProcesses();
```

### `getCredentialsByProcessId(processId): Promise<LCUCredentials>`

Reads the port and password from a specific process's command-line arguments. Use this with a PID from
`getLeagueClientUxProcesses` to target a particular client when several are running.

```ts
const pids = await getLeagueClientUxProcesses();
const creds = await getCredentialsByProcessId(pids[0]);

await client.connect({ authenticationStrategy: "manual", credentials: creds });
```

Throws if the PID isn't a valid integer, the process can't be found, or the port/password can't be
parsed from its command line.

### `getCredentialsFromLockfileContent(content): Promise<LCUCredentials>`

Parses credentials from raw lockfile content (synchronously, despite returning through `getCredentials`'
async path). Useful if you've already read the file — or received its content over IPC — and don't want
Hasagi to read it again.

```ts
import { readFile } from "node:fs/promises";

const content = await readFile("/path/to/lockfile", "utf8");
const creds = getCredentialsFromLockfileContent(content);
```

The lockfile is a single line of the form `LeagueClient:<pid>:<port>:<password>:https`; this helper
extracts the port and password and throws if the format doesn't match.

## Choosing an approach

| You want to… | Use |
|--------------|-----|
| Just connect | [[Connecting|`connect()`]] — handles discovery internally |
| One standalone request | `getCredentials()` → [[Standalone Requests|`request()`]] |
| Target a specific client among several | `getLeagueClientUxProcesses` + `getCredentialsByProcessId` |
| Parse credentials you already have | `getCredentialsFromLockfileContent` |
| Run on Linux / unsupported platform | `lockfile` source (process discovery is Windows/macOS only) |

## See also

- [[Connecting]] — authentication strategies that consume these credentials.
- [[Standalone Requests]] — passing credentials to a one-off request.
- [[Type System]] — subpath exports and the v1 deprecations.
