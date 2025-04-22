<old_code>
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
</old_code>
<new_code>
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
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
</new_code>