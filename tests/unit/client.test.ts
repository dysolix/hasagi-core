import { describe, it, expect, beforeEach, vi } from "vitest";
import { AxiosError } from "axios";
import HasagiClient, { request } from "../../src/client";
import { LCUError, RequestError, NotConnectedError } from "../../src/errors";

// Hoisted mock state: a single request fn shared by both the standalone `axios.request`
// and the instance created via `axios.create(...).request`, plus the fake WebSocket behavior.
const mocks = vi.hoisted(() => ({ request: vi.fn(), wsBehavior: "open" as "open" | "error" | "hang", getCredentials: vi.fn() }));
const mockRequest = mocks.request;

// Mock only getCredentials so we can drive the process/lockfile credential-acquisition retry loop;
// keep the real delay() (the loop awaits it — tests pass a tiny connectionAttemptDelay to stay fast).
vi.mock("../../src/util", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/util")>();
  return { ...actual, getCredentials: mocks.getCredentials };
});

vi.mock("axios", async (importOriginal) => {
  const actual = await importOriginal<typeof import("axios")>();
  return {
    ...actual,
    default: {
      ...actual.default,
      create: vi.fn(() => ({ request: mocks.request })),
      request: mocks.request,
    },
  };
});

// Controllable fake WebSocket so we can exercise the connect() open/error/timeout paths.

vi.mock("ws", () => {
  return {
    WebSocket: class {
      onopen: (() => void) | undefined;
      onclose: (() => void) | undefined;
      onmessage: ((ev: any) => void) | undefined;
      onerror: ((ev: any) => void) | undefined;
      close = vi.fn();
      constructor() {
        queueMicrotask(() => {
          if (mocks.wsBehavior === "open") this.onopen?.();
          else if (mocks.wsBehavior === "error") this.onerror?.({ error: new Error("boom") });
          // "hang": never settle
        });
      }
    },
  };
});

function lcuResponse(data: unknown, status = 200) {
  return { data, status, statusText: "OK", headers: {}, config: {} as any };
}

function lcuError(status: number, data: unknown) {
  return new AxiosError(
    `Request failed with status code ${status}`,
    "ERR_BAD_RESPONSE",
    {} as any,
    {},
    { status, data, statusText: "", headers: {} as any, config: {} as any },
  );
}

function networkError(code = "ECONNREFUSED") {
  return new AxiosError(`connect ${code}`, code, {} as any, {});
}

async function createConnectedClient(options?: { defaultRetryOptions?: any }) {
  const client = new HasagiClient(options);
  await client.connect({
    authenticationStrategy: "manual",
    credentials: { port: 12345, password: "test-password" },
    readinessCheck: false,
    useWebSocket: false,
  });
  return client;
}

beforeEach(() => {
  mockRequest.mockReset();
  mocks.getCredentials.mockReset();
  mocks.wsBehavior = "open";
});

