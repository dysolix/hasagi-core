import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Controllable child_process.exec mock so the credential-discovery helpers can be driven without a
// real League client / PowerShell. Each test sets the (err, stdout, stderr) the next exec yields.
const execMock = vi.hoisted(() => vi.fn());
vi.mock("child_process", () => ({ exec: execMock }));

import { delay, getCredentials, getCredentialsByProcessId, getCredentialsFromLockfileContent, getLeagueClientUxProcesses } from "../../src/util";

/** Make the next exec() call invoke its callback with the given result. */
function execYields(err: Error | null, stdout: string, stderr = "") {
  execMock.mockImplementationOnce((_cmd: string, _opts: unknown, cb: (e: Error | null, o: string, s: string) => void) => cb(err, stdout, stderr));
}

/** Temporarily override process.platform; returns a restore function. */
function stubPlatform(platform: NodeJS.Platform) {
  const original = Object.getOwnPropertyDescriptor(process, "platform")!;
  Object.defineProperty(process, "platform", { configurable: true, value: platform });
  return () => Object.defineProperty(process, "platform", original);
}

beforeEach(() => execMock.mockReset());

describe("delay", () => {
  it("returns a promise that resolves to void", async () => {
    const p = delay(0);
    expect(p).toBeInstanceOf(Promise);
    expect(await p).toBeUndefined();
  });
});

describe("getCredentialsFromLockfileContent", () => {
  it("should parse valid lockfile content", () => {
    const result = getCredentialsFromLockfileContent("LeagueClient:1234:5678:my-password:https");
    expect(result).toEqual({ port: 5678, password: "my-password" });
  });

  it("should parse lockfile with password containing colons", () => {
    const result = getCredentialsFromLockfileContent("LeagueClient:1234:5678:pass:word:https");
    expect(result).toEqual({ port: 5678, password: "pass:word" });
  });

  it("should parse lockfile with special characters in password", () => {
    const result = getCredentialsFromLockfileContent("LeagueClient:1234:5678:p@ss-w0rd!:https");
    expect(result).toEqual({ port: 5678, password: "p@ss-w0rd!" });
  });

  it("should parse lockfile with unicode in password", () => {
    const result = getCredentialsFromLockfileContent("LeagueClient:1234:5678:pässwörd:https");
    expect(result).toEqual({ port: 5678, password: "pässwörd" });
  });

  it("does not leak the lockfile content (password) in the error message", () => {
    // Port 0 passes the regex but is falsy, hitting the port/password failure branch. The thrown
    // message must not echo the lockfile content, which carries the password.
    expect(() => getCredentialsFromLockfileContent("LeagueClient:1234:0:s3cret-pw:https"))
      .toThrow(/Could not retrieve port and password from lockfile\.$/);
    expect(() => getCredentialsFromLockfileContent("LeagueClient:1234:0:s3cret-pw:https"))
      .not.toThrow(/s3cret-pw/);
  });

  it("should throw on invalid lockfile schema", () => {
    const invalidLockfiles = [
      "LeagueClient:port:password:https",
      "LeagueClient:1234:5678:https",
      "LeagueClient:1234:5678:password:http",
      "League:1234:5678:password:https",
      "LeagueClient:abc:def:password:https",
      "LeagueClient:1234:5678::https",
      "LeagueClient:1234:5678:password",
      "",
      "1234:5678:password:https",
    ];

    invalidLockfiles.forEach(lockfile => {
      expect(() => getCredentialsFromLockfileContent(lockfile)).toThrow();
    });
  });
});

