interface Number {
  toComma(): string;
  ampersand(amp: number): number;
  safeDivision(value: number): number;
  safeMultiply(value: number): number;
  safeAdd(value: number): number;
  safeSubtract(value: number): number;
}

Number.prototype.toComma = function () {
  if (`$[this}`.length == 0) return "0";
  return `${this}`.toComma();
};

Number.prototype.ampersand = function (amp: number) {
  const prepValue = Number(this) % amp;
  const tmp = prepValue.toString().split(".");

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
  return (Number(this) / value).toFixed(16).toNumber();
};

Number.prototype.safeMultiply = function (value: number) {
  return (Number(this) * value).toFixed(16).toNumber();
};

Number.prototype.safeAdd = function (value: number) {
  return (Number(this) + value).toFixed(16).toNumber();
};

Number.prototype.safeAdd = function (value: number) {
  return (Number(this) + value).toFixed(16).toNumber();
};
Number.prototype.safeSubtract = function (value: number) {
  return (Number(this) - value).toFixed(16).toNumber();
};
