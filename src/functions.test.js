const assert = require('assert');
const { fibonacci } = require('./functions');

// Simple test runner
function describe(description, callback) {
  console.log(`\n${description}`);
  callback();
}

function it(description, callback) {
  try {
    callback();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(`  ${error.message}`);
    process.exitCode = 1;
  }
}

// Actual tests
describe("Fibonacci Function", () => {
  it("should return 0 for n = 0", () => {
    assert.strictEqual(fibonacci(0), 0);
  });

  it("should return 1 for n = 1", () => {
    assert.strictEqual(fibonacci(1), 1);
  });

  it("should return 1 for n = 2", () => {
    assert.strictEqual(fibonacci(2), 1);
  });

  it("should return 55 for n = 10", () => {
    assert.strictEqual(fibonacci(10), 55);
  });

  it("should throw an error for negative numbers", () => {
    assert.throws(() => fibonacci(-1), Error, "Negative numbers are not allowed");
  });
});

console.log("\nTests completed!");