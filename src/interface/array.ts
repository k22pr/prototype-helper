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
  union(other: T[]): T[];

  max(predicate?: (element: T, index: number) => boolean): T;
  min(predicate?: (element: T, index: number) => boolean): T;
  sum(predicate?: (element: T, index: number) => boolean): number;

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

  diff(other: T[]): T[];
  inter(other: T[]): T[];

  // deepClone<T>(camelcase?: boolean): T[];
  _deepCopy<R = T[]>(): R;
  _toJson(): string;
}
