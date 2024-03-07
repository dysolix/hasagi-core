import axios from "axios";
import getProcesses from "ps-list";
import fs from "node:fs/promises";
import path from "node:path";
import { Agent } from "https";
import { execSync } from "child_process";

export type MaybePromise<T> = T | Promise<T>
/**
 * @param lockfile Required if source="lockfile". Can either be the absolute path to the lockfile or it's content.
 */
export async function getPortAndBasicAuthToken(source: "process" | "lockfile" = "process", lockfile?: string) {
    if (source === "process") {
        const processArr = await getProcesses();
        let commandLine: string;

        if (process.platform === "win32") {
            const process = processArr.find(p => p.name === "LeagueClientUx.exe");
            if (process === undefined) throw new Error("Unable to find process 'LeagueClientUx.exe'.");
            commandLine = execSync(`(Get-CimInstance Win32_Process -Filter \"ProcessId=${process.pid}\").CommandLine`, { shell: "powershell.exe" }).toString("utf-8");
        } else {
            // UNSUPPORTED
            throw new Error(`Authentication strategy 'process' is not supported on this platform. (${process.platform})`);
        }

        let portArr = commandLine.match("--app-port=([0-9]*)");
        let passArr = commandLine.match("--remoting-auth-token=([\\w-]*)");

        if (portArr !== null && passArr !== null && (portArr?.length ?? 0) === 2 && (passArr?.length ?? 0) === 2) {
            return { port: Number(portArr[1]), password: passArr[1] };
        } else {
            throw new Error("Found process 'LeagueClientUx', but could not retrieve port password.");
        }
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

export const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));