import { lengthOfString } from "./function";
import { describe, expect, test } from "vitest";

describe("function", () => {
  test("length of string", () => {
    const string = "sun";
    const result = lengthOfString(string);
    expect(result).toBe(3);
  });
});
