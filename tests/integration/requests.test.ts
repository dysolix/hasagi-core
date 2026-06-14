import { describe, beforeAll, beforeEach, afterAll, it, expect } from "vitest";
import { HasagiClient } from "../../src/index";

let client!: HasagiClient;
let connected = false;

beforeAll(async () => {
  client = new HasagiClient();
  try {
    await client.connect({
      authenticationStrategy: "process",
      useWebSocket: true,
      maxConnectionAttempts: 1,
    });
    connected = true;
  } catch {
    // League client not running
  }
});

beforeEach((ctx) => {
  if (!connected) ctx.skip();
});

afterAll(() => {
  if (connected) client.disconnect();
});

describe("HTTP Request Tests", () => {
  it("should fetch current summoner data", async () => {
    const summoner = await client.request("get", "/lol-summoner/v1/current-summoner");
    expect(summoner).toBeDefined();
    expect(summoner).toHaveProperty("summonerId");
    expect(typeof summoner.summonerId).toBe("number");
  });

  it("should handle request with retry options", async () => {
    const summoner = await client.request("get", "/lol-summoner/v1/current-summoner", {
      retryOptions: {
        maxRetries: 2,
        retryDelay: 100,
      },
    });
    expect(summoner).toBeDefined();
    expect(summoner).toHaveProperty("summonerId");
  });

  it("should handle 404 errors gracefully", async () => {
    await expect(
      client.request("get", "/invalid/endpoint" as any)
    ).rejects.toThrow();
  });

  it("should build a typed request function", async () => {
    const getSummoner = client.buildRequest("get", "/lol-summoner/v1/current-summoner");
    const result = await getSummoner();
    expect(result).toBeDefined();
    expect(result).toHaveProperty("summonerId");
  });
});
