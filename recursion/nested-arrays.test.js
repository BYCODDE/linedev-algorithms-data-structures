function nestedAdd(array) {}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, [3, 4, [5, 6]]])).toBe(21);
  expect(nestedAdd([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])).toBe(55);
  expect(nestedAdd([[[[[[[[[[[5]]]]]]]]]]])).toBe(5);
});
