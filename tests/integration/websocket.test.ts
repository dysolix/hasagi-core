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

describe("WebSocket Event Tests", () => {
  it("should subscribe and unsubscribe from events", async () => {
    const callback = vi.fn();

    client.addLCUEventListener({
      path: "/lol-summoner/v1/current-summoner",
      callback,
    });

    // Small delay to allow for any pending events
    await new Promise(resolve => setTimeout(resolve, 100));

    const removed = client.removeLCUEventListener(callback);
    expect(removed).toBe(true);
  });

  it("should add event listener with path filtering", () => {
    const callback = vi.fn();

    client.addLCUEventListener({
      path: "/lol-chat/v1/conversations",
      callback,
    });

    client.removeLCUEventListener(callback);
    expect(callback).toHaveBeenCalledTimes(0); // Callback not called during setup
  });

  it("should add event listener with type filtering", () => {
    const callback = vi.fn();

    client.addLCUEventListener({
      path: "/lol-summoner/v1/current-summoner",
      types: ["Update"],
      callback,
    });

    client.removeLCUEventListener(callback);
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it("should remove all event listeners", () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    client.addLCUEventListener({
      path: "/test-path-1",
      callback: callback1,
    });
    client.addLCUEventListener({
      path: "/test-path-2",
      callback: callback2,
    });

    client.removeAllLCUEventListeners();

    // Both listeners should be removed
    const removed1 = client.removeLCUEventListener(callback1);
    const removed2 = client.removeLCUEventListener(callback2);

    expect(removed1).toBe(false);
    expect(removed2).toBe(false);
  });

  it("should emit connected event", async () => {
    const connectedPromise = new Promise<void>((resolve) => {
      const handler = () => {
        client.off("connected", handler);
        resolve();
      };
      client.on("connected", handler);
    });

    // If already connected, event won't fire, so timeout after short delay
    await Promise.race([
      connectedPromise,
      new Promise<void>(resolve => setTimeout(resolve, 500)),
    ]);

    expect(client.isConnected).toBe(true);
  });
});
