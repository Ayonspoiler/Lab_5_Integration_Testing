const custom = require("../scripts/custom");

describe("Custom Calculator - Compound Interest (Unit Tests)", () => {
  test("calculates compound interest correctly", () => {
    const result = custom.compoundInterest(1000, 10, 2);

    expect(result.amount).toBeCloseTo(1210, 2);
    expect(result.interest).toBeCloseTo(210, 2);
  });

  test("calculates with semi-annual compounding (n=2)", () => {
    const result = custom.compoundInterest(1000, 10, 2, 2);
 
    expect(result.amount).toBeCloseTo(1215.51, 2);
    expect(result.interest).toBeCloseTo(215.51, 2);
  });

  test("calculates with quarterly compounding", () => {
    const result = custom.compoundInterest(1000, 8, 1, 4);
    expect(result.amount).toBeGreaterThan(1000);
    expect(result.interest).toBeGreaterThan(0);
  });

  test("throws for invalid principal", () => {
    expect(() => custom.compoundInterest(0, 10, 2)).toThrow("Principal must be positive");
    expect(() => custom.compoundInterest(-100, 10, 2)).toThrow("Principal must be positive");
  });

  test("throws for negative rate", () => {
    expect(() => custom.compoundInterest(1000, -5, 2)).toThrow("Rate cannot be negative");
  });

  test("throws for negative years", () => {
    expect(() => custom.compoundInterest(1000, 10, -1)).toThrow("Years cannot be negative");
  });

  test("throws for invalid compounds per year", () => {
    expect(() => custom.compoundInterest(1000, 10, 2, 0)).toThrow(
      "Compounds per year must be positive"
    );
  });

  test("boundary: zero rate gives no interest", () => {
    const result = custom.compoundInterest(1000, 0, 5);
    expect(result.amount).toBe(1000);
    expect(result.interest).toBe(0);
  });
});