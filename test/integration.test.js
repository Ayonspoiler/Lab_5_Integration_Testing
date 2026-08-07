const basic = require("../scripts/basic");
const advanced = require("../scripts/advanced");
const custom = require("../scripts/custom");

describe("Integration Tests", () => {
  test("Compound Interest uses both basic and advanced modules (Spy)", () => {
    const addSpy = jest.spyOn(basic, "add");
    const divideSpy = jest.spyOn(basic, "divide");
    const multiplySpy = jest.spyOn(basic, "multiply");
    const subtractSpy = jest.spyOn(basic, "subtract");
    const powSpy = jest.spyOn(advanced, "pow");

    custom.compoundInterest(1000, 10, 2);

    expect(divideSpy).toHaveBeenCalled();
    expect(addSpy).toHaveBeenCalled();
    expect(powSpy).toHaveBeenCalled();
    expect(multiplySpy).toHaveBeenCalled();
    expect(subtractSpy).toHaveBeenCalled();

    addSpy.mockRestore();
    divideSpy.mockRestore();
    multiplySpy.mockRestore();
    subtractSpy.mockRestore();
    powSpy.mockRestore();
  });

  test("Spy verifies pow called with correct arguments", () => {
    const powSpy = jest.spyOn(advanced, "pow");
    custom.compoundInterest(1000, 10, 2, 1);

    expect(powSpy).toHaveBeenCalledWith(1.1, 2);

    powSpy.mockRestore();
  });
});

describe("Stub Integration Test", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Stub replaces basic.divide to verify custom handles stubbed module", () => {
    jest.spyOn(basic, "divide").mockImplementation((a, b) => {
      if (b === 0) throw new Error("Stub: divide by zero");
      return a / b;
    });

    const result = custom.compoundInterest(1000, 10, 2);
    expect(result.amount).toBeCloseTo(1210, 2);
    expect(basic.divide).toHaveBeenCalled();
  });
});

describe("Driver Integration Test", () => {
  // Driver: test harness that invokes custom module directly (no HTML/UI)
  function customCalculatorDriver(principal, rate, years, n = 1) {
    return custom.compoundInterest(principal, rate, years, n);
  }

  test("Driver invokes custom calculator independently", () => {
    const output = customCalculatorDriver(500, 5, 3);
    expect(output).toHaveProperty("amount");
    expect(output).toHaveProperty("interest");
    expect(output.amount).toBeGreaterThan(500);
  });

  test("Driver handles invalid input through custom module", () => {
    expect(() => customCalculatorDriver(-500, 5, 3)).toThrow();
  });
});