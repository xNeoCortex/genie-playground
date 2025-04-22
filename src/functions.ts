<old_code>
/**
 * Bubble sort implementation for number arrays.
 * Sorts the array in ascending order and returns a new sorted array.
 *
 * @param arr Array of numbers to sort
 * @returns Sorted array (ascending)
 */
export function bubbleSort(arr: number[]): number[] {
    // Make a copy to avoid mutating the original array
    const a = arr.slice();
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                const temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    return a;
}
</old_code>
<new_code>
/**
 * Merge sort implementation for number arrays.
 * Returns a new array sorted in ascending order.
 *
 * @param arr Array of numbers to sort
 * @returns Sorted array (ascending)
 */
export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr.slice(); // Return a copy of the single-element or empty array
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
    function merge(left: number[], right: number[]): number[] {
        const result: number[] = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}
</new_code>