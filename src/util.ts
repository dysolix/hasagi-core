import fs from "node:fs/promises";
import path from "node:path";
import { exec } from "child_process";

const shell = process.platform === "darwin" ? "/bin/bash" : "powershell.exe";

export type LCUCredentials = {
  processId?: number;
  port: number;
  password: string;
};

/**
 * Easiest way to retrieve credentials
 * @param lockfile Required if source="lockfile". Can either be the absolute path to the lockfile or its content.
 * @note With multiple `LeagueClientUx` processes running, the first one reported by the OS is used.
 */
export async function getCredentials(source: "process" | "lockfile" = "process", lockfile?: string): Promise<LCUCredentials> {
  if (source === "process") {
    if (process.platform !== "win32" && process.platform !== "darwin")
      throw new Error(`Authentication strategy 'process' is not supported on this platform. (${process.platform})`);

    const processId = (await getLeagueClientUxProcesses())[0];
    if (!processId)
      throw new Error("Could not find process 'LeagueClientUx'.");

    const credentials = await getCredentialsByProcessId(processId);
    return credentials;
  } else {
    if (typeof lockfile !== "string")
      throw new Error("Parameter 'lockfile' not provided or has an invalid type.");

    const isPath = path.isAbsolute(lockfile);
    let lockfileContent = lockfile;
    if (isPath) {
      lockfileContent = await fs.readFile(lockfile, "utf8").catch(err => {
        throw new Error(`Cannot read lockfile at provided path: '${lockfile}'`, { cause: err });
      });
    }

    return getCredentialsFromLockfileContent(lockfileContent);
  }
}

/** Parses credentials from raw lockfile content (`LeagueClient:<pid>:<port>:<password>:https`). */
export function getCredentialsFromLockfileContent(lockfileContent: string): LCUCredentials {
  // Trim so a trailing newline doesn't fail the anchored match.
  const match = lockfileContent.trim().match(/^LeagueClient:\d+:(\d+):(.+):https$/);
  if (!match)
    throw new Error("Lockfile does not have the expected schema. (/^LeagueClient:\\d+:\\d+:.+:https$/)");

  const port = Number(match[1]);
  const password = match[2];

  if (port && password) {
    return { port, password };
  }

  // Don't include the lockfile content in the message — it carries the password, which has no place in logs.
  throw new Error("Could not retrieve port and password from lockfile.");
}

/** Returns the process ids of all LeagueClientUx processes */
export function getLeagueClientUxProcesses(): Promise<number[]> {
  const command = process.platform !== "darwin" ? "(Get-CimInstance Win32_Process -Filter \"Name='LeagueClientUx.exe'\").ProcessId" : "ps -A | grep LeagueClientUx | awk '{print $1}'";
  return new Promise<number[]>((resolve, reject) => {
    // PowerShell writes non-fatal warnings/progress to stderr, so only a non-zero exit is fatal.
    exec(command, { shell, windowsHide: true }, (err, stdout) => {
      if (err)
        return reject(new Error("Could not retrieve LeagueClientUx process ids.", { cause: err }));

      resolve(stdout.split(/\r?\n/).map(x => parseInt(x, 10)).filter(x => !isNaN(x)));
    });
  });
}

/** Reads the credentials from the command line of the process with the given id. */
export async function getCredentialsByProcessId(processId: number): Promise<LCUCredentials> {
  // Guards the shell interpolation below against injection from untyped (JS) callers.
  if (!Number.isInteger(processId))
    throw new Error(`Invalid process id: ${String(processId)}. Expected an integer.`);

  const command = process.platform !== "darwin" ? `(Get-CimInstance Win32_Process -Filter "ProcessId=${processId}").CommandLine` : `ps -p ${processId} -o command=`;
  const commandLine = await new Promise<string>((resolve, reject) => {
    // stderr alone isn't fatal (PowerShell warnings); it's only surfaced without usable output.
    exec(command, { shell, windowsHide: true }, (err, stdout, stderr) => {
      if (err)
        return reject(new Error(`Could not retrieve command line of process with PID ${processId}.${stderr ? ` ${stderr}` : ""}`, { cause: err }));

      if (!stdout)
        return reject(new Error(`Process with PID ${processId} not found.${stderr ? ` ${stderr}` : ""}`));

      resolve(stdout);
    });
  });

  const port = parseInt(commandLine.match("--app-port=([0-9]*)")?.[1] ?? "", 10);
  const password = commandLine.match("--remoting-auth-token=([\\w-]*)")?.at(1);

  if (!port || !password)
    throw new Error(`Found process with PID ${processId}, but could not retrieve port and password.`);

  return {
    processId,
    port,
    password,
  };
}

export const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

export type MaybePromise<T> = T | Promise<T>;
