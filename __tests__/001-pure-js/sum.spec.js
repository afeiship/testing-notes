const { sum } = require('001-pure-js/sum');

describe('pure-js - sum', () => {
  test('100 + 101 should be 201', () => {
    expect(sum(100, 101)).toBe(201);
  });

  test('100 + 101 is string will be transform to number', () => {
    expect(sum('100', 101)).toBe(201);
  });
});
