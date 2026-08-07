function pow(x, n) {
  return Math.pow(x, n);
}

function modulo(a, b) {
  if (b === 0) throw new Error("Cannot modulo by zero");
  return a % b;
}

const advanced = { pow, modulo };

if (typeof module !== "undefined" && module.exports) {
  module.exports = advanced;
} else {
  window.advanced = advanced;
}