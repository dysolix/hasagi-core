import { describe, it, expect } from "vitest";
import { delay, getCredentialsFromLockfileContent } from "../../src/util";

describe("Utility Functions", () => {
  describe("delay", () => {
    it("should delay execution by specified milliseconds", async () => {
      const start = performance.now();
      await delay(100);
      const elapsed = performance.now() - start;

      // Allow 10ms tolerance for timing variance
      expect(elapsed).toBeGreaterThanOrEqual(90);
      expect(elapsed).toBeLessThan(200);
    });

    it("should resolve to void", async () => {
      const result = await delay(10);
      expect(result).toBeUndefined();
    });

    it("should work with zero delay", async () => {
      const start = performance.now();
      await delay(0);
      const elapsed = performance.now() - start;

      expect(elapsed).toBeLessThan(50);
    });

    it("should support chaining", async () => {
      const start = performance.now();
      await delay(50);
      await delay(50);
      const elapsed = performance.now() - start;

      expect(elapsed).toBeGreaterThanOrEqual(90);
    });

    it("should return a promise", () => {
      const result = delay(10);
      expect(result).toBeInstanceOf(Promise);
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

  describe("Port extraction regex", () => {
    // Testing the regex pattern used to extract port from command line
    const portRegex = /--app-port=([0-9]*)/;

    it("should extract port from command line", () => {
      const commandLine = 'some.exe --app-port=12345 --other-flag value';
      const match = commandLine.match(portRegex)?.[1];

      expect(match).toBe("12345");
    });

    it("should handle port at different positions", () => {
      const commandLines = [
        "--app-port=80 --other",
        "--other --app-port=8080",
        "prefix --app-port=3000 suffix",
      ];

      commandLines.forEach(cl => {
        const match = cl.match(portRegex)?.[1];
        expect(match).toBeTruthy();
      });
    });

    it("should return empty string if not found", () => {
      const commandLine = 'some.exe --other-flag=value';
      const match = commandLine.match(portRegex)?.[1] ?? "";

      expect(match).toBe("");
    });
  });

  describe("Auth token regex", () => {
    // Testing the regex pattern used to extract auth token
    const authRegex = /--remoting-auth-token=([\w-]*)/;

    it("should extract auth token from command line", () => {
      const commandLine = 'some.exe --remoting-auth-token=abc-123-def-456 --other-flag';
      const match = commandLine.match(authRegex)?.[1];

      expect(match).toBe("abc-123-def-456");
    });

    it("should handle tokens with alphanumeric and dashes", () => {
      const tokens = [
        "simple123",
        "with-dashes-123",
        "UPPERCASE_MIXED-lower",
        "a",
        "123",
      ];

      tokens.forEach(token => {
        const commandLine = `--remoting-auth-token=${token}`;
        const match = commandLine.match(authRegex)?.[1];
        expect(match).toBe(token);
      });
    });

    it("should return empty string if not found", () => {
      const commandLine = 'some.exe --other-flag=value';
      const match = commandLine.match(authRegex)?.[1] ?? "";

      expect(match).toBe("");
    });
  });
});
