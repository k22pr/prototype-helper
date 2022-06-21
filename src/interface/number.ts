declare interface Number {
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
}
