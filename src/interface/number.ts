declare interface Number {
  toNumber(): number;
  toComma(): string;
  mod(amp: number): number;
  div(value: number): number;
  mul(value: number): number;
  add(value: number): number;
  sub(value: number): number;
  fixNumber(length: number): string;
  fixPoint(length: number): string;
  abs(): number;
  isFinite(): boolean;
  isNaN(): boolean;
  isInteger(): boolean;
  addSymbol(space?: string): string;
  fromPer(per: number): number;
  toPer(per: number): number;

  ceil(point?: number): number;
  floor(point?: number): number;
  round(point?: number): number;
}
