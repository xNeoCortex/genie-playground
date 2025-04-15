# genie-playground

## Functions

### fibonacci(n)
Returns the nth Fibonacci number.

```ts
import { fibonacci } from "./src/functions";

console.log(fibonacci(10)); // 55
```

### bubblesort(arr)
Sorts an array of numbers using the bubble sort algorithm. Returns a new sorted array.

```ts
import { bubblesort } from "./src/functions";

const arr = [3, 1, 4, 1, 5];
const sorted = bubblesort(arr);
console.log(sorted); // [1, 1, 3, 4, 5]
```