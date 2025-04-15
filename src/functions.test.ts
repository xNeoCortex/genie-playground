import { bubbleSort } from "./functions";

// ... (other test imports and code) ...

describe("bubbleSort", () => {
  it("sorts an array of numbers in ascending order", () => {
    expect(bubbleSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
  });

  it("returns an empty array if given one", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("returns a sorted array when already sorted", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles negative numbers", () => {
    expect(bubbleSort([0, -2, 5, 1, -10])).toEqual([-10, -2, 0, 1, 5]);
  });

  it("does not mutate the original array", () => {
    const original = [3, 1, 2];
    bubbleSort(original);
    expect(original).toEqual([3, 1, 2]);
  });
});

// ... (other tests as before) ...