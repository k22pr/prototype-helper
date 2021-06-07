export {};
import deepCopy from "../utils/deepCopy";

var newMath: any = Object.create(Math);

newMath.round10 = decimalAdjust("round");
newMath.floor10 = decimalAdjust("floor");
newMath.ceil10 = decimalAdjust("ceil");

function decimalAdjust(type: "round" | "floor" | "ceil") {
  const func = Math[type];
  return (number: number, precision: number) => {
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

globalThis.Math = newMath;
