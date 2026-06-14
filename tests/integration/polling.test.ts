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

describe("Polling Tests", () => {
  it("should poll endpoint with correct number of executions", async () => {
    let executionCount = 0;
    const maxExecutions = 3;

    await client.poll(
      "get",
      "/lol-summoner/v1/current-summoner",
      {
        intervalMs: 50,
        maxExecutions,
        onResponse: () => {
          executionCount++;
          return executionCount >= maxExecutions;
        },
      }
    );

    expect(executionCount).toBe(maxExecutions);
  });

  it("should poll and detect distinct responses", async () => {
    let distinctResponseCount = 0;

    await client.poll(
      "get",
      "/lol-summoner/v1/current-summoner",
      {
        intervalMs: 50,
        maxExecutions: 2,
        onDistinctResponse: () => {
          distinctResponseCount++;
          return distinctResponseCount >= 1;
        },
      }
    );

    expect(distinctResponseCount).toBeGreaterThanOrEqual(1);
  });

  it("should handle poll errors gracefully", async () => {
    let errorCount = 0;

    await client.poll(
      "get",
      "/invalid/polling/endpoint" as any,
      {
        intervalMs: 50,
        maxExecutions: 2,
        onError: () => {
          errorCount++;
          return errorCount >= 1; // Stop after first error
        },
      },
      {}
    );

    expect(errorCount).toBeGreaterThanOrEqual(1);
  });

  it("should poll with default max executions", async () => {
    let executionCount = 0;

    await client.poll(
      "get",
      "/lol-summoner/v1/current-summoner",
      {
        intervalMs: 50,
        onResponse: () => {
          executionCount++;
          return executionCount >= 2; // Stop early
        },
      }
    );

    expect(executionCount).toBe(2);
  });
});
