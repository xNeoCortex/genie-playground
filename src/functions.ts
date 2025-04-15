/**
 * Various utility and algorithm functions.
 */

// Existing exports...

/**
 * Sorts an array using the bubble sort algorithm.
 * @param arr The array of numbers to sort.
 * @returns A new sorted array (ascending order).
 */
export function bubbleSort(arr: number[]): number[] {
    // Make a copy to avoid mutating the input
    const result = arr.slice();
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

// ...rest of the file, preserving all existing contents and exports.