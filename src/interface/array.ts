interface Array<T> {
  single(predicate: (element: T, index: number) => boolean): T;
  singleOrDefault<D = T>(
    predicate: (element: T, index: number) => boolean,
    defaultValue?: D
  ): T | D;
  where(predicate: (element: T, index: number) => boolean): T[];
  skip(count: number): T[];
  take(count: number): T[];
  select<R>(predicate: (element: T, index: number) => R): R[];
  any(predicate?: (element: T, index: number) => boolean): boolean;
  count(predicate?: (element: T, index: number) => boolean): number;
  union(other: T[], selector?: (element: T) => any): T[];

  max<R = T>(selector?: (element: T, index: number) => R): R;
  min<R = T>(selector?: (element: T, index: number) => R): R;
  sum(selector?: (element: T, index: number) => number): number;

  first(predicate?: (element: T, index: number) => boolean): T;
  firstOrDefault<D = T>(
    predicate?: (element: T, index: number) => boolean,
    defaultValue?: D
  ): T | D;
  last(predicate?: (element: T, index: number) => boolean): T;
  lastOrDefault<D = T>(
    predicate?: (element: T, index: number) => boolean,
    defaultValue?: D
  ): T | D;

  diff(other: T[], selector?: (element: T) => any): T[];
  inter(other: T[], selector?: (element: T) => any): T[];

  groupBy<K extends string | number>(
    keySelector: (element: T, index: number) => K
  ): Record<K, T[]>;
  distinct(selector?: (element: T) => any): T[];
  shuffle(): T[];
  chunk(size: number): T[][];

  _deepCopy<R = T[]>(): R;
  _toJson(): string;
}
