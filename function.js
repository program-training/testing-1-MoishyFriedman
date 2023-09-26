"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqrt = exports.isSet = exports.palindrome = exports.lengthOfString = void 0;
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
console.log(sqrt(10));
