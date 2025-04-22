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
</new_code>