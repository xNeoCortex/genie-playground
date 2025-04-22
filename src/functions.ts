export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Sorts an array of numbers using bubble sort algorithm.
 * @param arr Array of numbers to sort.
 * @returns A new sorted array.
 */
export function bubbleSort(arr: number[]): number[] {
    const result = arr.slice(); // Create a copy to avoid mutating the input
    const n = result.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (result[i - 1] > result[i]) {
                [result[i - 1], result[i]] = [result[i], result[i - 1]];
                swapped = true;
            }
        }
    } while (swapped);
    return result;
}