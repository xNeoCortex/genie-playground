# TypeScript Utility Functions Project

This repository contains a collection of basic TypeScript utility functions and examples. It is a simple project structure ideal for learning, experimenting, or as a foundational template for other TypeScript projects.

## Project Structure

```
src/
  fizzbuzz.ts          # FizzBuzz implementation
  functions.ts         # Contains Fibonacci implementation
  functions.test.ts    # Unit tests for Fibonacci function using Vitest
  functions.new.ts     # A sample 'wow' logging function
  index.ts             # Entry point for experimentation/demo
README.md              # Project information
```

## Usage

### FizzBuzz

Print the FizzBuzz sequence up to a given number:

```typescript
import { fizzbuzz } from "./src/fizzbuzz";

fizzbuzz(20);
// Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz
```

### Fibonacci

Calculate the n-th Fibonacci number recursively with error-checking for negatives:

```typescript
import { fibonacci } from "./src/functions";

console.log(fibonacci(10)); // Output: 55
```

### Wow Function

A simple demonstration function:

```typescript
import { wow } from "./src/functions.new";

wow(); // Output: wow
```

## Running the Code

To run the code examples, use `ts-node` or compile the TypeScript files and run with Node.js. For example:

```bash
npx ts-node src/index.ts
```

## Testing

Unit tests for the Fibonacci function are implemented using [Vitest](https://vitest.dev/).

To run the tests:

```bash
npx vitest run
```

## License

MIT