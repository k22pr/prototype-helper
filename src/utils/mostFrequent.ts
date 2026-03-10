export function gcd(a: number, b: number) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
export function gcds(a: number[]) {
  return a.reduce(gcd);
}

export function lcm(a: number, b: number) {
  return (a * b) / gcd(a, b);
}
export function lcms(a: number[]) {
  return a.reduce(lcm);
}
