/**
 * Sorts an array in place using the bubble sort algorithm.
 * @param arr Array of numbers to sort
 * @returns The sorted array (in place)
 */
export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}
// Example usage:
if (require.main === module) {
    const example = [64, 34, 25, 12, 22, 11, 90];
    console.log("Original array:", example);
    bubbleSort(example);
    console.log("Sorted array:", example);
}