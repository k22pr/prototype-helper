import binarySearch, { binarySearchWithSort } from "../utils/binarySearch";
import { decimalAdjust } from "../utils/math";
import { gcd, gcds, lcm, lcms } from "../utils/mostFrequent";

declare global {
  interface Math {
    round10(x: number, point?: number): number;
    floor10(x: number, point?: number): number;
    ceil10(x: number, point?: number): number;
    randomRange(a: number, b: number, point?: number): number;
    clamp(input: number, min: number, max: number): number;
    binarySearch(arr: number[], target: number): number;
    gcd(a: number, b: number): number;
    gcds(a: number[]): number;
    lcm(a: number, b: number): number;
    lcms(a: number[]): number;
    binarySearchWithSort(arr: number[], target: number): number;
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

if (!Math.gcd) {
  Math.gcd = gcd;
}
if (!Math.gcds) {
  Math.gcds = gcds;
}
if (!Math.lcm) {
  Math.lcm = lcm;
}
if (!Math.lcms) {
  Math.lcms = lcms;
}

if (!Math.binarySearch) {
  Math.binarySearch = binarySearch;
}

if (!Math.binarySearchWithSort) {
  Math.binarySearchWithSort = binarySearchWithSort;
}

if (!Math.randomRange) {
  Math.randomRange = (a: number, b: number, point = 0) =>
    Math.floor10(Math.random() * (b - a + 1) + a, point);
}

if (!Math.clamp) {
  Math.clamp = (input: number, min: number, max: number) => Math.min(Math.max(input, min), max);
}

globalThis.Math = Math;
