<old_code>
/**
 * Sorts an array of numbers using bubble sort algorithm.
 * Returns a new sorted array and does not mutate the input.
 * @param arr - Array of numbers to sort
 * @returns Sorted array
 */
export function bubbleSort(arr: number[]): number[] {
    const result = arr.slice(); // make a copy to avoid mutating input
    const n = result.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    return result;
}
</old_code>
<new_code>
/**
 * Sorts an array of numbers using the merge sort algorithm.
 * Returns a new sorted array and does not mutate the input.
 * @param arr - Array of numbers to sort
 * @returns Sorted array
 */
export function bubbleSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr.slice(); // return a copy for consistency
    }
    const merge = (left: number[], right: number[]): number[] => {
        const result: number[] = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    };
    const mergeSort = (input: number[]): number[] => {
        if (input.length <= 1) return input.slice();
        const mid = Math.floor(input.length / 2);
        const left = mergeSort(input.slice(0, mid));
        const right = mergeSort(input.slice(mid));
        return merge(left, right);
    };
    return mergeSort(arr);
}
</new_code>