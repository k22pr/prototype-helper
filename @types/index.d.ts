export {};

declare global {
  interface Math {
    round10(x: number, point?: number): number;
    floor10(x: number, point?: number): number;
    ceil10(x: number, point?: number): number;
  }
}

interface Math {
  round10(x: number, point?: number): number;
  floor10(x: number, point?: number): number;
  ceil10(x: number, point?: number): number;
}
