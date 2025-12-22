import "../override/math";
import "./string";
import "./number";
import "./array";
import "./object";

describe("Array.prototype.where", () => {
  it("should filter the array according to the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.where((x) => x % 2 === 0);
    expect(result).toEqual([2, 4]);
  });
});

describe("Array.prototype.singleOrDefault", () => {
  it("should return the single element that satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.singleOrDefault((x) => x === 3);
    expect(result).toBe(3);
  });

  it("should return the defaultValue if no element satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.singleOrDefault((x) => x === 6, "default");
    expect(result).toBe("default");
  });

  it("should throw an error if multiple elements satisfy the predicate function", () => {
    const arr = [1, 2, 3, 2, 5];
    expect(() => {
      arr.singleOrDefault((x) => x === 2);
    }).toThrowError("single:sequence contains more than one element.");
  });
});

describe("Array.prototype.single", () => {
  it("should return the single element that satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.single((x) => x === 3);
    expect(result).toBe(3);
  });

  it("should throw an error if no element satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(() => {
      arr.single((x) => x === 6);
    }).toThrowError("single:No element satisfies the condition.");
  });

  it("should throw an error if multiple elements satisfy the predicate function", () => {
    const arr = [1, 2, 3, 2, 5];
    expect(() => {
      arr.single((x) => x === 2);
    }).toThrowError("single:sequence contains more than one element.");
  });
});

describe("Array.prototype.skip", () => {
  it("should skip the first n elements of the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.skip(2);
    expect(result).toEqual([3, 4, 5]);
  });
});

describe("Array.prototype.take", () => {
  it("should take the first n elements of the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.take(3);
    expect(result).toEqual([1, 2, 3]);
  });
});

describe("Array.prototype.select", () => {
  it("should select a new array with the given function applied to each element", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.select((x) => x * 2);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});

describe("Array.prototype.any", () => {
  it("should return true if any element satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.any((x) => x === 3);
    expect(result).toBe(true);
  });

  it("should return false if no element satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.any((x) => x === 6);
    expect(result).toBe(false);
  });

  it("should return true if no predicate function is given and the array has at least one element", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.any();
    expect(result).toBe(true);
  });

  it("should return false if no predicate function is given and the array is empty", () => {
    const arr = [];
    const result = arr.any();
    expect(result).toBe(false);
  });
});

describe("Array.prototype.count", () => {
  it("should count the number of elements in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.count();
    expect(result).toBe(5);
  });

  it("should count the number of elements that satisfy the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.count((x) => x % 2 === 0);
    expect(result).toBe(2);
  });
});

describe("Array.prototype.max", () => {
  it("should return the maximum element in the array", () => {
    const arr = [1, 3, 5, 4, 2];
    const result = arr.max();
    expect(result).toBe(5);
  });

  it("should return the maximum element that satisfies the predicate function", () => {
    const arr = [1, 3, 5, 4, 2];
    const result = arr.max((x) => x % 2 === 0);
    expect(result).toBe(4);
  });
});

describe("Array.prototype.min", () => {
  it("should return the minimum element in the array", () => {
    const arr = [1, 3, 5, 4, 2];
    const result = arr.min();
    expect(result).toBe(1);
  });

  it("should return the minimum element that satisfies the predicate function", () => {
    const arr = [1, 3, 5, 4, 2];
    const result = arr.min((x) => x % 2 === 0);
    expect(result).toBe(2);
  });
});

describe("Array.prototype.sum", () => {
  it("should return the sum of all elements in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.sum();
    expect(result).toBe(15);
  });

  it("should return the sum of all elements that satisfy the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.sum((x) => x % 2 === 0);
    expect(result).toBe(6);
  });
});

describe("Array.prototype.firstOrDefault", () => {
  it("should return the first element in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.firstOrDefault();
    expect(result).toBe(1);
  });

  it("should return the first element that satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.firstOrDefault((x) => x % 2 === 0);
    expect(result).toBe(2);
  });

  it("should return the default value when no element satisfies the condition", () => {
    const arr = [1, 3, 5, 7, 9];
    const result = arr.firstOrDefault((x) => x % 2 === 0, 0);
    expect(result).toBe(0);
  });
});

describe("Array.prototype.first", () => {
  it("should return the first element in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.first();
    expect(result).toBe(1);
  });

  it("should return the first element that satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.first((x) => x % 2 === 0);
    expect(result).toBe(2);
  });

  it("should throw an exception when no element satisfies the condition", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(() => {
      arr.first((x) => x % 2 === 0);
    }).toThrowError("first:No element satisfies the condition.");
  });
});

describe("Array.prototype.lastOrDefault", () => {
  it("should return the last element in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.lastOrDefault();
    expect(result).toBe(5);
  });

  it("should return the last element that satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.lastOrDefault((x) => x % 2 === 0);
    expect(result).toBe(4);
  });

  it("should return the default value when no element satisfies the condition", () => {
    const arr = [1, 3, 5, 7, 9];
    const result = arr.lastOrDefault((x) => x % 2 === 0, 0);
    expect(result).toBe(0);
  });
});

describe("Array.prototype.last", () => {
  it("should return the last element in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.last();
    expect(result).toBe(5);
  });

  it("should return the last element that satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.last((x) => x % 2 === 0);
    expect(result).toBe(4);
  });

  it("should throw an exception when no element satisfies the condition", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(() => {
      arr.last((x) => x % 2 === 0);
    }).toThrowError("last:No element satisfies the condition.");
  });
});

