"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("function", () => {
    (0, vitest_1.test)("length of string", () => {
        const string = "sun";
        const result = (0, function_1.lengthOfString)(string);
        (0, vitest_1.expect)(result).toBe(3);
    });
    (0, vitest_1.test)("is palindrome true", () => {
        const string1 = "suous";
        const string2 = "spus";
        const result1 = (0, function_1.palindrome)(string1);
        const result2 = (0, function_1.palindrome)(string2);
        (0, vitest_1.expect)(result1).toBe(true);
        (0, vitest_1.expect)(result2).toBe(false);
    });
    (0, vitest_1.test)("is set", () => {
        const array = [1, 4, 3, 2];
        const arrayToCompare = [1, 2, 3, 4];
        const result = (0, function_1.isSet)(array);
        (0, vitest_1.expect)(result).toEqual(arrayToCompare);
    });
    (0, vitest_1.test)("is sqrt", () => {
        const number1 = 4;
        const number2 = -4;
        const result1 = (0, function_1.sqrt)(number1);
        const result2 = (0, function_1.sqrt)(number2);
        (0, vitest_1.expect)(result1).toBe(2);
        (0, vitest_1.expect)(result2).toBe("number low or equal to zero");
    });
});
