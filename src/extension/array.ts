import deepClone from "deep-clone";

Array.prototype.where = function (predicate) {
  return this.filter(predicate);
};
Array.prototype.singleOrDefault = function <T, D = T>(
  this: T[],
  predicate: (element: T, index: number) => boolean,
  defaultValue: any = null
): T | D {
  const isset = this.where(predicate);
  if (isset.length >= 2)
    throw new Error("single:sequence contains more than one element.");

  return isset.length ? isset[0] : defaultValue;
};

Array.prototype.single = function (predicate) {
  const isset = this.singleOrDefault(predicate);
  if (isset === null || isset === undefined) throw new Error("single:No element satisfies the condition.");
  return isset;
};

Array.prototype.skip = function (count: number) {
  return this.slice(count, this.length);
};

Array.prototype.take = function (count: number) {
  return this.slice(0, count);
};

Array.prototype.select = function <R>(element: any) {
  return this.map(element) as R[];
};

Array.prototype.any = function (predicate?: any) {
  if (predicate) return this.filter(predicate).length > 0;
  return this.length > 0;
};

Array.prototype.count = function (predicate?: any) {
  let list = this;
  if (predicate) list = this.where(predicate);
  return list.length;
};

Array.prototype.union = function (other: any, selector?: (item: any) => any) {
  return this.concat(other.diff(this, selector));
};

Array.prototype.max = function (selector?: any) {
  const list = selector ? this.map(selector) : this;
  if (list.length === 0) throw new Error("max: Sequence contains no elements.");
  return list.reduce((a: any, b: any) => (a > b ? a : b));
};
Array.prototype.min = function (selector?: any) {
  const list = selector ? this.map(selector) : this;
  if (list.length === 0) throw new Error("min: Sequence contains no elements.");
  return list.reduce((a: any, b: any) => (a < b ? a : b));
};
Array.prototype.sum = function (selector?: any) {
  const list = selector ? this.map(selector) : this;
  return list.reduce((a: any, b: any) => a + b, 0);
};

Array.prototype.firstOrDefault = function <T, D = T>(
  this: T[],
  predicate?: (element: T, index: number) => boolean,
  defaultValue: any = null
): T | D {
  if (predicate == null) predicate = () => true;
  const isset = this.where(predicate);
  return isset == null || isset.length === 0 ? defaultValue : isset[0];
};
Array.prototype.first = function (predicate?: any) {
  if (predicate == null) predicate = () => true;
  const isset = this.firstOrDefault(predicate);
  if (isset === null || isset === undefined)
    throw new Error("first:No element satisfies the condition.");

  return isset;
};

Array.prototype.lastOrDefault = function <T, D = T>(
  this: T[],
  predicate?: (element: T, index: number) => boolean,
  defaultValue: any = null
): T | D {
  if (predicate == null) predicate = () => true;
  const isset = this.where(predicate);
  return isset == null || isset.length === 0
    ? defaultValue
    : isset[isset.length - 1];
};
Array.prototype.last = function (predicate?: any) {
  if (predicate == null) predicate = () => true;
  const isset = this.lastOrDefault(predicate);
  if (isset === null || isset === undefined)
    throw new Error("last:No element satisfies the condition.");

  return isset;
};

Array.prototype.diff = function (other: any[], selector?: (item: any) => any) {
  if (selector) {
    const otherMapped = other.map(selector);
    return this.filter((x: any) => !otherMapped.includes(selector(x)));
  }
  return this.filter((x: any) => !other.includes(x));
};

Array.prototype.inter = function (other: any[], selector?: (item: any) => any) {
  if (selector) {
    const otherMapped = other.map(selector);
    return this.filter((x: any) => otherMapped.includes(selector(x)));
  }
  return this.where((x: any) => other.includes(x));
};

if (!Array.prototype._deepCopy) {
  Array.prototype._deepCopy = function (): any {
    return deepClone(this);
  };
}

if (!Array.prototype._toJson) {
  Array.prototype._toJson = function () {
    return JSON.stringify(this);
  };
}

Array.prototype.groupBy = function (keySelector: any) {
  return this.reduce((storage: any, item: any, index: number) => {
    const key = keySelector(item, index);
    if (!storage[key]) storage[key] = [];
    storage[key].push(item);
    return storage;
  }, {});
};

Array.prototype.distinct = function (selector?: (item: any) => any) {
  if (selector) {
    const set = new Set();
    return this.filter((item) => {
      const value = selector(item);
      if (set.has(value)) return false;
      set.add(value);
      return true;
    });
  }
  return [...new Set(this)];
};

Array.prototype.shuffle = function () {
  const array = [...this];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

Array.prototype.chunk = function (size: number) {
  const result: any[][] = [];
  for (let i = 0; i < this.length; i += size) {
    result.push(this.slice(i, i + size));
  }
  return result;
};
