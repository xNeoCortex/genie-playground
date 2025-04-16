/**
 * Prints numbers from 1 to n.
 * For multiples of 3, prints "Fizz";
 * For multiples of 5, prints "Buzz";
 * For multiples of both 3 and 5, prints "FizzBuzz".
 */
function fizzbuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) {
            output += 'Fizz';
        }
        if (i % 5 === 0) {
            output += 'Buzz';
        }
        if (output === '') {
            output = i.toString();
        }
        console.log(output);
    }
}
// Run FizzBuzz up to 100 when this script is called directly
if (require.main === module) {
    fizzbuzz(100);
}
export { fizzbuzz };