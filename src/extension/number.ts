interface Number {
  toComma(): string;
}

Number.prototype.toComma = function () {
  if (`$[this}`.length == 0) return "0";
  return `${this}`.toComma();
};
