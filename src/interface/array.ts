interface Array<T> {
  single(predicate: (element: T, index: number) => boolean): T;
  singleOrDefault(predicate: (element: T, index: number) => boolean, defaultValue?: any): T;
  where(predicate: (element: T, index: number) => boolean): T[];
  skip(count: number): T[];
  take(count: number): T[];
  select<R>(predicate: (element: T, index: number) => R): R[];
  any(predicate?: (element: T, index: number) => boolean): boolean;
  count(predicate?: (element: T, index: number) => boolean): number;

  max(predicate?: (element: T, index: number) => boolean): T;
  min(predicate?: (element: T, index: number) => boolean): T;
  sum(predicate?: (element: T, index: number) => boolean): number;

  first(predicate?: (element: T, index: number) => boolean): T;
  firstOrDefault(predicate?: (element: T, index: number) => boolean, defaultValue?: any): T;
  last(predicate?: (element: T, index: number) => boolean): T;
  lastOrDefault(predicate?: (element: T, index: number) => boolean, defaultValue?: any): T;

  // diff(other: T[]): T[];
  // inter(other: T[]): T[];


  // deepClone<T>(camelcase?: boolean): T[];
  _deepCopy<T>(): T[];
  _toJson(): string;
}
