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
 * @param lockfile Required if source="lockfile". Can either be the absolute path to the lockfile or it's content.
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

export function getCredentialsFromLockfileContent(lockfileContent: string): LCUCredentials {
  const match = lockfileContent.match(/^LeagueClient:\d+:(\d+):(.+):https$/);
  if (!match)
    throw new Error("Lockfile does not have the expected schema. (/^LeagueClient:\\d+:\\d+:.+:https$/)");

  const port = Number(match[1]);
  const password = match[2];

  if (port && password) {
    return { port, password };
  }

  throw new Error("Could not retrieve port and password from lockfile. (lockfile: " + lockfileContent + ")");
}

/** Returns the process ids of all LeagueClientUx processes */
export function getLeagueClientUxProcesses(): Promise<number[]> {
  const command = process.platform !== "darwin" ? "(Get-CimInstance Win32_Process -Filter \"Name='LeagueClientUx.exe'\").ProcessId" : "ps -A | grep LeagueClientUx | awk '{print $1}'";
  return new Promise<number[]>((resolve, reject) => {
    exec(command, { shell, windowsHide: true }, (err, stdout, stderr) => {
      if (err)
        return reject(new Error("Could not retrieve LeagueClientUx process ids.", { cause: err }));
      else if (stderr)
        return reject(new Error(`Could not retrieve LeagueClientUx process ids. ${stderr}`));

      resolve(stdout.split(/\r?\n/).map(x => parseInt(x, 10)).filter(x => !isNaN(x)));
    });
  });
}

export async function getCredentialsByProcessId(processId: number): Promise<LCUCredentials> {
  const command = process.platform !== "darwin" ? `(Get-CimInstance Win32_Process -Filter "ProcessId=${processId}").CommandLine` : `ps -p ${processId} -o command=`;
  const commandLine = await new Promise<string>((resolve, reject) => {
    exec(command, { shell, windowsHide: true }, (err, stdout, stderr) => {
      if (err)
        return reject(new Error(`Could not retrieve command line of process with PID ${processId}.`, { cause: err }));
      else if (stderr)
        return reject(new Error(`Could not retrieve command line of process with PID ${processId}. ${stderr}`));

      resolve(stdout);
    });
  });
  if (!commandLine)
    throw new Error(`Process with PID ${processId} not found.`);

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
