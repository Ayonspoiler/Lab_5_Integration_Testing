const calculator = require("../scripts/advanced");

describe('Pow', () => {
    var BVAdata = [
        [2, 1, 2],
        [2, 3, 8],
        [3, 2, 9],
        [5, 0, 1]
    ];
    describe.each(BVAdata)('BVA: pow(%i, %i), Expected: %i', (x, n, expected) => {
        test(`returns ${calculator.pow(x, n)}`, () => {
            expect(calculator.pow(x, n)).toBe(expected);
        });
    });

    var DTdata = [
        [0, 5, 0],
        [-2, 3, -8],
        [10, 2, 100],
        [2, 10, 1024]
    ];
    describe.each(DTdata)('DT: pow(%i, %i), Expected: %i', (x, n, expected) => {
        test(`returns ${calculator.pow(x, n)}`, () => {
            expect(calculator.pow(x, n)).toBe(expected);
        });
    });
});

describe('Modulo', () => {
    var BVAdata = [
        [10, 3, 1],
        [20, 6, 2],
        [15, 4, 3],
        [7, 2, 1]
    ];
    describe.each(BVAdata)('BVA: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a, b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [0, 5, 0],
        [-10, 3, -1],
        [25, 5, 0],
        [17, 4, 1]
    ];
    describe.each(DTdata)('DT: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a, b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });
});