describe("HasagiClient.request - retry loop", () => {
  it("returns response data on first success", async () => {
    const client = await createConnectedClient();
    mockRequest.mockResolvedValueOnce(lcuResponse({ foo: 1 }));

    const result = await client.request({ method: "get", url: "/x" });

    expect(result).toEqual({ foo: 1 });
    expect(mockRequest).toHaveBeenCalledTimes(1);
  });

  it("retries up to maxRetries and then succeeds", async () => {
    const client = await createConnectedClient();
    mockRequest
      .mockRejectedValueOnce(networkError())
      .mockResolvedValueOnce(lcuResponse("ok"));

    const result = await client.request({ url: "/x", retryOptions: { maxRetries: 1, retryDelay: 1 } });

    expect(result).toBe("ok");
    expect(mockRequest).toHaveBeenCalledTimes(2);
  });

  it("throws the single error when no retries are configured", async () => {
    const client = await createConnectedClient();
    mockRequest.mockRejectedValue(networkError());

    await expect(client.request({ url: "/x" })).rejects.toBeInstanceOf(RequestError);
    expect(mockRequest).toHaveBeenCalledTimes(1);
  });

  it("throws an AggregateError after exhausting all retries", async () => {
    const client = await createConnectedClient();
    // Non-ECONNREFUSED so the instance's disconnect short-circuit doesn't apply.
    mockRequest.mockRejectedValue(networkError("ETIMEDOUT"));

    await expect(client.request({ url: "/x", retryOptions: { maxRetries: 2, retryDelay: 1 } }))
      .rejects.toBeInstanceOf(AggregateError);
    expect(mockRequest).toHaveBeenCalledTimes(3);
  });

  it("throws the raw error and disconnects on ECONNREFUSED with no active WebSocket", async () => {
    const client = await createConnectedClient();
    mockRequest.mockRejectedValue(networkError("ECONNREFUSED"));

    await expect(client.request({ url: "/x", retryOptions: { maxRetries: 2, retryDelay: 1 } }))
      .rejects.toBeInstanceOf(RequestError);
    expect(client.isConnected).toBe(false);
    expect(mockRequest).toHaveBeenCalledTimes(3);
  });

  it("does not retry on a no-retry status code (400 by default)", async () => {
    const client = await createConnectedClient();
    mockRequest.mockRejectedValue(lcuError(400, {}));

    await expect(client.request({ url: "/x", retryOptions: { maxRetries: 5, retryDelay: 1 } }))
      .rejects.toBeInstanceOf(LCUError);
    expect(mockRequest).toHaveBeenCalledTimes(1);
  });

  it("honors defaultRetryOptions from the constructor", async () => {
    const client = await createConnectedClient({ defaultRetryOptions: { maxRetries: 2, retryDelay: 1 } });
    mockRequest.mockRejectedValue(networkError("ETIMEDOUT"));

    await expect(client.request({ url: "/x" })).rejects.toBeInstanceOf(AggregateError);
    expect(mockRequest).toHaveBeenCalledTimes(3);
  });
});

