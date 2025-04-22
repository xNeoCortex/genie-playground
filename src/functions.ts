
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Sorts an array of numbers using the merge sort algorithm and returns a new sorted array.
 * @param arr - The array of numbers to sort.
 * @returns A new array sorted in ascending order.
 */
export function bubbleSort(arr: number[]): number[] {
    if (arr.length <= 1) return [...arr];

    const merge = (left: number[], right: number[]): number[] => {
        const result: number[] = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    };

    const mergeSort = (input: number[]): number[] => {
        if (input.length <= 1) return input;
        const mid = Math.floor(input.length / 2);
        const left = mergeSort(input.slice(0, mid));
        const right = mergeSort(input.slice(mid));
        return merge(left, right);
    };

    return mergeSort([...arr]);
}