describe("getLeagueClientUxProcesses", () => {
  it("rejects when the command exits non-zero", async () => {
    execYields(new Error("exec failed"), "");
    await expect(getLeagueClientUxProcesses()).rejects.toThrow(/Could not retrieve LeagueClientUx process ids/);
  });

  it("parses process ids from stdout", async () => {
    execYields(null, "1234\r\n5678\r\n");
    await expect(getLeagueClientUxProcesses()).resolves.toEqual([1234, 5678]);
  });

  it("returns an empty array when no processes are running", async () => {
    execYields(null, "");
    await expect(getLeagueClientUxProcesses()).resolves.toEqual([]);
  });

  it("ignores non-numeric / blank lines", async () => {
    execYields(null, "1234\n\nnot-a-pid\n5678");
    await expect(getLeagueClientUxProcesses()).resolves.toEqual([1234, 5678]);
  });

  // Regression guard: PowerShell writes non-fatal progress/warnings to stderr; a zero exit with
  // usable stdout must still resolve and not reject on stderr alone.
  it("tolerates non-fatal stderr and still resolves", async () => {
    execYields(null, "4242\n", "WARNING: progress output");
    await expect(getLeagueClientUxProcesses()).resolves.toEqual([4242]);
  });
});

describe("getCredentialsByProcessId", () => {
  const commandLine = "LeagueClientUx.exe --app-port=55000 --remoting-auth-token=abc-DEF_123 --other";

  it("extracts port and password from the command line", async () => {
    execYields(null, commandLine);
    await expect(getCredentialsByProcessId(42)).resolves.toEqual({ processId: 42, port: 55000, password: "abc-DEF_123" });
  });

  it("rejects (surfacing stderr) when the command exits non-zero", async () => {
    execYields(new Error("exec failed"), "", "some stderr");
    await expect(getCredentialsByProcessId(42)).rejects.toThrow(/Could not retrieve command line of process with PID 42\. some stderr/);
  });

  it("rejects with 'not found' when stdout is empty", async () => {
    execYields(null, "");
    await expect(getCredentialsByProcessId(42)).rejects.toThrow(/Process with PID 42 not found/);
  });

  it("throws when the command line lacks port/password", async () => {
    execYields(null, "LeagueClientUx.exe --no-relevant-flags");
    await expect(getCredentialsByProcessId(42)).rejects.toThrow(/could not retrieve port and password/);
  });

  // Regression guard: non-fatal stderr alongside usable stdout must still resolve.
  it("tolerates non-fatal stderr and still resolves", async () => {
    execYields(null, commandLine, "WARNING: progress output");
    await expect(getCredentialsByProcessId(42)).resolves.toEqual({ processId: 42, port: 55000, password: "abc-DEF_123" });
  });
});

describe("getCredentials", () => {
  let restorePlatform: (() => void) | undefined;
  afterEach(() => { restorePlatform?.(); restorePlatform = undefined; });

  it("process strategy: resolves the credentials of the first LeagueClientUx process", async () => {
    restorePlatform = stubPlatform("win32");
    execYields(null, "1111\n2222\n"); // getLeagueClientUxProcesses
    execYields(null, "Ux.exe --app-port=5000 --remoting-auth-token=tok-1"); // getCredentialsByProcessId(1111)
    await expect(getCredentials("process")).resolves.toEqual({ processId: 1111, port: 5000, password: "tok-1" });
  });

  it("process strategy: throws when no LeagueClientUx process is found", async () => {
    restorePlatform = stubPlatform("win32");
    execYields(null, ""); // no pids
    await expect(getCredentials("process")).rejects.toThrow(/Could not find process 'LeagueClientUx'/);
  });

  it("process strategy: rejects on an unsupported platform without running any command", async () => {
    restorePlatform = stubPlatform("linux");
    await expect(getCredentials("process")).rejects.toThrow(/not supported on this platform/);
    expect(execMock).not.toHaveBeenCalled();
  });

  it("lockfile strategy: parses provided lockfile content", async () => {
    await expect(getCredentials("lockfile", "LeagueClient:1234:5678:pw:https")).resolves.toEqual({ port: 5678, password: "pw" });
  });

  it("lockfile strategy: throws when the lockfile argument is missing", async () => {
    await expect(getCredentials("lockfile")).rejects.toThrow(/not provided or has an invalid type/);
  });
});
