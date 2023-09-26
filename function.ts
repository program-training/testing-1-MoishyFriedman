export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

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
export function sumArray(array: number[]): number {
  return array.reduce((total, num) => total + num);
}
export async function fetchUserData(id: number) {
  try {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = (await result.json()) as unknown as User;
    if (!user.address) throw new Error(`user can't found`);
    return user;
  } catch (error) {
    if (error instanceof Error) return error;
  }
}
export function fibonacci(array: number[]) {
  const error = "is not a fibonacci series";
  try {
    if (array.length < 3) throw new Error(error);
    for (let i = 2; i < array.length; i++) {
      if (array[i] !== array[i - 1] + array[i - 2]) throw new Error(error);
    }
    return array[array.length - 1] + array[array.length - 2];
  } catch (error) {
    if (error instanceof Error) return error;
  }
}
