const { add, multiply, factorial, subtract } = require('../src/math');
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
describe('subtract', () => {
  test('soustrait deux nombres', () => {
    expect(subtract(5, 3)).toBe(2);
  });
  test('soustrait avec un nombre négatif', () => {
    expect(subtract(3, -1)).toBe(4);
  });
});