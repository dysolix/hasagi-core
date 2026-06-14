import { describe, it, expect } from "vitest";
import { AxiosError } from "axios";
import { RequestError, LCUError, NotConnectedError } from "../../src/errors";

describe("RequestError", () => {
  it("should handle ECONNREFUSED error", () => {
    const axiosError = new AxiosError("Connection refused");
    axiosError.code = "ECONNREFUSED";
    // @ts-ignore - testing internal error handling
    axiosError.response = undefined;

    const error = new RequestError(axiosError);

    expect(error.message).toBe("Can't reach League of Legends client (ECONNREFUSED).");
    expect(error.errorCode).toBe("ECONNREFUSED");
  });

  it("should handle generic error codes", () => {
    const axiosError = new AxiosError("Network error");
    axiosError.code = "ENOTFOUND";
    // @ts-ignore
    axiosError.response = undefined;

    const error = new RequestError(axiosError);

    expect(error.message).toBe("Request failed with error code ENOTFOUND.");
    expect(error.errorCode).toBe("ENOTFOUND");
  });

  it("should handle errors without code", () => {
    const axiosError = new AxiosError("Unknown error");
    // @ts-ignore
    axiosError.code = undefined;
    // @ts-ignore
    axiosError.response = undefined;

    const error = new RequestError(axiosError);

    expect(error.message).toBe("An unknown error occurred during the request.");
    expect(error.errorCode).toBeUndefined();
  });

  it("should preserve error cause", () => {
    const axiosError = new AxiosError("Connection refused");
    axiosError.code = "ECONNREFUSED";
    // @ts-ignore
    axiosError.response = undefined;

    const error = new RequestError(axiosError);

    expect(error.cause).toBe(axiosError);
  });

  it("should handle non-Axios errors", () => {
    const genericError = new Error("Some random error");

    const error = new RequestError(genericError);

    expect(error.message).toBe("An unknown error occurred during the request.");
  });
});

describe("LCUError", () => {
  it("should parse error response with code and message", () => {
    const axiosError = new AxiosError("Bad Request") as AxiosError;
    axiosError.response = {
      status: 400,
      statusText: "Bad Request",
      headers: {},
      config: {} as any,
      data: {
        errorCode: "INVALID_SUMMONER_ID",
        message: "Summoner not found",
        implementationDetails: "Summoner with the specified ID does not exist",
      },
    };

    const error = new LCUError(axiosError);

    expect(error.statusCode).toBe(400);
    expect(error.errorCode).toBe("INVALID_SUMMONER_ID");
    expect(error.implementationDetails).toBe("Summoner with the specified ID does not exist");
    expect(error.message).toContain("[400]");
    expect(error.message).toContain("INVALID_SUMMONER_ID");
    expect(error.message).toContain("Summoner not found");
  });

  it("should handle response without error details", () => {
    const axiosError = new AxiosError("Server Error") as AxiosError;
    axiosError.response = {
      status: 500,
      statusText: "Internal Server Error",
      headers: {},
      config: {} as any,
      data: {},
    };

    const error = new LCUError(axiosError);

    expect(error.statusCode).toBe(500);
    expect(error.errorCode).toBeNull();
    expect(error.message).toContain("500");
    expect(error.message).toContain("did not provide additional data");
  });

  it("should handle various HTTP status codes", () => {
    const statusCodes = [400, 401, 403, 404, 500, 502, 503];

    statusCodes.forEach(status => {
      const axiosError = new AxiosError("Error") as AxiosError;
      axiosError.response = {
        status,
        statusText: "Error",
        headers: {},
        config: {} as any,
        data: {},
      };

      const error = new LCUError(axiosError);

      expect(error.statusCode).toBe(status);
    });
  });

  it("should preserve error cause", () => {
    const axiosError = new AxiosError("Bad Request") as AxiosError;
    axiosError.response = {
      status: 400,
      statusText: "Bad Request",
      headers: {},
      config: {} as any,
      data: { errorCode: "TEST_ERROR", message: "Test" },
    };

    const error = new LCUError(axiosError);

    expect(error.cause).toBe(axiosError);
  });

  it("should handle malformed response data", () => {
    const axiosError = new AxiosError("Bad Request") as AxiosError;
    axiosError.response = {
      status: 400,
      statusText: "Bad Request",
      headers: {},
      config: {} as any,
      data: null,
    };

    const error = new LCUError(axiosError);

    expect(error.statusCode).toBe(400);
    expect(error.errorCode).toBeNull();
  });
});

describe("NotConnectedError", () => {
  it("should have correct error message", () => {
    const error = new NotConnectedError();

    expect(error.message).toBe("Hasagi is not connected to the League of Legends client.");
  });

  it("should be an instance of Error", () => {
    const error = new NotConnectedError();

    expect(error).toBeInstanceOf(Error);
  });
});
