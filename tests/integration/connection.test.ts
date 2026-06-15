import { describe, beforeAll, afterAll, it, expect, beforeEach } from "vitest";
import { HasagiClient } from "../../src/index";

let client!: HasagiClient;
let connected = false;

beforeAll(async () => {
  client = new HasagiClient();
  try {
    await client.connect({
      authenticationStrategy: "process",
      useWebSocket: true,
      // Connectivity is proven by the WebSocket handshake; skip the readiness GET to avoid a REST call.
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

describe("Connection Tests", () => {
  it("should be connected to League client", () => {
    expect(client.isConnected).toBe(true);
  });

  it("should have valid port and password", () => {
    expect(client.getPort()).toBeGreaterThan(0);
    expect(client.getPassword()).toBeTruthy();
  });

  it("should have a valid basic auth token", () => {
    const token = client.getBasicAuthToken();
    expect(token).toBeTruthy();
    expect(token).toMatch(/^[A-Za-z0-9+/=]+$/);
  });

  it("should be able to retrieve host with authentication", () => {
    const hostWithAuth = client.getHostWithAuthentication();
    expect(hostWithAuth).toBeTruthy();
    expect(hostWithAuth).toContain("riot:");
    expect(hostWithAuth).toContain("@127.0.0.1");
  });
});
