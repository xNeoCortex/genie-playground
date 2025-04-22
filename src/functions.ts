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
</new_code>