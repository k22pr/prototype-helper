interface StringConstructor {
  fixPoint(s: string, length: number): string;
  fixNumber(length: number): string;
  leadingChars(chars: string | number, length: number): string;
  toComma(): string;
  toNumber(): number;
  addSymbol(space?: string): string;
  fromJSON<T>(): T;
  issetWord(word: string): boolean;
}

interface String {
  fixPoint(length: number): string;
  fixNumber(length: number): string;
  leadingChars(chars: string | number, length: number): string;
  toComma(): string;
  toNumber(): number;
  addSymbol(space?: string): string;
  fromJson<T>(): T;
  issetWord(word: string): boolean;
}

String.prototype.leadingChars = function (chars: string | number, length: number): string {
  return (chars.toString().repeat(length) + this).substr(-length);
};

String.prototype.fixPoint = function (length: number = 0): string {
  const base = this.split(".");
  let point = this.split(".");
  if (point.length == 1) point[1] = "";
  else if (point.length >= 3) throw new Error("Invalid String");

  let result = base[0];
  if (point.length == 2 && length != 0) result += `.${point[1].padEnd(length, "0").slice(0, length)}`;

  return result;
};

String.prototype.fixNumber = function (length: number = 8): string {
  let point = this.split(".");

  let result = point[0].toNumber().toString().padStart(length, "0");
  if (point.length == 2) result += `.${point[1]}`;

  return result;
};

String.prototype.toComma = function (): string {
  if (this.length == 0 || this == "NaN") return "0";

  let result = this.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return result;
};

String.prototype.toNumber = function (): number {
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
