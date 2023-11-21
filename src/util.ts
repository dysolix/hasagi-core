import axios from "axios";
import find from "find-process";
import fs from "node:fs/promises";
import path from "node:path";
import { Agent } from "https";

export type MaybePromise<T> = T | Promise<T>

/**
 * @param lockfile Required if source="lockfile". Can either be the absolute path to the lockfile or it's content.
 */
export async function getPortAndBasicAuthToken(source: "process" | "lockfile" = "process", lockfile?: string) {
    if (source === "process") {
        const res = await find("name", "LeagueClientUx", true);
        const process = res[0];
        if (!process) {
            throw new Error("Unable to find process 'LeagueClientUx'.");
        }

        const args = process.cmd;

        let portArr = args.match("--app-port=([0-9]*)");
        let passArr = args.match("--remoting-auth-token=([\\w-]*)");

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
    const port = lockfileArr[2];
    const password = lockfileArr[3];

    if (port && password) {
        return { port: Number(port), password: password };
    }

    throw new Error("Could not retrieve port and password from lockfile.");
}

export async function waitForPort(port: number) {
    let ready = false;
    while (!ready) {
        const res = await axios.get("https://127.0.0.1:" + port, { adapter: "http", httpsAgent: new Agent({ rejectUnauthorized: false }) }).catch(err => err);
        if (res.status !== undefined || "response" in res)
            break;
        await delay(1000);
    }
}

export const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));