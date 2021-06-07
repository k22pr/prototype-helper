interface StringConstructor {
  padZero(s: string, length: number): string;
  leadingChars(chars: string | number, length: number): string;
  toComma(length?: number): string;
  toNumber(): number;
}

interface String {
  padZero(length: number): string;
  leadingChars(chars: string | number, length: number): string;
  toComma(length?: number): string;
  toNumber(): number;
}

String.prototype.leadingChars = function (chars: string | number, length: number): string {
  return (chars.toString().repeat(length) + this).substr(-length);
};

String.prototype.padZero = function (length: number): string {
  let padString = this.toString();
  return padString.padStart(length, "0");
};

String.prototype.toComma = function (length: number = 0) {
  if (this.length == 0 || this == "NaN") return "0";
  const tmp = this.split(".");

  let num = tmp[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",").padZero(length);
  num += tmp.length != 1 && tmp[1].length != 0 ? `.${tmp[1]}` : "";
  return num;
};

String.prototype.toNumber = function () {
  return Number(this.replace(/,/gi, ""));
};
