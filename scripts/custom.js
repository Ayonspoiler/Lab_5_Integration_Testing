(function (global) {
  const isBrowser = typeof window !== "undefined";

  const basic = isBrowser ? global.basic : require("./basic");
  const advanced = isBrowser ? global.advanced : require("./advanced");

  if (isBrowser && (!basic || !advanced)) {
    throw new Error("basic.js and advanced.js must load before custom.js");
  }

  function compoundInterest(principal, annualRatePercent, years, compoundsPerYear = 1) {
    if (principal <= 0) throw new Error("Principal must be positive");
    if (annualRatePercent < 0) throw new Error("Rate cannot be negative");
    if (years < 0) throw new Error("Years cannot be negative");
    if (compoundsPerYear <= 0) throw new Error("Compounds per year must be positive");

    const rate = basic.divide(annualRatePercent, 100);
    const ratePerPeriod = basic.divide(rate, compoundsPerYear);
    const base = basic.add(1, ratePerPeriod);
    const exponent = basic.multiply(compoundsPerYear, years);
    const growthFactor = advanced.pow(base, exponent);
    const amount = basic.multiply(principal, growthFactor);
    const interest = basic.subtract(amount, principal);

    return { amount, interest };
  }

  const custom = { compoundInterest };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = custom;
  }

  global.custom = custom;
})(typeof window !== "undefined" ? window : global);