describe("Array.prototype.diff", () => {
  it("should return an empty array when other is undefined", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.diff([1, 5, 6]);
    expect(result).toEqual([2, 3, 4]);
  });

  it("should return an array of elements that are not in other", () => {
    const arr = [1, 2, 3, 4, 5];
    const other = [3, 4, 5, 6, 7];
    const result = arr.diff(other);
    expect(result).toEqual([1, 2]);
  });
});

describe("Array.prototype.inter", () => {
  it("should return an empty array when other is undefined", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.inter([1, 3, 5, 6]);
    expect(result).toEqual([1, 3, 5]);
  });

  it("should return an array of elements that are in both arrays", () => {
    const arr = [1, 2, 3, 4, 5];
    const other = [3, 4, 5, 6, 7];
    const result = arr.inter(other);
    expect(result).toEqual([3, 4, 5]);
  });

  it("should return an empty array when no common elements", () => {
    const arr = [1, 2, 3];
    const other = [4, 5, 6];
    const result = arr.inter(other);
    expect(result).toEqual([]);
  });
});

describe("Array.prototype.union", () => {
  it("should return the union of two arrays", () => {
    const arr = [1, 2, 3];
    const result = arr.union([3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the original array when other is empty", () => {
    const arr = [1, 2, 3];
    const result = arr.union([]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should return the other array when original is empty", () => {
    const arr: number[] = [];
    const result = arr.union([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should handle duplicate elements correctly", () => {
    const arr = [1, 2, 2, 3];
    const result = arr.union([3, 4, 4, 5]);
    expect(result).toEqual([1, 2, 2, 3, 4, 4, 5]);
  });
});

// 엣지 케이스: 빈 배열 처리
describe("Array edge cases", () => {
  it("max should throw error on empty array", () => {
    const arr: number[] = [];
    expect(() => arr.max()).toThrowError("max: Sequence contains no elements.");
  });

  it("min should throw error on empty array", () => {
    const arr: number[] = [];
    expect(() => arr.min()).toThrowError("min: Sequence contains no elements.");
  });

  it("sum should return 0 on empty array", () => {
    const arr: number[] = [];
    expect(arr.sum()).toBe(0);
  });

  it("count should return 0 on empty array", () => {
    const arr: number[] = [];
    expect(arr.count()).toBe(0);
  });

  it("skip with count greater than length should return empty array", () => {
    const arr = [1, 2, 3];
    expect(arr.skip(5)).toEqual([]);
  });

  it("take with count greater than length should return all elements", () => {
    const arr = [1, 2, 3];
    expect(arr.take(5)).toEqual([1, 2, 3]);
  });

  it("where with no matching elements should return empty array", () => {
    const arr = [1, 2, 3];
    expect(arr.where((x) => x > 10)).toEqual([]);
  });
});

// _deepCopy 및 _toJson 테스트
describe("Array.prototype._deepCopy", () => {
  it("should create a deep copy of the array", () => {
    const arr = [1, 2, 3];
    const copy = arr._deepCopy();
    expect(copy).toEqual([1, 2, 3]);
    expect(copy).not.toBe(arr);
  });

  it("should create a deep copy of nested objects", () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const copy = arr._deepCopy<typeof arr>();
    expect(copy).toEqual([{ a: 1 }, { b: 2 }]);
    expect(copy[0]).not.toBe(arr[0]);
  });
});

describe("Array.prototype._toJson", () => {
  it("should convert array to JSON string", () => {
    const arr = [1, 2, 3];
    expect(arr._toJson()).toBe("[1,2,3]");
  });

  it("should handle nested objects", () => {
    const arr = [{ a: 1 }, { b: 2 }];
    expect(arr._toJson()).toBe('[{"a":1},{"b":2}]');
  });
});

// Object prototype 테스트
describe("Object.prototype._deepCopy", () => {
  it("should create a deep copy of an object", () => {
    const obj = { a: 1, b: { c: 2 } };
    const copy = obj._deepCopy<typeof obj>();
    expect(copy).toEqual({ a: 1, b: { c: 2 } });
    expect(copy).not.toBe(obj);
    expect(copy.b).not.toBe(obj.b);
  });

  it("should handle arrays inside objects", () => {
    const obj = { arr: [1, 2, 3] };
    const copy = obj._deepCopy<typeof obj>();
    expect(copy.arr).toEqual([1, 2, 3]);
    expect(copy.arr).not.toBe(obj.arr);
  });
});

describe("Object.prototype._toJson", () => {
  it("should convert object to JSON string", () => {
    const obj = { a: 1, b: 2 };
    expect(obj._toJson()).toBe('{"a":1,"b":2}');
  });

  it("should handle nested objects", () => {
    const obj = { a: { b: { c: 1 } } };
    expect(obj._toJson()).toBe('{"a":{"b":{"c":1}}}');
  });
});

// 문자열 배열 테스트
describe("Array with strings", () => {
  it("should work with string arrays", () => {
    const arr = ["apple", "banana", "cherry"];
    expect(arr.first()).toBe("apple");
    expect(arr.last()).toBe("cherry");
    expect(arr.count()).toBe(3);
  });

  it("should filter strings correctly", () => {
    const arr = ["apple", "apricot", "banana"];
    const result = arr.where((x) => x.startsWith("a"));
    expect(result).toEqual(["apple", "apricot"]);
  });
});

// 객체 배열 테스트
describe("Array with objects", () => {
  it("should find object by property", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    const result = arr.single((x) => x.id === 2);
    expect(result).toEqual({ id: 2, name: "Bob" });
  });

  it("should select specific properties", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const names = arr.select((x) => x.name);
    expect(names).toEqual(["Alice", "Bob"]);
  });
});
