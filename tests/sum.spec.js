test('adds 1 + 2 to equal 3', () => {
  const sum = require('../src/components/sum');
  expect(sum(1, 2)).toBe(3);
});