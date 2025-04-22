+/**
+ * Sorts an array of numbers in place using bubble sort.
+ * @param arr The array of numbers to sort.
+ * @returns The sorted array (sorted in place).
+ */
+export function bubbleSort(arr: number[]): number[] {
+    let n = arr.length;
+    for (let i = 0; i < n - 1; i++) {
+        for (let j = 0; j < n - i - 1; j++) {
+            if (arr[j] > arr[j + 1]) {
+                // Swap arr[j] and arr[j + 1]
+                const temp = arr[j];
+                arr[j] = arr[j + 1];
+                arr[j + 1] = temp;
+            }
+        }
+    }
+    return arr;
+}