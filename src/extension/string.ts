import { isNumber } from "../utils/valid";

String.prototype.leadingChars = function (chars: string | number, length: number): string {
  return (chars.toString().repeat(length) + this).substr(-length);
};

String.prototype.fixPoint = function (length: number = 0): string {
  let base = this.split(".");
  if (base.length == 1) base[1] = "";
  else if (base.length >= 3) throw new Error("Invalid String");

  let result = base[0];
  if (base.length == 2 && length != 0) {
    result += `.${base[1].padEnd(length, "0").slice(0, length)}`;
  }
  return result;
};

String.prototype.fixNumber = function (length: number = 8): string {
  let point = this.split(".");

  const neg = point[0].indexOf("-") == 0;
  let result = Math.abs(Number(point[0])).toNumber().toString().padStart(length, "0");
  if (point.length == 2) result += `.${point[1]}`;
  if (neg) result = `-${result}`;

  return result;
};

String.prototype.toComma = function (): string {
  if (this.length == 0 || this == "NaN") return "0";
  const point = this.split(".");
  let result = point[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (point.length == 2) result += `.${point[1]}`;
  // let result = this.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  // let result = Number(this).toLocaleString();
  return result;
};

String.prototype.toNumber = function (): number {
  // return Number(this.replace(",", "").replace(" ", "").replace("+", ""));
  return Number(this.replace(/[,\+\s]/gi, ""));
};

String.prototype.addSymbol = function (space: string = "") {
  return `${this.toNumber() > 0 ? "+" : ""}${space}${this}`;
};

String.prototype.fromJson = function <T>(): T {
  return JSON.parse(`${this}`);
};

String.prototype.issetWord = function (word: string) {
  return this.indexOf(word) == -1 ? false : true;
};

String.prototype.getChar = function (index: number) {
  return this.slice(index, index + 1);
};

String.prototype.isNumber = function () {
  return isNumber(this);
};