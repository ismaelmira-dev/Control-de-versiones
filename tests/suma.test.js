const test = require('node:test');
const assert = require('node:assert/strict');

function suma(a, b) {
  return a + b;
}

test('suma 3 + 4 = 7', () => {
  assert.equal(suma(3, 4), 7);
});
