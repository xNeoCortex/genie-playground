export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Sorts an array of numbers in ascending order using the Bubble Sort algorithm.
 * This function mutates the input array.
 * @param arr The array of numbers to sort.
 * @returns The sorted array.
 */
export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already in place
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}