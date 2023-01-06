import { decimalAdjust } from '../utils/math';
export { };

declare global {
  interface Math {
    round10(x: number, point?: number): number;
    floor10(x: number, point?: number): number;
    ceil10(x: number, point?: number): number;
    randomRange(a: number, b: number, point?: number): number;
    clamp(input: number, min: number, max: number): number;
  }
}

if (!Math.round10) {
  Math.round10 = decimalAdjust("round");
}
if (!Math.floor10) {
  Math.floor10 = decimalAdjust("floor");
}
if (!Math.ceil10) {
  Math.ceil10 = decimalAdjust("ceil");
}

if (!Math.randomRange) {
  Math.randomRange = function (a: number, b: number, point: number = 0) {
    return Math.floor10(Math.random() * (b - a + 1) + a, point);
  };
}

if (!Math.clamp) {
  Math.clamp = function (input: number, min: number, max: number) {
    return Math.min(Math.max(input, min), max);
  };
}

globalThis.Math = Math;
