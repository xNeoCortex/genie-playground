export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * Returns a sorted copy; does not mutate the original array.
 * @param arr array of numbers
 * @returns sorted array of numbers
 */
export function bubblesort(arr: number[]): number[] {
    const result = [...arr];
    let n = result.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (result[i - 1] > result[i]) {
                [result[i - 1], result[i]] = [result[i], result[i - 1]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return result;
}