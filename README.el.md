# Έργο Βοηθητικών Συναρτήσεων TypeScript

Αυτό το αποθετήριο περιέχει μια συλλογή από βασικές βοηθητικές συναρτήσεις σε TypeScript και παραδείγματα. Είναι μια απλή δομή έργου κατάλληλη για εκμάθηση, πειραματισμό ή ως βάση για άλλα έργα TypeScript.

## Δομή Έργου

```
src/
  fizzbuzz.ts          # Υλοποίηση της FizzBuzz
  functions.ts         # Περιέχει την υλοποίηση της Fibonacci
  functions.test.ts    # Μονάδες δοκιμών για τη συνάρτηση Fibonacci με Vitest
  functions.new.ts     # Μια απλή συνάρτηση 'wow'
  index.ts             # Σημείο εισόδου για πειράματα/δείγματα
README.el.md           # Πληροφορίες για το έργο στα ελληνικά
```

## Χρήση

### FizzBuzz

Εκτύπωση της ακολουθίας FizzBuzz μέχρι έναν συγκεκριμένο αριθμό:

```typescript
import { fizzbuzz } from "./src/fizzbuzz";

fizzbuzz(20);
// Έξοδος: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz
```

### Fibonacci

Υπολογισμός του n-οστού αριθμού Fibonacci με αναδρομή και έλεγχο λαθών για αρνητικούς αριθμούς:

```typescript
import { fibonacci } from "./src/functions";

console.log(fibonacci(10)); // Έξοδος: 55
```

### Συνάρτηση Wow

Μια απλή συνάρτηση επίδειξης:

```typescript
import { wow } from "./src/functions.new";

wow(); // Έξοδος: wow
```

## Εκτέλεση του Κώδικα

Για να εκτελέσετε τα παραδείγματα κώδικα, χρησιμοποιήστε `ts-node` ή μεταγλωττίστε τα αρχεία TypeScript και εκτελέστε τα με το Node.js. Για παράδειγμα:

```bash
npx ts-node src/index.ts
```

## Δοκιμές

Οι μονάδες δοκιμών για τη συνάρτηση Fibonacci υλοποιούνται με το [Vitest](https://vitest.dev/).

Για να εκτελέσετε τις δοκιμές:

```bash
npx vitest run
```

## Άδεια

MIT