
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Sorts an array of numbers using the bubble sort algorithm and returns a new sorted array.
 * @param arr - The array of numbers to sort.
 * @returns A new array sorted in ascending order.
 */
export function bubbleSort(arr: number[]): number[] {
    const result = [...arr];
    let n = result.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (result[i - 1] > result[i]) {
                const temp = result[i];
                result[i] = result[i - 1];
                result[i - 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return result;
}
