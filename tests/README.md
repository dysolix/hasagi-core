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
  - Port and auth token extraction from command lines
  
- **client-utils.test.ts** — Client-side utility functions
  - Path parameter extraction (`{id}` → `["id"]`)
  - Path parameter replacement in URLs
  - JSON parsing with error handling
  - URL reconstruction with real-world LCU endpoints

### Integration Tests (`/tests/integration/`)

Integration tests require a running League of Legends client and test real API interactions:

- **connection.test.ts** — Connection establishment and credential validation
- **requests.test.ts** — HTTP requests to LCU endpoints
- **websocket.test.ts** — WebSocket event subscriptions and handling
- **polling.test.ts** — Polling functionality with intervals and callbacks

## Running Tests

**Run all tests** (unit + integration):
```bash
npm test
```

**Run only unit tests** (no League client required):
```bash
npm run test:unit
```

**Run only integration tests** (requires running League client):
```bash
npm run test:integration
```

**Run tests in watch mode** (re-runs on file changes):
```bash
npm run test:watch
```

**Run specific test file**:
```bash
npm test -- errors.test.ts
```

## Test Execution Times

- **Unit tests:** ~450ms (51 tests, no external dependencies)
- **Integration tests:** ~1.6s (17 tests, requires running League client)
- **All tests:** ~1.6s (68 tests total, integration tests may skip if client unavailable)

## Prerequisites

### Unit Tests
No external dependencies required. Run these to validate core logic without a League client.

### Integration Tests
- League of Legends client must be running on the system
- Client must be in a state where API endpoints are accessible
- Tests have a 30-second timeout to account for potential network delays

## Notes

- Tests use [vitest](https://vitest.dev/) as the test runner
- Unit tests are fast (~100ms) and deterministic
- Integration tests create their own `HasagiClient` instances
- WebSocket tests subscribe to events but may not receive them during test execution depending on client activity
- Each test file is independent and can be run in isolation

