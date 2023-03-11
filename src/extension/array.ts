import deepClone from 'deep-clone';

Array.prototype.where = function (predicate) {
  return this.filter(predicate);
};
Array.prototype.singleOrDefault = function (predicate, defaultValue = null) {
  const isset = this.where(predicate);
  if (isset.length >= 2) throw new Error("single:sequence contains more than one element.");

  return !isset ? defaultValue : isset[0];
};

Array.prototype.single = function (predicate) {
  const isset = this.singleOrDefault(predicate);
  if (!isset) throw new Error("single:No element satisfies the condition.");
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
  if (!predicate) predicate = () => true;
  return this.singleOrDefault(predicate) ? true : false;
};

Array.prototype.count = function (predicate?: any) {
  return this.where(predicate).length;
};

Array.prototype.max = function (predicate?: any) {
  let list = this;
  if (predicate) list = this.where(predicate);
  return list.reduce((a: any, b: any) => {
    return a > b ? a : b;
  });
};
Array.prototype.min = function (predicate?: any) {
  let list = this;
  if (predicate) list = this.where(predicate);
  return list.reduce((a: any, b: any) => {
    return a < b ? a : b;
  });
};
Array.prototype.sum = function (predicate?: any) {
  let list = this;
  if (predicate) list = this.where(predicate);
  return list.reduce((a: any, b: any) => {
    return a + b;
  }, 0) as number;
};

Array.prototype.firstOrDefault = function (predicate?: any, defaultValue = null) {
  if (predicate == null) predicate = () => true;
  const isset = this.where(predicate);
  return isset == null || isset.length == 0 ? defaultValue : isset[0];
};
Array.prototype.first = function (predicate?: any) {
  if (predicate == null) predicate = () => true;
  const isset = this.firstOrDefault(predicate);
  if (isset == null) throw new Error("first:No element satisfies the condition.");

  return isset;
};

Array.prototype.lastOrDefault = function (predicate?: any, defaultValue = null) {
  if (predicate == null) predicate = () => true;
  const isset = this.where(predicate);
  return isset == null || isset.length == 0 ? defaultValue : isset[isset.length - 1];
};
Array.prototype.last = function (predicate?: any) {
  if (predicate == null) predicate = () => true;
  const isset = this.lastOrDefault(predicate);
  if (isset == null) throw new Error("last:No element satisfies the condition.");

  return isset;
};

Array.prototype.diff = function (other?: any) {
  return this.where((x: any) => !other.indexOf(x));
};

Array.prototype.inter = function (other?: any) {
  return this.where((x: any) => other.indexOf(x));
};

// Array.prototype.deepClone = function (camelcase: boolean = false) {
//   return deepClone(this, camelcase ? camelCase : undefined);
// }
if (!Array.prototype._deepCopy) {
  Array.prototype._deepCopy = function () {
    return deepClone(this);
  };
}


if (!Array.prototype._toJson) {
  Array.prototype._toJson = function () {
    return JSON.stringify(this);
  };
};