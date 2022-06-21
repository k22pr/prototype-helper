interface Number {
  toComma(): string;
  ampersand(amp: number): number;
  safeDivision(value: number): number;
  safeMultiply(value: number): number;
  safeAdd(value: number): number;
  safeSubtract(value: number): number;
  fixNumber(length: number): string;
  fixPoint(length: number): string;
}

Number.prototype.toComma = function () {
  if (`${this}`.length == 0) return "0";
  return `${this}`.toComma();
};

Number.prototype.ampersand = function (amp: number) {
  let length = 1;
  if (amp < 1) length = `${amp}`.length - 2;

  const prepValue =
    (Number(this) * Math.pow(10, length)).toFixed(8).toNumber() %
    (amp * Math.pow(10, length)).toFixed(8).toNumber();
  const tmp = prepValue.toString().split(".");
  console.log(tmp);

  if (tmp[1]) {
    const pointValue = hexfloatNotation(`0.${tmp[1]}`.toNumber());
    return Number(tmp[0] + (pointValue % amp));
  }
  return prepValue;
};

function hexfloatNotation(number: number, numberPoint = 8) {
  const tmp = number.toString().split(".");
  if (tmp[1]) {
    const size = Math.round(number * Math.pow(10, numberPoint)) / Math.pow(10, numberPoint);
    return Number(tmp[0] + size);
  } else {
    return Number(tmp);
  }
}

Number.prototype.safeDivision = function (value: number) {
  return Math.round10(Math.floor10(Number(this) / value, 16), 15);
};

Number.prototype.safeMultiply = function (value: number) {
  return Math.round10(Math.floor10(Number(this) * value, 16), 15);
};

Number.prototype.safeAdd = function (value: number) {
  return Math.round10(Math.floor10(Number(this) + value, 16), 15);
};

Number.prototype.safeSubtract = function (value: number) {
  return Math.round10(Math.floor10(Number(this) - value, 16), 15);
};

Number.prototype.fixNumber = function (length: number = 8) {
  return `${this}`.fixNumber(length);
};

Number.prototype.fixPoint = function (length: number) {
  return `${this}`.fixPoint(length);
};
