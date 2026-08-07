const calculator = require("../scripts/basic");

describe("Add", () => {
  var BVAdata = [
    [1, 2, 3],
    [4, 5, 9],
    [3, 12, 15],
    [4, 6, 10],
  ];
  describe.each(BVAdata)("BVA: add(%i, %i), Expected: %i", (a, b, expected) => {
    test(`returns ${calculator.add(a, b)}`, () => {
      expect(calculator.add(a, b)).toBe(expected);
    });
  });

  var DTdata = [
    [0, 89, 89],
    [-17, -35, -52],
    [65, -12, 53],
    [-78, 24, -54],
  ];
  describe.each(DTdata)("DT: add(%i, %i), Expected: %i", (a, b, expected) => {
    test(`returns ${calculator.add(a, b)}`, () => {
      expect(calculator.add(a, b)).toBe(expected);
    });
  });
});

describe("Subtract", () => {
  var BVAdata = [
    [5, 2, 3],
    [10, 1, 9],
    [15, 3, 12],
    [10, 4, 6],
  ];
  describe.each(BVAdata)(
    "BVA: subtract(%i, %i), Expected: %i",
    (a, b, expected) => {
      test(`returns ${calculator.subtract(a, b)}`, () => {
        expect(calculator.subtract(a, b)).toBe(expected);
      });
    },
  );

  var DTdata = [
    [89, 0, 89],
    [-17, -35, 18],
    [53, -12, 65],
    [-54, 24, -78],
  ];
  describe.each(DTdata)(
    "DT: subtract(%i, %i), Expected: %i",
    (a, b, expected) => {
      test(`returns ${calculator.subtract(a, b)}`, () => {
        expect(calculator.subtract(a, b)).toBe(expected);
      });
    },
  );
});

describe("Multiply", () => {
  var BVAdata = [
    [1, 2, 2],
    [4, 5, 20],
    [3, 4, 12],
    [2, 6, 12],
  ];
  describe.each(BVAdata)(
    "BVA: multiply(%i, %i), Expected: %i",
    (a, b, expected) => {
      test(`returns ${calculator.multiply(a, b)}`, () => {
        expect(calculator.multiply(a, b)).toBe(expected);
      });
    },
  );

  var DTdata = [
    [0, 89, 0],
    [-5, -5, 25],
    [10, -3, -30],
    [-4, 3, -12],
  ];
  describe.each(DTdata)(
    "DT: multiply(%i, %i), Expected: %i",
    (a, b, expected) => {
      test(`returns ${calculator.multiply(a, b)}`, () => {
        expect(calculator.multiply(a, b)).toBe(expected);
      });
    },
  );
});

describe("Divide", () => {
  var BVAdata = [
    [6, 2, 3],
    [10, 2, 5],
    [9, 3, 3],
    [20, 4, 5],
  ];
  describe.each(BVAdata)(
    "BVA: divide(%i, %i), Expected: %i",
    (a, b, expected) => {
      test(`returns ${calculator.divide(a, b)}`, () => {
        expect(calculator.divide(a, b)).toBe(expected);
      });
    },
  );

  var DTdata = [
    [0, 5, 0],
    [-20, -4, 5],
    [15, -3, -5],
    [-12, 4, -3],
  ];
  describe.each(DTdata)(
    "DT: divide(%i, %i), Expected: %i",
    (a, b, expected) => {
      test(`returns ${calculator.divide(a, b)}`, () => {
        expect(calculator.divide(a, b)).toBe(expected);
      });
    },
  );
});
