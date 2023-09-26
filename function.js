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
exports.fibonacci = exports.fetchUserData = exports.sumArray = exports.sqrt = exports.isSet = exports.palindrome = exports.lengthOfString = void 0;
function lengthOfString(string) {
    return string.length;
}
exports.lengthOfString = lengthOfString;
function palindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
exports.palindrome = palindrome;
function isSet(array) {
    return array.sort((a, b) => a - b);
}
exports.isSet = isSet;
function sqrt(number) {
    try {
        if (number <= 0) {
            throw new Error("number low or equal to zero");
        }
        return Math.sqrt(number);
    }
    catch (error) {
        if (error instanceof Error)
            return error;
    }
}
exports.sqrt = sqrt;
function sumArray(array) {
    return array.reduce((total, num) => total + num);
}
exports.sumArray = sumArray;
function fetchUserData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const user = (yield result.json());
            if (!user.address)
                throw new Error(`user can't found`);
            return user;
        }
        catch (error) {
            if (error instanceof Error)
                return error;
        }
    });
}
exports.fetchUserData = fetchUserData;
function fibonacci(array) {
    const error = "is not a fibonacci series";
    try {
        if (array.length < 3)
            throw new Error(error);
        for (let i = 2; i < array.length; i++) {
            if (array[i] !== array[i - 1] + array[i - 2])
                throw new Error(error);
        }
        return array[array.length - 1] + array[array.length - 2];
    }
    catch (error) {
        if (error instanceof Error)
            return error;
    }
}
exports.fibonacci = fibonacci;
