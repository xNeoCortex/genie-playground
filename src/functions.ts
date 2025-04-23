
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Sorts an array of numbers using the insertion sort algorithm.
 * Returns a new array and does not mutate the input.
 * @param arr Array of numbers to sort
 */
export function insertionSort(arr: number[]): number[] {
    const result = [...arr];
    for (let i = 1; i < result.length; i++) {
        let key = result[i];
        let j = i - 1;
        while (j >= 0 && result[j] > key) {
            result[j + 1] = result[j];
            j = j - 1;
        }
        result[j + 1] = key;
    }
    return result;
}

/**
 * Trie un tableau de nombres en utilisant l'algorithme de tri fusion (merge sort).
 * Retourne un nouveau tableau et ne modifie pas le tableau d'entrée.
 * @param arr Tableau de nombres à trier
 */
export function mergeSort(arr: number[]): number[] {
    // Helper recursive function
    function _mergeSort(array: number[]): number[] {
        if (array.length <= 1) return array;
        const mid = Math.floor(array.length / 2);
        const left = _mergeSort(array.slice(0, mid));
        const right = _mergeSort(array.slice(mid));
        return merge(left, right);
    }

    function merge(left: number[], right: number[]): number[] {
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
        return result.concat(left.slice(i), right.slice(j));
    }

    return _mergeSort([...arr]);
}

/**
 * Sorts an array of numbers using the selection sort algorithm.
 * Returns a new array and does not mutate the input.
 * @param arr Array of numbers to sort
 */
export function selectionSort(arr: number[]): number[] {
    const result = [...arr];
    for (let i = 0; i < result.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < result.length; j++) {
            if (result[j] < result[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [result[i], result[minIdx]] = [result[minIdx], result[i]];
        }
    }
    return result;
}

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * Returns a new array and does not mutate the input.
 * @param arr Array of numbers to sort
 */
export function bubbleSort(arr: number[]): number[] {
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
        n -= 1;
    } while (swapped);
    return result;
}

/**
 * Sorts an array of numbers using the quick sort algorithm.
 * Returns a new array and does not mutate the input.
 * @param arr Array of numbers to sort
 */
export function quickSort(arr: number[]): number[] {
    function _quickSort(array: number[]): number[] {
        if (array.length <= 1) return array;
        const pivot = array[array.length - 1];
        const left = array.slice(0, -1).filter(x => x <= pivot);
        const right = array.slice(0, -1).filter(x => x > pivot);
        return [..._quickSort(left), pivot, ..._quickSort(right)];
    }
    return _quickSort([...arr]);
}

/**
 * Sorts an array of numbers using the heap sort algorithm.
 * Returns a new array and does not mutate the input.
 * @param arr Array of numbers to sort
 */
export function heapSort(arr: number[]): number[] {
    const result = [...arr];
    const n = result.length;

    function heapify(length: number, i: number) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < length && result[left] > result[largest]) largest = left;
        if (right < length && result[right] > result[largest]) largest = right;
        if (largest !== i) {
            [result[i], result[largest]] = [result[largest], result[i]];
            heapify(length, largest);
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [result[0], result[i]] = [result[i], result[0]];
        heapify(i, 0);
    }
    return result;
}

/**
 * Sorts an array of numbers using the shell sort algorithm.
 * Returns a new array and does not mutate the input.
 * @param arr Array of numbers to sort
 */
export function shellSort(arr: number[]): number[] {
    const result = [...arr];
    let n = result.length;
    let gap = Math.floor(n / 2);
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = result[i];
            let j = i;
            while (j >= gap && result[j - gap] > temp) {
                result[j] = result[j - gap];
                j -= gap;
            }
            result[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return result;
}

/**
 * Sorts an array of non-negative integers using the counting sort algorithm.
 * Does not mutate the input. Works only for non-negative integers.
 * @param arr Array of non-negative integers to sort
 */
export function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return [];
    const max = Math.max(...arr);
    if (arr.some(n => n < 0 || !Number.isInteger(n))) {
        throw new Error("Counting sort only supports non-negative integers.");
    }
    const count = Array(max + 1).fill(0);
    for (const num of arr) {
        count[num]++;
    }
    const result: number[] = [];
    for (let i = 0; i <= max; i++) {
        for (let j = 0; j < count[i]; j++) {
            result.push(i);
        }
    }
    return result;
}

/**
 * Sorts an array of non-negative integers using the radix sort algorithm.
 * Does not mutate the input. Works only for non-negative integers.
 * @param arr Array of non-negative integers to sort
 */
export function radixSort(arr: number[]): number[] {
    if (arr.length === 0) return [];
    if (arr.some(n => n < 0 || !Number.isInteger(n))) {
        throw new Error("Radix sort only supports non-negative integers.");
    }

    let max = Math.max(...arr);
    let result = [...arr];
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
        const output = Array(result.length).fill(0);
        const count = Array(10).fill(0);

        for (let i = 0; i < result.length; i++) {
            const digit = Math.floor(result[i] / exp) % 10;
            count[digit]++;
        }
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        for (let i = result.length - 1; i >= 0; i--) {
            const digit = Math.floor(result[i] / exp) % 10;
            output[count[digit] - 1] = result[i];
            count[digit]--;
        }
        result = output;
        exp *= 10;
    }
    return result;
}
