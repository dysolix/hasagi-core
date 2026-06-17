import { describe, beforeAll, beforeEach, afterAll, it, expect, vi } from "vitest";
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

// Listener bookkeeping (path/type filtering, dispatch, subscribe/unsubscribe frames, remove-all) is
// covered deterministically by the mocked unit tests in tests/unit/client.test.ts, and the WebSocket
// handshake itself is proven by connection.test.ts. The only thing left that needs a *real* socket is
// that subscribing/unsubscribing actually round-trips frames to a live LCU without tearing down the
// connection — so this file keeps a single smoke test for exactly that.
describe("WebSocket Event Tests", () => {
  it("subscribes and unsubscribes a listener over the live WebSocket without dropping the connection", async () => {
    const callback = vi.fn();

    client.addLCUEventListener({ path: "/lol-summoner/v1/current-summoner", callback });
    await new Promise(resolve => setTimeout(resolve, 100)); // let the subscribe frame round-trip

    expect(client.removeLCUEventListener(callback)).toBe(true);
    expect(client.isConnected).toBe(true);
  });
});
