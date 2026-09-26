const assert = require("node:assert");
const test = require("node:test");

test("greeting test", () => {
  assert.strictEqual("Hello, world!", "Hello, world!");
});
