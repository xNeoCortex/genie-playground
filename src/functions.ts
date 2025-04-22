<old_code>
/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * Returns a new sorted array; does not modify the input.
 */
export function bubbleSort(arr: number[]): number[] {
    const result = arr.slice();
    const n = result.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                // Swap elements
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}
</old_code>
<new_code>
/**
 * Sorts an array of numbers using the merge sort algorithm.
 * Returns a new sorted array; does not modify the input.
 */
export function bubbleSort(arr: number[]): number[] {
    // Helper function to perform merge sort recursively
    function mergeSort(array: number[]): number[] {
        if (array.length <= 1) return array;
        const middle = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle));
        return merge(left, right);
    }
    // Helper to merge two sorted arrays
    function merge(left: number[], right: number[]): number[] {
        let result: number[] = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i), right.slice(j));
    }
    return mergeSort(arr.slice());
}
</new_code>