import deepClone from "deep-clone";

if (!Object.prototype._deepCopy) {
  Object.defineProperty(Object.prototype, "_deepCopy", {
    value: function <T>(): T {
      return deepClone(this) as T;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

if (!Object.prototype._toJson) {
  Object.defineProperty(Object.prototype, "_toJson", {
    value: function (): string {
      return JSON.stringify(this);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

if (!Object.prototype._isEmpty) {
  Object.defineProperty(Object.prototype, "_isEmpty", {
    value: function (): boolean {
      return Object.keys(this).length === 0;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

if (!Object.prototype._pick) {
  Object.defineProperty(Object.prototype, "_pick", {
    value: function (keys: string[] | any[]): any {
      const result: any = {};
      for (const key of keys) {
        if (key in this) {
          result[key] = (this as any)[key];
        }
      }
      return result;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

if (!Object.prototype._omit) {
  Object.defineProperty(Object.prototype, "_omit", {
    value: function (keys: string[] | any[]): any {
      const result: any = { ...this };
      for (const key of keys) {
        delete result[key];
      }
      return result;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

if (!Object.prototype._merge) {
  Object.defineProperty(Object.prototype, "_merge", {
    value: function (other: object): any {
      return Object.assign(this, other);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

if (!Object.prototype._keys) {
  Object.defineProperty(Object.prototype, "_keys", {
    value: function (): string[] {
      return Object.keys(this);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

if (!Object.prototype._values) {
  Object.defineProperty(Object.prototype, "_values", {
    value: function (): any[] {
      return Object.values(this);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

if (!Object.prototype._entries) {
  Object.defineProperty(Object.prototype, "_entries", {
    value: function (): [string, any][] {
      return Object.entries(this);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

if (!Object.prototype._forEach) {
  Object.defineProperty(Object.prototype, "_forEach", {
    value: function (callback: (key: string, value: any, index: number) => void): void {
      Object.entries(this).forEach(([key, value], index) => {
        callback(key, value, index);
      });
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}
