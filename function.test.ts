import {
  lengthOfString,
  palindrome,
  isSet,
  sqrt,
  sumArray,
  fetchUserData,
  fibonacci,
} from "./function";
import { describe, expect, test } from "vitest";

const user = {
  id: 5,
  name: "Chelsey Dietrich",
  username: "Kamren",
  email: "Lucio_Hettinger@annie.ca",
  address: {
    street: "Skiles Walks",
    suite: "Suite 351",
    city: "Roscoeview",
    zipcode: "33263",
    geo: {
      lat: "-31.8129",
      lng: "62.5342",
    },
  },
  phone: "(254)954-1289",
  website: "demarco.info",
  company: {
    name: "Keebler LLC",
    catchPhrase: "User-centric fault-tolerant solution",
    bs: "revolutionize end-to-end systems",
  },
};

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
    expect(result2).toStrictEqual(Error("number low or equal to zero"));
    expect(result1).toBe(2);
  });
  test("sum of numbers in array", () => {
    const array = [1, 4, 3, 2];
    const total = 10;
    const result = sumArray(array);
    expect(result).toEqual(total);
  });
  test("sum bigger than number", () => {
    const array = [1, 4, 3, 2];
    const result = sumArray(array);
    expect(result).toBeGreaterThan(9);
  });
  test("user details", async () => {
    const id1: number = 5;
    const id2: number = 150;
    const result1 = await fetchUserData(id1);
    const result2 = await fetchUserData(id2);
    expect(result1).toEqual(user);
    expect(result2).toStrictEqual(Error(`user can't found`));
  });
  test("is fibonacci", () => {
    const series1: number[] = [0, 1, 1, 2, 3, 5];
    const series2: number[] = [0, 1, 4, 2, 3, 5];
    const series3: number[] = [0, 1];
    const result1 = fibonacci(series1);
    const result2 = fibonacci(series2);
    const result3 = fibonacci(series3);
    expect(result1).toBe(8);
    expect(result2).toStrictEqual(Error(`is not a fibonacci series`));
    expect(result3).toStrictEqual(Error(`is not a fibonacci series`));
  });
});
