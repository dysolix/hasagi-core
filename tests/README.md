# Tests

This directory contains both unit and integration tests for `@hasagi/core`.

## Test Types

### Unit Tests (`/tests/unit/`)

Unit tests can run without external dependencies and cover isolated functionality:

- **errors.test.ts** — Error class construction and message formatting
  - RequestError handling of various Axios error codes
  - LCUError parsing of HTTP responses
  - NotConnectedError message validation
  
- **util.test.ts** — Utility functions and regex patterns
  - `delay()` function timing and promise behavior
  - Lockfile format validation and parsing regex
  - Port and auth token extraction from command lines (with `exec` mocked)
  - Path parameter extraction (`{id}` → `["id"]`) and replacement in URLs

- **client.test.ts** — `HasagiClient` behavior with `axios`/`ws` mocked (no League client required)
  - Request retry loop (success, retries, AggregateError, no-retry status codes, `defaultRetryOptions`)
  - Error mapping (`LCUError` vs `RequestError`) and the ECONNREFUSED disconnect short-circuit
  - `buildRequest` path/query/body handling and `transformParameters`/`transformResponse`
  - LCU event listener filtering (string/RegExp path, type, name), removal/unsubscribe, and throwing-listener isolation
  - `connect()` WebSocket open/error/timeout handling and fail-fast on non-transient errors
  - `poll()` execution count, distinct-response detection, error handling, and no trailing delay

### Integration Tests (`/tests/integration/`)

Integration tests require a running League of Legends client and test real API interactions.
To respect Riot's unofficial API, the suite makes a **single** real REST request in total
(`requests.test.ts`); the other files prove connectivity via the WebSocket handshake and never
hit a REST endpoint. Detailed request/poll/error behavior is covered by the mocked unit tests above.

- **connection.test.ts** — Connection establishment and credential validation (no REST calls)
- **requests.test.ts** — The single real authenticated round-trip to the LCU
- **websocket.test.ts** — WebSocket connection and event listener handling (no REST calls)

## Running Tests

**Run all tests** (unit + integration):
```bash
npm run test:all
```

**Run only unit tests** (no League client required):
```bash
npm run test:unit
```

**Run only integration tests** (requires running League client):
```bash
npm run test:integration
```

## Prerequisites

### Unit Tests
No external dependencies required. Run these to validate core logic without a League client.

### Integration Tests
- League of Legends client must be running on the system
- Client must be in a state where API endpoints are accessible
- Tests have a 30-second timeout to account for potential network delays

## Notes

- Tests use vitest as the test runner
- Integration tests create their own `HasagiClient` instances
- WebSocket tests subscribe to events but may not receive them during test execution depending on client activity
- Each test file is independent and can be run in isolation
