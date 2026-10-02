const test = require('node:test');
const assert = require('node:assert');
const { somar, ehPar } = require('../index.js');

test('somar soma dois números corretamente', () => {
  assert.strictEqual(somar(2, 3), 5);
});

test('ehPar identifica número par', () => {
  assert.strictEqual(ehPar(4), true);
});

test('ehPar identifica número ímpar', () => {
  assert.strictEqual(ehPar(5), false);
});
