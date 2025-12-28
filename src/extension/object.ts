import deepClone from "deep-clone";

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

Object.prototype._isEmpty = function (): boolean {
  return Object.keys(this).length === 0;
};

Object.prototype._pick = function (keys: string[] | any[]): any {
  const result: any = {};
  for (const key of keys) {
    if (key in this) {
      result[key] = (this as any)[key];
    }
  }
  return result;
};

Object.prototype._omit = function (keys: string[] | any[]): any {
  const result: any = { ...this };
  for (const key of keys) {
    delete result[key];
  }
  return result;
};

Object.prototype._merge = function (other: object): any {
  return Object.assign(this, other);
};

Object.prototype._keys = function (): string[] {
  return Object.keys(this);
};

Object.prototype._values = function (): any[] {
  return Object.values(this);
};
