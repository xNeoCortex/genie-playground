export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Trie un tableau de nombres à l'aide de l'algorithme de tri par insertion.
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
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
 * Trie un tableau de nombres à l'aide de l'algorithme cocktail shaker sort (tri à bulles bidirectionnel).
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
 */
export function cocktailShakerSort(arr: number[]): number[] {
    const result = [...arr];
    let start = 0;
    let end = result.length - 1;
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = start; i < end; i++) {
            if (result[i] > result[i + 1]) {
                [result[i], result[i + 1]] = [result[i + 1], result[i]];
                swapped = true;
            }
        }
        if (!swapped) break;
        swapped = false;
        end--;
        for (let i = end; i > start; i--) {
            if (result[i] < result[i - 1]) {
                [result[i], result[i - 1]] = [result[i - 1], result[i]];
                swapped = true;
            }
        }
        start++;
    }
    return result;
}

/**
 * Trie un tableau de nombres à l'aide de l'algorithme de tri gnome.
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
 */
export function gnomeSort(arr: number[]): number[] {
    const result = [...arr];
    let i = 0;
    while (i < result.length) {
        if (i === 0 || result[i] >= result[i - 1]) {
            i++;
        } else {
            [result[i], result[i - 1]] = [result[i - 1], result[i]];
            i--;
        }
    }
    return result;
}

/**
 * Trie un tableau de nombres à l'aide de l'algorithme de tri peigne (comb sort).
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
 */
export function combSort(arr: number[]): number[] {
    const result = [...arr];
    const shrink = 1.3;
    let gap = result.length;
    let sorted = false;
    while (!sorted) {
        gap = Math.floor(gap / shrink);
        if (gap <= 1) {
            gap = 1;
            sorted = true;
        }
        for (let i = 0; i + gap < result.length; i++) {
            if (result[i] > result[i + gap]) {
                [result[i], result[i + gap]] = [result[i + gap], result[i]];
                sorted = false;
            }
        }
    }
    return result;
}

/**
 * Trie un tableau de nombres à l'aide de l'algorithme de tri par compartiments (bucket sort).
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * Pour simplifier, fonctionne mieux pour les données uniformément réparties dans l'intervalle [0, 1).
 * @param arr Tableau de nombres à trier
 */
export function bucketSort(arr: number[]): number[] {
    if (arr.length === 0) return [];
    const result = [...arr];
    const n = result.length;
    let min = Math.min(...arr), max = Math.max(...arr);
    // Gérer le cas où tous les nombres sont égaux :
    if (min === max) return result;

    // Compartiments
    const buckets: number[][] = Array.from({length: n}, () => []);
    for (let num of result) {
        // Normalise num dans l'intervalle [0,1), synchronisé avec n compartiments
        const idx = Math.floor(((num - min) / (max - min)) * (n - 1));
        buckets[idx].push(num);
    }
    for (let bucket of buckets) {
        bucket.sort((a, b) => a - b);
    }
    return ([] as number[]).concat(...buckets);
}

/**
 * Trie un tableau de nombres à l'aide de l'algorithme pigeonhole sort.
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * À utiliser seulement pour de petits intervalles d'entiers.
 * @param arr Tableau de nombres à trier
 */
export function pigeonholeSort(arr: number[]): number[] {
    if (arr.length === 0) return [];
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    if (!arr.every(n => Number.isInteger(n))) {
        throw new Error("Pigeonhole sort only supports integers.");
    }
    const holes = Array(max - min + 1).fill(0);
    for (const num of arr) {
        holes[num - min]++;
    }
    const result: number[] = [];
    for (let i = 0; i < holes.length; i++) {
        for (let j = 0; j < holes[i]; j++) {
            result.push(i + min);
        }
    }
    return result;
}

/**
 * Trie un tableau de nombres à l'aide de l'algorithme odd-even sort (brick sort).
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
 */
export function oddEvenSort(arr: number[]): number[] {
    const result = [...arr];
    let sorted = false;
    while (!sorted) {
        sorted = true;
        // Passage des indices impairs
        for (let i = 1; i < result.length - 1; i += 2) {
            if (result[i] > result[i + 1]) {
                [result[i], result[i + 1]] = [result[i + 1], result[i]];
                sorted = false;
            }
        }
        // Passage des indices pairs
        for (let i = 0; i < result.length - 1; i += 2) {
            if (result[i] > result[i + 1]) {
                [result[i], result[i + 1]] = [result[i + 1], result[i]];
                sorted = false;
            }
        }
    }
    return result;
}

/**
 * Trie un tableau de nombres à l'aide de l'algorithme bitonic sort.
 * Retourne un nouveau tableau (pas sur place). Utile pour les tableaux de longueur puissance de deux.
 * @param arr Tableau de nombres à trier
 */
export function bitonicSort(arr: number[]): number[] {
    function compareAndSwap(arr: number[], i: number, j: number, dir: boolean) {
        if (dir === (arr[i] > arr[j])) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    function bitonicMerge(arr: number[], low: number, cnt: number, dir: boolean) {
        if (cnt > 1) {
            let k = Math.floor(cnt / 2);
            for (let i = low; i < low + k; i++) {
                compareAndSwap(arr, i, i + k, dir);
            }
            bitonicMerge(arr, low, k, dir);
            bitonicMerge(arr, low + k, k, dir);
        }
    }
    function _bitonicSort(arr: number[], low: number, cnt: number, dir: boolean) {
        if (cnt > 1) {
            let k = Math.floor(cnt / 2);
            _bitonicSort(arr, low, k, true);
            _bitonicSort(arr, low + k, k, false);
            bitonicMerge(arr, low, cnt, dir);
        }
    }
    // Copie et remplit le tableau jusqu'à la puissance de deux supérieure
    let result = [...arr];
    let n = result.length;
    let powerOfTwo = 1;
    while (powerOfTwo < n) {
        powerOfTwo <<= 1;
    }
    for (let i = n; i < powerOfTwo; i++) {
        result.push(Infinity);
    }
    _bitonicSort(result, 0, result.length, true);
    // Filtrer les éléments de remplissage
    return result.filter(x => x !== Infinity);
}

/**
 * Trie un tableau de nombres à l'aide de l'algorithme merge sort.
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
 */
export function mergeSort(arr: number[]): number[] {
    // Fonction récursive d'aide
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
 * Trie un tableau de nombres à l'aide de l'algorithme selection sort.
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
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
 * Trie un tableau de nombres à l'aide de l'algorithme bubble sort.
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
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
 * Trie un tableau de nombres à l'aide de l'algorithme quick sort.
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
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
 * Trie un tableau de nombres à l'aide de l'algorithme heap sort.
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
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
 * Trie un tableau de nombres à l'aide de l'algorithme shell sort.
 * Retourne un nouveau tableau sans modifier le tableau d'entrée.
 * @param arr Tableau de nombres à trier
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
 * Trie un tableau d'entiers non négatifs à l'aide de l'algorithme counting sort.
 * Ne modifie pas le tableau d'entrée. Fonctionne uniquement pour les entiers non négatifs.
 * @param arr Tableau d'entiers non négatifs à trier
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
 * Trie un tableau d'entiers non négatifs à l'aide de l'algorithme radix sort.
 * Ne modifie pas le tableau d'entrée. Fonctionne uniquement pour les entiers non négatifs.
 * @param arr Tableau d'entiers non négatifs à trier
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