// example.test.js
const sum = require('./example');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(sum(5, 7)).toBe(12);
});

test('adds -3 + 7 to equal 4', () => {
  expect(sum(-3, 7)).toBe(4);
});