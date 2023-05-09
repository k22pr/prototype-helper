function findMostFrequentNumber(arr: number[]): number {
  const frequencyMap: Map<number, number> = new Map();
  let maxFrequency = 0;
  let mostFrequentNumber: number;

  for (const num of arr) {
    const frequency = (frequencyMap.get(num) ?? 0) + 1;
    frequencyMap.set(num, frequency);

    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mostFrequentNumber = num;
    }
  }

  return mostFrequentNumber!;
}

function sortByMostFrequent(arr: number[]): number[] {
  const frequencyMap: Map<number, number> = new Map();

  for (const num of arr) {
    const frequency = (frequencyMap.get(num) ?? 0) + 1;
    frequencyMap.set(num, frequency);
  }

  return arr.sort((a, b) => {
    const frequencyDiff = frequencyMap.get(b)! - frequencyMap.get(a)!;

    if (frequencyDiff !== 0) {
      return frequencyDiff;
    } else {
      return a - b;
    }
  });
}

export function gcd(a: number, b: number) {
  if (b == 0) {
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