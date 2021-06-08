export {};
import deepCopy from "../utils/deepCopy";

declare global {
  interface Math {
    round10(x: number, point?: number): number;
    floor10(x: number, point?: number): number;
    ceil10(x: number, point?: number): number;
    randomRange(a: number, b: number, point?: number): number;
  }
}

if (!Math.round10) {
  Math.round10 = decimalAdjust("round");
}
if (!Math.floor10) {
  Math.floor10 = decimalAdjust("floor");
}
if (!Math.ceil10) {
  Math.ceil10 = decimalAdjust("ceil");
}

if (!Math.randomRange) {
  Math.randomRange = function (a: number, b: number, point: number = 0) {
    return Math.floor10(Math.random() * (b - a + 1) + a, point);
  };
}

function decimalAdjust(type: "round" | "floor" | "ceil") {
  const func = Math[type];
  return (number: number, precision: number = 0) => {
    console.log("hello:", number, precision);
    precision =
      precision == null ? 0 : precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292);
    if (precision) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      let pair = `${number}e`.split("e");
      const value = func(`${pair[0]}e${+pair[1] + precision}`.toNumber());

      pair = `${value}e`.split("e");
      return +`${pair[0]}e${+pair[1] - precision}`;
    }
    return func(number);
  };
}

globalThis.Math = Math;
