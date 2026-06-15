import { describe, beforeAll, beforeEach, afterAll, it, expect } from "vitest";
import { HasagiClient } from "../../src/index";

let client!: HasagiClient;
let connected = false;

beforeAll(async () => {
  client = new HasagiClient();
  try {
    await client.connect({
      authenticationStrategy: "process",
      // This file holds the suite's single real REST request, so we skip the readiness GET and the
      // WebSocket handshake here — credential discovery + the request below are all we need.
      useWebSocket: false,
      readinessCheck: false,
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
  // Request building, retries, buildRequest, polling, and error/404 handling are covered by the
  // mocked unit tests in tests/unit/client.test.ts. This is the ONLY real REST request in the
  // entire integration suite — a single authenticated round-trip that confirms credential
  // discovery, the HTTPS agent/certificate, auth, and the LCU responding all work end-to-end.
  // The other integration files prove connectivity via the WebSocket handshake without REST calls.
  it("should fetch current summoner data", async () => {
    const summoner = await client.request("get", "/lol-summoner/v1/current-summoner", {
      retryOptions: { maxRetries: 3, retryDelay: 250 },
    });
    expect(summoner).toBeDefined();
    expect(summoner).toHaveProperty("summonerId");
    expect(typeof summoner.summonerId).toBe("number");
  });
});
