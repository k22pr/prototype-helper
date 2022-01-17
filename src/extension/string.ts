interface StringConstructor {
  padPoint(s: string, length: number): string;
  padZero(length: number): string;
  leadingChars(chars: string | number, length: number): string;
  toComma(): string;
  toNumber(): number;
}

interface String {
  padPoint(length: number): string;
  padZero(length: number): string;
  leadingChars(chars: string | number, length: number): string;
  toComma(): string;
  toNumber(): number;
}

String.prototype.leadingChars = function (chars: string | number, length: number): string {
  return (chars.toString().repeat(length) + this).substr(-length);
};

String.prototype.padPoint = function (length: number = 0): string {
  let base = this.split(".");
  let point = this.toNumber().toString().split(".");
  if (point.length == 1) point[1] = "";
  else if (point.length >= 3) throw new Error("Invalid");

  let result = base[0];
  if (point.length == 2 && length != 0) result += `.${point[1].padEnd(length, "0")}`;

  return result;
};

String.prototype.padZero = function (length: number): string {
  let point = this.toNumber().toString().split(".");

  let result = point[0].padStart(length, "0");
  if (point.length == 2) result += `.${point[1]}`;

  return result;
};

String.prototype.toComma = function (): string {
  if (this.length == 0 || this == "NaN") return "0";
  const tmp = this.split(".");

  let result = tmp[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (tmp.length != 1) result += `.${tmp[1]}`;
  return result;
};

String.prototype.toNumber = function (): number {
  return Number(this.replace(/,/gi, ""));
};
