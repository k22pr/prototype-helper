import decimal, { Decimal } from "decimal.js";

Number.prototype.toNumber = function () {
  return Number(this);
};

Number.prototype.toDecimal = function (): Decimal {
  return new Decimal(this.toNumber());
};

Number.prototype.toComma = function () {
  if (`${this}`.length === 0) return "0";
  return `${new decimal(Number(this)).toString()}`.toComma();
};

Number.prototype.mod = function (amp: number) {
  return decimal.mod(Number(this), amp).toNumber();
};

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

Number.prototype.pow = function (value: number) {
  return decimal.pow(Number(this), value).toNumber();
};

Number.prototype.normalize = function () {
  return Number(this).pow(2);
  // return Math.pow(Number(this), 2);
};

Number.prototype.fixNumber = function (length = 8) {
  return `${this}`.fixNumber(length);
};

Number.prototype.fixPoint = function (length = 0) {
  return `${this}`.fixPoint(length);
};

Number.prototype.abs = function (): number {
  return this.toDecimal().abs().toNumber();
};

Number.prototype.isFinite = function (): boolean {
  return this.toDecimal().isFinite();
};

Number.prototype.isNaN = function (): boolean {
  return this.toDecimal().isNaN();
};

Number.prototype.isInteger = function (): boolean {
  return this.toDecimal().isInteger();
};

Number.prototype.addSymbol = function (space = "") {
  return `${Number(this) > 0 ? "+" : Number(this) < 0 ? "-" : ""}${space}${Math.abs(Number(this))}`;
};

Number.prototype.percentOf = function (per: number) {
  return (Number(this) / 100) * per;
};

Number.prototype.toPercent = function (val: number) {
  return (Number(this) / val) * 100;
};

Number.prototype.ceil = function (point = 0) {
  return Math.ceil10(Number(this), point);
};

Number.prototype.floor = function (point = 0) {
  return Math.floor10(Number(this), point);
};

Number.prototype.round = function (point = 0) {
  return Math.round10(Number(this), point);
};

Number.prototype.toFileSize = function (): string {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let value = Number(this);
  let index = 0;
  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index++;
  }
  return `${value.fixPoint(2)}${units[index]}`;
};

Number.prototype.isBetween = function (min: number, max: number): boolean {
  const val = Number(this);
  return val >= min && val <= max;
};
