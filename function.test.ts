import { lengthOfString, palindrome, isSet, sqrt } from "./function";
import { describe, expect, test } from "vitest";

describe("function", () => {
  test("length of string", () => {
    const string: string = "sun";
    const result = lengthOfString(string);
    expect(result).toBe(3);
  });
  test("is palindrome true", () => {
    const string1: string = "suous";
    const string2: string = "spus";
    const result1 = palindrome(string1);
    const result2 = palindrome(string2);
    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });
  test("is set", () => {
    const array: number[] = [1, 4, 3, 2];
    const arrayToCompare: number[] = [1, 2, 3, 4];
    const result = isSet(array);
    expect(result).toEqual(arrayToCompare);
  });
  test("is sqrt", () => {
    const number1: number = 4;
    const number2: number = -4;
    const result1 = sqrt(number1);
    const result2 = sqrt(number2);
    expect(result1).toBe(2);
    expect(result2).toStrictEqual(Error("number low or equal to zero"));
  });
});
