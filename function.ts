export function lengthOfString(string: string): number {
  return string.length;
}

export function palindrome(string: string): boolean {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
export function isSet(array: number[]): number[] {
  return array.sort((a, b) => a - b);
}
export function sqrt(number: number) {
  try {
    if (number <= 0) {
      throw new Error("number low or equal to zero");
    }
    return Math.sqrt(number);
  } catch (error) {
    if (error instanceof Error) return error;
  }
}
