interface StringConstructor {
  padZero(s: string, length: number): string;
  leadingChars(chars: string | number, length: number): string;
}

interface String {
  padZero(length: number): string;
  leadingChars(chars: string | number, length: number): string;
}

String.prototype.leadingChars = function (chars: string | number, length: number): string {
  return (chars.toString().repeat(length) + this).substr(-length);
};

String.prototype.padZero = function (length: number): string {
  let paddString = this.toString();
  while (this.length < length) {
    paddString = "0" + this;
  }
  return paddString;
};