describe("HasagiClient.request - error mapping", () => {
  it("maps responses with a body to LCUError", async () => {
    const client = await createConnectedClient();
    mockRequest.mockRejectedValue(lcuError(404, { errorCode: "RPC_ERROR", message: "not found" }));

    try {
      await client.request({ url: "/x" });
      expect.unreachable("should have thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(LCUError);
      const lcu = err as LCUError;
      expect(lcu.statusCode).toBe(404);
      expect(lcu.errorCode).toBe("RPC_ERROR");
      expect(lcu.message).toContain("RPC_ERROR");
    }
  });

  it("maps responseless failures to RequestError", async () => {
    const client = await createConnectedClient();
    mockRequest.mockRejectedValue(networkError("ECONNREFUSED"));

    try {
      await client.request({ url: "/x" });
      expect.unreachable("should have thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(RequestError);
      expect((err as RequestError).errorCode).toBe("ECONNREFUSED");
    }
  });
});

describe("HasagiClient.buildRequest", () => {
  it("substitutes path parameters and sends query params for GET", async () => {
    const client = await createConnectedClient();
    mockRequest.mockResolvedValue(lcuResponse("r"));

    const fn = client.buildRequest("get", "/lol-x/{a}/{b}" as any);
    await (fn as any)("1", "2", { q: 1 });

    const cfg = mockRequest.mock.calls[0][0];
    expect(cfg.url).toBe("/lol-x/1/2");
    expect(cfg.method).toBe("get");
    expect(cfg.params).toEqual({ q: 1 });
    expect(cfg.data).toBeUndefined();
  });

  it("sends a body for non-GET methods", async () => {
    const client = await createConnectedClient();
    mockRequest.mockResolvedValue(lcuResponse("r"));

    const fn = client.buildRequest("post", "/lol-y/{id}" as any);
    await (fn as any)("99", { name: "x" });

    const cfg = mockRequest.mock.calls[0][0];
    expect(cfg.url).toBe("/lol-y/99");
    expect(cfg.method).toBe("post");
    expect(cfg.data).toEqual({ name: "x" });
    expect(cfg.params).toBeUndefined();
  });

  it("applies transformResponse", async () => {
    const client = await createConnectedClient();
    mockRequest.mockResolvedValue(lcuResponse("raw"));

    const fn = client.buildRequest("get", "/z" as any, { transformResponse: (r: any) => ({ wrapped: r }) });
    const res = await (fn as any)();

    expect(res).toEqual({ wrapped: "raw" });
  });

  it("applies transformParameters before substitution", async () => {
    const client = await createConnectedClient();
    mockRequest.mockResolvedValue(lcuResponse(null));

    const fn = client.buildRequest("get", "/p/{id}" as any, { transformParameters: (x: any) => [String(x * 2)] as any });
    await (fn as any)(5);

    expect(mockRequest.mock.calls[0][0].url).toBe("/p/10");
  });
});

describe("HasagiClient - LCU event listeners", () => {
  it("auto-subscribes OnJsonApiEvent when only a path is provided", async () => {
    const client = await createConnectedClient();
    client.addLCUEventListener({ path: "/lol-x", callback: () => {} });

    expect((client as any).subscribedEvents.has("OnJsonApiEvent")).toBe(true);
  });

  it("filters by string path", async () => {
    const client = await createConnectedClient();
    const cb = vi.fn();
    client.addLCUEventListener({ path: "/lol-gameflow/v1/session", callback: cb });

    (client as any).handleLCUEvent([8, "OnJsonApiEvent", { uri: "/lol-gameflow/v1/session", eventType: "Update", data: {} }]);
    (client as any).handleLCUEvent([8, "OnJsonApiEvent", { uri: "/other", eventType: "Update", data: {} }]);

    expect(cb).toHaveBeenCalledTimes(1);
  });

  it("filters by RegExp path", async () => {
    const client = await createConnectedClient();
    const cb = vi.fn();
    client.addLCUEventListener({ path: /\/lol-chat\/.*/, callback: cb });

    (client as any).handleLCUEvent([8, "OnJsonApiEvent", { uri: "/lol-chat/v1/me", eventType: "Update", data: {} }]);
    (client as any).handleLCUEvent([8, "OnJsonApiEvent", { uri: "/lol-summoner", eventType: "Update", data: {} }]);

    expect(cb).toHaveBeenCalledTimes(1);
  });

  it("filters by event type", async () => {
    const client = await createConnectedClient();
    const cb = vi.fn();
    client.addLCUEventListener({ path: "/x", types: ["Create"], callback: cb });

    (client as any).handleLCUEvent([8, "OnJsonApiEvent", { uri: "/x", eventType: "Update", data: {} }]);
    expect(cb).not.toHaveBeenCalled();

    (client as any).handleLCUEvent([8, "OnJsonApiEvent", { uri: "/x", eventType: "Create", data: {} }]);
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it("removes a listener by callback reference", async () => {
    const client = await createConnectedClient();
    const cb = vi.fn();
    client.addLCUEventListener({ path: "/x", callback: cb });

    expect(client.removeLCUEventListener(cb)).toBe(true);
    (client as any).handleLCUEvent([8, "OnJsonApiEvent", { uri: "/x", eventType: "Update", data: {} }]);
    expect(cb).not.toHaveBeenCalled();
  });

  it("isolates a throwing 'lcu-event' emitter listener from path/name listeners", async () => {
    const client = await createConnectedClient();
    const pathCb = vi.fn();
    client.on("lcu-event", () => { throw new Error("boom"); });
    client.addLCUEventListener({ path: "/x", callback: pathCb });

    expect(() =>
      (client as any).handleLCUEvent([8, "OnJsonApiEvent", { uri: "/x", eventType: "Update", data: {} }]),
    ).not.toThrow();
    expect(pathCb).toHaveBeenCalledTimes(1);
  });

  it("isolates a throwing listener so other listeners still run", async () => {
    const client = await createConnectedClient();
    const cb2 = vi.fn();
    client.addLCUEventListener({ path: "/x", callback: () => { throw new Error("boom"); } });
    client.addLCUEventListener({ path: "/x", callback: cb2 });

    expect(() =>
      (client as any).handleLCUEvent([8, "OnJsonApiEvent", { uri: "/x", eventType: "Update", data: {} }]),
    ).not.toThrow();
    expect(cb2).toHaveBeenCalledTimes(1);
  });

  it("dispatches to the listeners captured at event start even if a callback removes another", async () => {
    const client = await createConnectedClient();
    const cb2 = vi.fn();
    const cb1 = vi.fn(() => client.removeLCUEventListener(cb2));
    client.addLCUEventListener({ path: "/x", callback: cb1 });
    client.addLCUEventListener({ path: "/x", callback: cb2 });

    (client as any).handleLCUEvent([8, "OnJsonApiEvent", { uri: "/x", eventType: "Update", data: {} }]);

    // cb2 still fires for this event despite cb1 removing it mid-dispatch (snapshot semantics).
    expect(cb1).toHaveBeenCalledTimes(1);
    expect(cb2).toHaveBeenCalledTimes(1);
  });

  it("does not throw when the event payload is not an object", async () => {
    const client = await createConnectedClient();
    client.addLCUEventListener({ name: "OnJsonApiEvent", callback: () => {} });

    expect(() =>
      (client as any).handleLCUEvent([8, "OnJsonApiEvent", null]),
    ).not.toThrow();
  });

  it("removeAllLCUEventListeners clears subscribedEvents even while disconnected", async () => {
    const client = await createConnectedClient(); // useWebSocket: false -> subscriptions are queued
    client.addLCUEventListener({ name: "OnJsonApiEvent", callback: () => {} });
    client.addLCUEventListener({ name: "OnLcdsEvent" as any, callback: () => {} });
    expect((client as any).subscribedEvents.size).toBeGreaterThan(0);

    client.removeAllLCUEventListeners();
    expect((client as any).subscribedEvents.size).toBe(0);
  });

  it("unsubscribes only once the last listener for an event name is removed", async () => {
    const client = await createConnectedClient();
    const send = vi.fn();
    (client as any).webSocket = { send };

    const cb1 = vi.fn();
    const cb2 = vi.fn();
    client.addLCUEventListener({ name: "OnJsonApiEvent", callback: cb1 });
    client.addLCUEventListener({ name: "OnJsonApiEvent", callback: cb2 });

    const unsubscribeFrame = JSON.stringify([6, "OnJsonApiEvent"]);

    client.removeLCUEventListener(cb1);
    expect(send).not.toHaveBeenCalledWith(unsubscribeFrame);

    client.removeLCUEventListener(cb2);
    expect(send).toHaveBeenCalledWith(unsubscribeFrame);
  });
});

describe("HasagiClient.poll", () => {
  it("stops when onResponse returns true and respects maxExecutions", async () => {
    const client = await createConnectedClient();
    mockRequest.mockResolvedValue(lcuResponse({ v: 1 }));

    let count = 0;
    await client.poll("get", "/x" as any, {
      intervalMs: 1,
      maxExecutions: 5,
      onResponse: () => {
        count++;
        return count >= 2;
      },
    });

    expect(count).toBe(2);
    expect(mockRequest).toHaveBeenCalledTimes(2);
  });

  it("invokes onDistinctResponse only when the response changes", async () => {
    const client = await createConnectedClient();
    mockRequest
      .mockResolvedValueOnce(lcuResponse({ v: 1 }))
      .mockResolvedValueOnce(lcuResponse({ v: 1 }))
      .mockResolvedValueOnce(lcuResponse({ v: 2 }));

    const distinct: unknown[] = [];
    await client.poll("get", "/x" as any, {
      intervalMs: 1,
      maxExecutions: 3,
      onDistinctResponse: (r) => {
        distinct.push(r);
      },
    });

    expect(distinct).toEqual([{ v: 1 }, { v: 2 }]);
  });

  it("invokes onError on failure and can stop polling", async () => {
    const client = await createConnectedClient();
    mockRequest.mockRejectedValue(networkError("ETIMEDOUT"));

    let errors = 0;
    await client.poll("get", "/x" as any, {
      intervalMs: 1,
      maxExecutions: 3,
      onError: () => {
        errors++;
        return true;
      },
    });

    expect(errors).toBe(1);
    expect(mockRequest).toHaveBeenCalledTimes(1);
  });

  it("does not wait an extra interval after the final execution", async () => {
    const client = await createConnectedClient();
    mockRequest.mockResolvedValue(lcuResponse({ v: 1 }));

    const start = Date.now();
    await client.poll("get", "/x" as any, {
      intervalMs: 1000, // a trailing delay would make this take ~1s
      maxExecutions: 1,
      onResponse: () => {},
    });

    expect(Date.now() - start).toBeLessThan(200);
    expect(mockRequest).toHaveBeenCalledTimes(1);
  });
});

describe("HasagiClient.connect - fail-fast on non-transient errors", () => {
  it("rejects immediately for the 'process' strategy on an unsupported platform", async () => {
    const original = Object.getOwnPropertyDescriptor(process, "platform")!;
    Object.defineProperty(process, "platform", { value: "linux", configurable: true });
    try {
      const client = new HasagiClient();
      // Default maxConnectionAttempts is infinite; without fail-fast this would loop forever.
      await expect(client.connect({ authenticationStrategy: "process" }))
        .rejects.toThrow(/not supported on this platform/);
    } finally {
      Object.defineProperty(process, "platform", original);
    }
  });

  it("rejects immediately for the 'lockfile' strategy with a non-string lockfile", async () => {
    const client = new HasagiClient();
    await expect(client.connect({ authenticationStrategy: "lockfile", lockfile: undefined as any }))
      .rejects.toThrow(/lockfile/i);
  });
});

describe("HasagiClient - keep-alive agent lifecycle", () => {
  it("creates a keep-alive agent on connect and destroys it on disconnect", async () => {
    const client = await createConnectedClient();

    const agent = (client as any).httpsAgent;
    expect(agent).toBeTruthy();
    expect(agent.options?.keepAlive).toBe(true);

    const destroySpy = vi.spyOn(agent, "destroy");
    client.disconnect();

    expect(destroySpy).toHaveBeenCalled();
    expect((client as any).httpsAgent).toBeNull();
  });
});

describe("HasagiClient.connect - WebSocket handling", () => {
  it("resolves when the WebSocket opens", async () => {
    mocks.wsBehavior = "open";
    const client = new HasagiClient();

    await expect(client.connect({
      authenticationStrategy: "manual",
      credentials: { port: 1, password: "x" },
      readinessCheck: false,
    })).resolves.toBeUndefined();

    expect(client.isConnected).toBe(true);
  });

  it("re-runs onConnected (re-subscribe + emit) on a forced reconnect while still connected", async () => {
    mocks.wsBehavior = "open";
    const client = new HasagiClient();
    const opts = { authenticationStrategy: "manual" as const, credentials: { port: 1, password: "x" }, readinessCheck: false as const };

    await client.connect(opts);
    expect(client.isConnected).toBe(true);

    const onConnected = vi.fn();
    client.on("connected", onConnected);

    // connect() again without disconnecting first — onConnected must run again, not short-circuit.
    await client.connect(opts);

    expect(onConnected).toHaveBeenCalledTimes(1);
    expect(client.isConnected).toBe(true);
  });

  it("retries transient credential failures, then connects (emitting the right events)", async () => {
    mocks.wsBehavior = "open";
    mocks.getCredentials
      .mockRejectedValueOnce(new Error("client not running"))
      .mockRejectedValueOnce(new Error("client not running"))
      .mockResolvedValueOnce({ port: 1234, password: "pw" });

    const client = new HasagiClient();
    const connecting = vi.fn();
    const attemptFailed = vi.fn();
    client.on("connecting", connecting);
    client.on("connection-attempt-failed", attemptFailed);

    await client.connect({
      authenticationStrategy: "lockfile",
      lockfile: "lockfile-content",
      readinessCheck: false,
      connectionAttemptDelay: 1,
    });

    expect(client.isConnected).toBe(true);
    expect(mocks.getCredentials).toHaveBeenCalledTimes(3);
    expect(connecting).toHaveBeenCalledTimes(3);
    expect(attemptFailed).toHaveBeenCalledTimes(2);
  });

  it("throws after exhausting maxConnectionAttempts", async () => {
    mocks.getCredentials.mockRejectedValue(new Error("client not running"));

    const client = new HasagiClient();
    await expect(client.connect({
      authenticationStrategy: "lockfile",
      lockfile: "lockfile-content",
      maxConnectionAttempts: 2,
      connectionAttemptDelay: 1,
      readinessCheck: false,
    })).rejects.toThrow(/Could not connect/);

    expect(mocks.getCredentials).toHaveBeenCalledTimes(2);
    expect(client.isConnected).toBe(false);
  });

  it("leaves a clean disconnected state when the WebSocket fails", async () => {
    mocks.wsBehavior = "error";
    const client = new HasagiClient();

    await expect(client.connect({
      authenticationStrategy: "manual",
      credentials: { port: 1, password: "x" },
      readinessCheck: false,
    })).rejects.toThrow();

    expect(client.isConnected).toBe(false);
    expect((client as any).lcuAxiosInstance).toBeNull();
    expect((client as any).httpsAgent).toBeNull();
    // request() must now correctly report not-connected rather than using a stale axios instance.
    await expect(client.request({ url: "/x" })).rejects.toBeInstanceOf(NotConnectedError);
  });

  it("rejects (instead of hanging) when the WebSocket errors before opening", async () => {
    mocks.wsBehavior = "error";
    const client = new HasagiClient();

    await expect(client.connect({
      authenticationStrategy: "manual",
      credentials: { port: 1, password: "x" },
      readinessCheck: false,
    })).rejects.toThrow(/WebSocket connection to the League of Legends client failed/);
  });

  it("rejects with a timeout when the WebSocket never opens", async () => {
    mocks.wsBehavior = "hang";
    const client = new HasagiClient();

    await expect(client.connect({
      authenticationStrategy: "manual",
      credentials: { port: 1, password: "x" },
      readinessCheck: false,
      webSocketTimeoutMs: 50,
    })).rejects.toThrow(/timed out after 50ms/);
  });
});

describe("standalone request()", () => {
  it("builds the request with auth, baseURL, http adapter and the default agent", async () => {
    mockRequest.mockResolvedValueOnce(lcuResponse("ok"));

    const res = await request({ port: 1, password: "p" } as any, { method: "get", url: "/x" });

    expect(res).toBe("ok");
    const cfg = mockRequest.mock.calls[0][0];
    expect(cfg.baseURL).toBe("https://127.0.0.1:1");
    expect(cfg.auth).toEqual({ username: "riot", password: "p" });
    expect(cfg.adapter).toBe("http");
    expect(cfg.httpsAgent).toBeDefined();
  });

  it("honors a caller-supplied httpsAgent", async () => {
    mockRequest.mockResolvedValueOnce(lcuResponse("ok"));
    const customAgent = { custom: true } as any;

    await request({ port: 1, password: "p" } as any, { method: "get", url: "/x", httpsAgent: customAgent });

    expect(mockRequest.mock.calls[0][0].httpsAgent).toBe(customAgent);
  });

  it("does not mutate the caller's config object", async () => {
    mockRequest.mockResolvedValueOnce(lcuResponse("ok"));
    const config = { method: "post", url: "/x", data: { a: 1 } } as any;

    await request({ port: 1, password: "p" } as any, config);

    // The Content-Type header is injected on an internal copy, not the caller's object.
    expect(config.headers).toBeUndefined();
  });
});
