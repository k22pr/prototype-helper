interface Array<T> {
  single(predicate: (value: T, index: T, obj: T[]) => unknown): T;
}

// const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// test.findIndex;