"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
const vitest_1 = require("vitest");
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
        (0, vitest_1.expect)(result2).toStrictEqual(Error("number low or equal to zero"));
        (0, vitest_1.expect)(result1).toBe(2);
    });
    (0, vitest_1.test)("sum of numbers in array", () => {
        const array = [1, 4, 3, 2];
        const total = 10;
        const result = (0, function_1.sumArray)(array);
        (0, vitest_1.expect)(result).toEqual(total);
    });
    (0, vitest_1.test)("sum bigger than number", () => {
        const array = [1, 4, 3, 2];
        const result = (0, function_1.sumArray)(array);
        (0, vitest_1.expect)(result).toBeGreaterThan(9);
    });
    (0, vitest_1.test)("user details", () => __awaiter(void 0, void 0, void 0, function* () {
        const id1 = 5;
        const id2 = 150;
        const result1 = yield (0, function_1.fetchUserData)(id1);
        const result2 = yield (0, function_1.fetchUserData)(id2);
        (0, vitest_1.expect)(result1).toEqual(user);
        (0, vitest_1.expect)(result2).toStrictEqual(Error(`user can't found`));
    }));
    (0, vitest_1.test)("is fibonacci", () => {
        const series1 = [0, 1, 1, 2, 3, 5];
        const series2 = [0, 1, 4, 2, 3, 5];
        const series3 = [0, 1];
        const result1 = (0, function_1.fibonacci)(series1);
        const result2 = (0, function_1.fibonacci)(series2);
        const result3 = (0, function_1.fibonacci)(series3);
        (0, vitest_1.expect)(result1).toBe(8);
        (0, vitest_1.expect)(result2).toStrictEqual(Error(`is not a fibonacci series`));
        (0, vitest_1.expect)(result3).toStrictEqual(Error(`is not a fibonacci series`));
    });
});
