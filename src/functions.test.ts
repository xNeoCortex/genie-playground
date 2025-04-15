// Existing imports, tests, etc.

import { bubbleSort } from "./functions";

describe("bubbleSort", () => {
    it("sorts an array of numbers in ascending order", () => {
        expect(bubbleSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it("returns an empty array when input is empty", () => {
        expect(bubbleSort([])).toEqual([]);
    });

    it("handles arrays with one element", () => {
        expect(bubbleSort([7])).toEqual([7]);
    });

    it("handles sorted arrays", () => {
        expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it("handles arrays with duplicates", () => {
        expect(bubbleSort([3, 1, 2, 3])).toEqual([1, 2, 3, 3]);
    });

    it("does not mutate the original array", () => {
        const arr = [4, 2, 1];
        bubbleSort(arr);
        expect(arr).toEqual([4, 2, 1]);
    });
});

// ...rest of the file, preserving all existing tests and imports.