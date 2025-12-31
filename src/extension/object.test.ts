import "./string";
import "./number";
import "./array";
import "./object";

describe("Object.prototype Extensions", () => {
  describe("_isEmpty", () => {
    it("should return true for empty object", () => {
      expect(({} as any)._isEmpty()).toBe(true);
    });

    it("should return false for non-empty object", () => {
      expect(({ a: 1 } as any)._isEmpty()).toBe(false);
    });
  });

  describe("_pick", () => {
    it("should pick specified keys from object", () => {
      const obj: any = { a: 1, b: 2, c: 3 };
      expect(obj._pick(["a", "c"])).toEqual({ a: 1, c: 3 });
    });

    it("should ignore keys that don't exist", () => {
      const obj: any = { a: 1, b: 2 };
      expect(obj._pick(["a", "c"])).toEqual({ a: 1 });
    });
  });

  describe("_omit", () => {
    it("should omit specified keys from object", () => {
      const obj: any = { a: 1, b: 2, c: 3 };
      expect(obj._omit(["b"])).toEqual({ a: 1, c: 3 });
    });

    it("should ignore keys that don't exist", () => {
      const obj: any = { a: 1, b: 2 };
      expect(obj._omit(["c"])).toEqual({ a: 1, b: 2 });
    });
  });

  describe("_merge", () => {
    it("should merge properties from another object", () => {
      const obj: any = { a: 1 };
      const other = { b: 2 };
      obj._merge(other);
      expect(obj).toEqual({ a: 1, b: 2 });
    });

    it("should overwrite existing properties", () => {
      const obj: any = { a: 1 };
      const other = { a: 2 };
      obj._merge(other);
      expect(obj.a).toBe(2);
    });
  });

  describe("_keys", () => {
    it("should return object keys", () => {
      const obj: any = { a: 1, b: 2 };
      expect(obj._keys().sort()).toEqual(["a", "b"]);
    });
  });

  describe("_values", () => {
    it("should return object values", () => {
      const obj: any = { a: 1, b: 2 };
      expect(obj._values().sort()).toEqual([1, 2]);
    });
  });

  describe("_deepCopy", () => {
    it("should create a deep copy", () => {
      const obj: any = { a: { b: 1 } };
      const copy = obj._deepCopy();
      expect(copy).toEqual(obj);
      expect(copy).not.toBe(obj);
      expect(copy.a).not.toBe(obj.a);
    });
  });

  describe("_toJson", () => {
    it("should return JSON string", () => {
      const obj: any = { a: 1, b: 2 };
      expect(obj._toJson()).toBe('{"a":1,"b":2}');
    });
  });

  describe("_entries", () => {
    it("should return object entries", () => {
      const obj: any = { a: 1, b: 2 };
      expect(obj._entries().sort()).toEqual(
        [
          ["a", 1],
          ["b", 2],
        ].sort()
      );
    });
  });

  describe("_forEach", () => {
    it("should iterate over object entries", () => {
      const obj: any = { a: 1, b: 2 };
      const result: any = {};
      obj._forEach((key: string, value: any) => {
        result[key] = value;
      });
      expect(result).toEqual(obj);
    });
  });
});
