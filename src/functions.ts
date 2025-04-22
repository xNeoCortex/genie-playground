@@
 export function fibonacci(n: number): number {
     if (n < 0) throw new Error("Negative numbers are not allowed");
     return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
 }
+
+/**
+ * Sorts an array of numbers using the bubble sort algorithm.
+ * Returns a new sorted array.
+ * @param arr - The array of numbers to sort
+ * @returns A new sorted array
+ */
+export function bubbleSort(arr: number[]): number[] {
+  const out = [...arr]; // Copy to avoid mutating input
+  const n = out.length;
+  for (let i = 0; i < n - 1; i++) {
+    for (let j = 0; j < n - 1 - i; j++) {
+      if (out[j] > out[j + 1]) {
+        const temp = out[j];
+        out[j] = out[j + 1];
+        out[j + 1] = temp;
+      }
+    }
+  }
+  return out;
+}