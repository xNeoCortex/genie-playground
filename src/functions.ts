/* Existing code assumed above -- kept as is */

// Adds a Bubble Sort function to the repo
/**
 * Sorts an array of numbers in ascending order using Bubble Sort.
 * @param arr - Array of numbers to sort
 * @returns A new sorted array
 */
export function bubbleSort(arr: number[]): number[] {
  const result = arr.slice(); // Make a copy to avoid mutating input
  const n = result.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

/* Existing code assumed below -- kept as is */