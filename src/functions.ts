export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Bubble sort algorithm.
 * Sorts an array of numbers in ascending order.
 * @param arr Array of numbers to sort
 * @returns Sorted array (new array)
 */
export function bubbleSort(arr: number[]): number[] {
    const out = [...arr];
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < out.length - 1; i++) {
            if (out[i] > out[i + 1]) {
                [out[i], out[i + 1]] = [out[i + 1], out[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return out;
}