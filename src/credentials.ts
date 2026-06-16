/**
 * Low-level credential and process-discovery helpers.
 *
 * Most consumers don't need these — `HasagiClient.connect()` and the root `getCredentials` export
 * cover the common cases. They live in this subpath (`@hasagi/core/credentials`) to keep the
 * module root focused on the primary API.
 */
export {
  getCredentials,
  getLeagueClientUxProcesses,
  getCredentialsByProcessId,
  getCredentialsFromLockfileContent,
} from "./util.js";
export type { LCUCredentials } from "./util.js";
