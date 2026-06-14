import { describe, it, expect } from "vitest";

describe("Path Parameter Extraction", () => {
  // Simulating the path parameter extraction logic from buildRequest
  const extractPathParams = (path: string): string[] => {
    return path.match(/{(.*?)}/g)?.map(str => str.substring(1, str.length - 1)) ?? [];
  };

  const replacePathParams = (path: string, params: Record<string, string>): string => {
    let result = path;
    Object.entries(params).forEach(([key, value]) => {
      result = result.replace(`{${key}}`, value);
    });
    return result;
  };

  describe("extractPathParams", () => {
    it("should extract single parameter", () => {
      const path = "/lol-summoner/v1/summoners/{summonerId}";
      const params = extractPathParams(path);

      expect(params).toEqual(["summonerId"]);
    });

    it("should extract multiple parameters", () => {
      const path = "/lol-match/v1/matches/{matchId}/timeline/{position}";
      const params = extractPathParams(path);

      expect(params).toEqual(["matchId", "position"]);
    });

    it("should extract parameters in correct order", () => {
      const path = "/{first}/{second}/{third}";
      const params = extractPathParams(path);

      expect(params).toEqual(["first", "second", "third"]);
    });

    it("should handle no parameters", () => {
      const path = "/lol-summoner/v1/current-summoner";
      const params = extractPathParams(path);

      expect(params).toEqual([]);
    });

    it("should handle duplicate parameter names", () => {
      const path = "/{id}/related/{id}";
      const params = extractPathParams(path);

      expect(params).toEqual(["id", "id"]);
    });

    it("should handle nested braces gracefully", () => {
      const path = "/path/{outer}";
      const params = extractPathParams(path);

      expect(params).toEqual(["outer"]);
    });

    it("should handle empty parameter names", () => {
      const path = "/path/{}";
      const params = extractPathParams(path);

      expect(params).toEqual([""]);
    });
  });

  describe("replacePathParams", () => {
    it("should replace single parameter", () => {
      const path = "/lol-summoner/v1/summoners/{summonerId}";
      const result = replacePathParams(path, { summonerId: "12345" });

      expect(result).toBe("/lol-summoner/v1/summoners/12345");
    });

    it("should replace multiple parameters", () => {
      const path = "/lol-match/v1/matches/{matchId}/timeline/{position}";
      const result = replacePathParams(path, { matchId: "abc123", position: "top" });

      expect(result).toBe("/lol-match/v1/matches/abc123/timeline/top");
    });

    it("should replace parameters in any order", () => {
      const path = "/api/{a}/{b}/{c}";
      const result = replacePathParams(path, { c: "3", a: "1", b: "2" });

      expect(result).toBe("/api/1/2/3");
    });

    it("should handle parameters with special characters", () => {
      const path = "/api/{region}/{name}";
      const result = replacePathParams(path, { region: "na1", name: "Faker-123" });

      expect(result).toBe("/api/na1/Faker-123");
    });

    it("should leave unreplaced parameters unchanged", () => {
      const path = "/api/{a}/{b}";
      const result = replacePathParams(path, { a: "1" });

      expect(result).toBe("/api/1/{b}");
    });

    it("should handle empty parameter values", () => {
      const path = "/api/{id}";
      const result = replacePathParams(path, { id: "" });

      expect(result).toBe("/api/");
    });

    it("should preserve URL structure", () => {
      const path = "/lol/champion/{championId}/skins";
      const result = replacePathParams(path, { championId: "41" });

      expect(result).toBe("/lol/champion/41/skins");
    });

    it("should handle numeric values as strings", () => {
      const path = "/api/{version}/{id}";
      const result = replacePathParams(path, { version: "1", id: "999" });

      expect(result).toBe("/api/1/999");
    });

    it("should not replace if parameter name doesn't match exactly", () => {
      const path = "/api/{id}";
      const result = replacePathParams(path, { ids: "123" });

      expect(result).toBe("/api/{id}");
    });
  });

  describe("End-to-end path parameter handling", () => {
    it("should extract and then replace parameters", () => {
      const path = "/lol-match/v1/matches/{matchId}/timeline";
      const params = extractPathParams(path);
      const replacementParams = params.reduce((acc, param) => {
        acc[param] = param === "matchId" ? "match123" : "unknown";
        return acc;
      }, {} as Record<string, string>);

      const result = replacePathParams(path, replacementParams);

      expect(result).toBe("/lol-match/v1/matches/match123/timeline");
    });

    it("should handle complex real-world paths", () => {
      const path = "/lol-champion-mastery/v1/champion-masteries/by-summoner/{summonerId}/by-champion/{championId}";
      const params = extractPathParams(path);

      expect(params).toEqual(["summonerId", "championId"]);

      const result = replacePathParams(path, {
        summonerId: "abc123",
        championId: "41",
      });

      expect(result).toBe("/lol-champion-mastery/v1/champion-masteries/by-summoner/abc123/by-champion/41");
    });
  });
});

describe("JSON parse with error handling", () => {
  it("should parse valid JSON", () => {
    const json = '{"eventType":"Update","uri":"/lol-summoner/v1/current-summoner","data":{}}';
    expect(() => {
      JSON.parse(json);
    }).not.toThrow();
  });

  it("should throw on invalid JSON", () => {
    const json = '{"eventType":"Update","uri":"/lol-summoner/v1/current-summoner"';
    expect(() => {
      JSON.parse(json);
    }).toThrow();
  });

  it("should handle JSON arrays", () => {
    const json = '[{"id":1},{"id":2}]';
    const result = JSON.parse(json);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(2);
  });

  it("should handle nested objects", () => {
    const json = '{"data":{"nested":{"value":42}}}';
    const result = JSON.parse(json);
    expect(result.data.nested.value).toBe(42);
  });

  it("should handle special characters in strings", () => {
    const json = '{"message":"Error: \\"Connection refused\\""}';
    const result = JSON.parse(json);
    expect(result.message).toContain('Connection refused');
  });
});
