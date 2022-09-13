import decimal, { Decimal } from "decimal.js";

Number.prototype.toNumber = function () {
  return Number(this);
};

Number.prototype.toComma = function () {
  if (`${this}`.length == 0) return "0";
  return `${new decimal(Number(this)).toString()}`.toComma();
};

Number.prototype.mod = function (amp: number) {
  return decimal.mod(Number(this), amp).toNumber();
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

Number.prototype.div = function (value: number) {
  return decimal.div(Number(this), value).toNumber();
};

Number.prototype.mul = function (value: number) {
  return decimal.mul(Number(this), value).toNumber();
};

Number.prototype.add = function (value: number) {
  return decimal.add(Number(this), value).toNumber();
};

Number.prototype.sub = function (value: number) {
  return decimal.sub(Number(this), value).toNumber();
};

Number.prototype.fixNumber = function (length: number = 8) {
  return `${new decimal(Number(this)).toString()}`.fixNumber(length);
};

Number.prototype.fixPoint = function (length: number = 0) {
  return `${new decimal(Number(this)).toString()}`.fixPoint(length);
};

Number.prototype.abs = function () {
  return Math.abs(Number(this));
};

Number.prototype.isFinite = function () {
  return new decimal(Number(this)).isFinite();
};

Number.prototype.isNaN = function () {
  return new decimal(Number(this)).isNaN();
};

Number.prototype.isInteger = function () {
  return new decimal(Number(this)).isInteger();
};

Number.prototype.addSymbol = function (space: string = "") {
  return `${Number(this) > 0 ? "+" : ""}${space}${this}`;
};

Number.prototype.fromPer = function (per: number) {
  return (Number(this) / 100) * per;
};

Number.prototype.toPer = function (val: number) {
  return (val / Number(this)) * 100;
};

Number.prototype.ceil = function (point: number = 0) {
  return Math.ceil10(Number(this), point);
};

Number.prototype.floor = function (point: number = 0) {
  return Math.floor10(Number(this), point);
};

Number.prototype.round = function (point: number = 0) {
  return Math.round10(Number(this), point);
};
