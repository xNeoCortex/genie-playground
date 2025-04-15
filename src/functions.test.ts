import { describe, it, expect } from "vitest";
import { fibonacci, bubblesort } from "./functions";

describe("Fibonacci Function", () => {
  it("should return 0 for n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("should return 1 for n = 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("should return 1 for n = 2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  it("should return 55 for n = 10", () => {
    expect(fibonacci(10)).toBe(55);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe("bubblesort", () => {
  it("should sort an array of positive numbers", () => {
    expect(bubblesort([3, 1, 2])).toEqual([1, 2, 3]);
    expect(bubblesort([5, 4, 3, 2, 1])).toEqual([1,2,3,4,5]);
  });

  it("should not mutate the input array", () => {
    const arr = [2, 1];
    bubblesort(arr);
    expect(arr).toEqual([2, 1]);
  });

  it("should handle an empty array", () => {
    expect(bubblesort([])).toEqual([]);
  });

  it("should handle arrays with negative numbers", () => {
    expect(bubblesort([0, -2, 5, -10, 1])).toEqual([-10, -2, 0, 1, 5]);
  });

  it("should handle arrays with duplicates", () => {
    expect(bubblesort([2,1,2,1,2])).toEqual([1,1,2,2,2]);
  });

  it("should handle arrays with one element", () => {
    expect(bubblesort([42])).toEqual([42]);
  });
});