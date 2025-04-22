<old_code>
/**
 * Bubble Sort algorithm for sorting numbers in ascending order.
 * Returns a new sorted array (does not mutate the input).
 */
export function bubbleSort(arr: number[]): number[] {
    const result = arr.slice(); // create a copy
    const n = result.length;
    for (let i = 0; i < n - 1; ++i) {
        for (let j = 0; j < n - i - 1; ++j) {
            if (result[j] > result[j + 1]) {
                // Swap
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
 * Merge Sort algorithm for sorting numbers in ascending order.
 * Returns a new sorted array (does not mutate the input).
 */
export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr.slice();
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