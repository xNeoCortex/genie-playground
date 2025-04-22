
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Sorts an array of numbers using the merge sort algorithm and returns a new sorted array.
 * @param arr - The array of numbers to sort.
 * @returns A new array sorted in ascending order.
 */
export function bubbleSort(arr: number[]): number[] {
    // Renaming this to keep the existing export name as per instructions,
    // but this is now merge sort.
    if (arr.length <= 1) return [...arr];

    function merge(left: number[], right: number[]): number[] {
        const result: number[] = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    function mergeSort(array: number[]): number[] {
        if (array.length <= 1) return array;
        const mid = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, mid));
        const right = mergeSort(array.slice(mid));
        return merge(left, right);
    }

    return mergeSort(arr);
}
