/**
 * Existing function definitions and exports.
 */

// ... previous code ...

/**
 * Bubble Sort implementation.
 * Sorts an array of numbers in ascending order.
 * Returns a new sorted array, does not mutate the input.
 */
export function bubbleSort(arr: number[]): number[] {
  // Clone the array to avoid mutation
  const a = arr.slice();
  let n = a.length;
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (a[i - 1] > a[i]) {
        // Swap
        const temp = a[i];
        a[i] = a[i - 1];
        a[i - 1] = temp;
        swapped = true;
      }
    }
    n--; // After each pass, the last element is in place
  } while (swapped);
  return a;
}

// ... export or define other functions as before ...