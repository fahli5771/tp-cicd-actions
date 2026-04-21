const { add, multiply, factorial } = require('../src/math');

describe('add', () => {
  test('additionne', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('multiply', () => {
  test('multiplie', () => {
    expect(multiply(3, 4)).toBe(12);
  });
});

describe('factorial', () => {
  test('factorielle', () => {
    expect(factorial(5)).toBe(120);
  });
});