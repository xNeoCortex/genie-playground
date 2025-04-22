export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
export function bubbleSort(arr: number[]): number[] {
    const result = arr.slice(); // Create a copy to avoid mutating the original array
    const n = result.length;
    for (let i = 0; i &lt; n - 1; i++) {
        for (let j = 0; j &lt; n - i - 1; j++) {
            if (result[j] &gt; result[j + 1]) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}