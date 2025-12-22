import deepClone from "deep-clone";

declare global {
  interface Object {
    _deepCopy<T>(): T;
    _toJson(): string;
  }
}

if (!Object.prototype._deepCopy) {
  Object.prototype._deepCopy = function <T>(): T {
    return deepClone(this) as T;
  };
}

if (!Object.prototype._toJson) {
  Object.prototype._toJson = function (): string {
    return JSON.stringify(this);
  };
}
