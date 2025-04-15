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

describe("Bubblesort Function", () => {
  it("should sort an empty array", () => {
    expect(bubblesort([])).toEqual([]);
  });

  it("should sort an array with one element", () => {
    expect(bubblesort([5])).toEqual([5]);
  });

  it("should sort a pre-sorted array", () => {
    expect(bubblesort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort a reversed array", () => {
    expect(bubblesort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an unsorted array", () => {
    expect(bubblesort([3, 1, 4, 2, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should not mutate the input array", () => {
    const arr = [3, 2, 1];
    bubblesort(arr);
    expect(arr).toEqual([3, 2, 1]);
  });

  it("should correctly handle arrays with duplicate elements", () => {
    expect(bubblesort([4, 5, 4, 2, 2, 3])).toEqual([2, 2, 3, 4, 4, 5]);
  });

  it("should handle negative numbers", () => {
    expect(bubblesort([0, -1, 5, -10])).toEqual([-10, -1, 0, 5]);
  });
});