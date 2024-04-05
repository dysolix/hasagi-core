import fs from "node:fs/promises";
import path from "node:path";
import { execSync } from "child_process";

export type LCUCredentials = {
    processId?: number;
    port: number;
    password: string;
}

/**
 * @param lockfile Required if source="lockfile". Can either be the absolute path to the lockfile or it's content.
 */
export async function getPortAndBasicAuthToken(source: "process" | "lockfile" = "process", lockfile?: string): Promise<LCUCredentials> {
    if (source === "process") {
        if (process.platform !== "win32")
            throw new Error(`Authentication strategy 'process' is not supported on this platform. (${process.platform})`);

        const processId = getLeagueClientUxProcesses()[0];
        if (!processId)
            throw new Error("Could not find process 'LeagueClientUx.exe'.");

        const credentials = getCredentialsByProcessId(processId);
        return credentials;
    } else {
        if (typeof lockfile !== "string")
            throw new Error("Parameter 'lockfile' not provided or has an invalid type.");

        const isPath = path.isAbsolute(lockfile);
        let lockfileContent = lockfile;
        if (isPath) {
            lockfileContent = await fs.readFile(lockfile, "utf8").catch(err => {
                throw new Error(`Cannot read lockfile at provided path: '${lockfile}'`);
            });
        }

        return getPortAndBasicAuthTokenFromLockfile(lockfileContent);
    }
}

function getPortAndBasicAuthTokenFromLockfile(lockfileContent: string) {
    if (!/^LeagueClient:\d+:\d+:.+:https$/.test(lockfileContent))
        throw new Error(`Lockfile does not have the expected schema. (/^LeagueClient:\\d+:\\d+:.+:https$/)`);

    const lockfileArr = lockfileContent.split(":");
    const port = Number(lockfileArr[2]);
    const password = lockfileArr[3];

    if (port && password) {
        return { port, password };
    }

    throw new Error("Could not retrieve port and password from lockfile.");
}

/** Returns the process ids of all LeagueClientUx processes */
export function getLeagueClientUxProcesses() {
    return execSync(`(Get-CimInstance Win32_Process -Filter "Name='LeagueClientUx.exe'").ProcessId`, { shell: "powershell.exe" }).toString('utf-8').split('\r\n').map(x => parseInt(x)).filter(x => !isNaN(x));
}

export function getCredentialsByProcessId(processId: number): LCUCredentials {
    const commandLine = execSync(`(Get-CimInstance Win32_Process -Filter "ProcessId=${processId}").CommandLine`, { shell: "powershell.exe" }).toString('utf-8');
    if (!commandLine)
        throw new Error(`Process with PID ${processId} not found.`);

    const port = parseInt(commandLine.match("--app-port=([0-9]*)")?.at(1)!);
    const password = commandLine.match("--remoting-auth-token=([\\w-]*)")?.at(1);

    if (!port || !password)
        throw new Error(`Found process with PID ${processId}, but could not retrieve port and password.`);

    return {
        processId,
        port,
        password
    }
}

export const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

export type MaybePromise<T> = T | Promise<T>