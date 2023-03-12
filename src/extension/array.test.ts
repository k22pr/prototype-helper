import "../override/math";
import "./string";
import "./number";
import "./array";

describe("Array.prototype.where", () => {
  it("should filter the array according to the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.where(x => x % 2 === 0);
    expect(result).toEqual([2, 4]);
  });
});

describe("Array.prototype.singleOrDefault", () => {
  it("should return the single element that satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.singleOrDefault(x => x === 3);
    expect(result).toBe(3);
  });

  it("should return the defaultValue if no element satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.singleOrDefault(x => x === 6, "default");
    expect(result).toBe("default");
  });

  it("should throw an error if multiple elements satisfy the predicate function", () => {
    const arr = [1, 2, 3, 2, 5];
    expect(() => {
      arr.singleOrDefault(x => x === 2);
    }).toThrowError("single:sequence contains more than one element.");
  });
});

describe("Array.prototype.single", () => {
  it("should return the single element that satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.single(x => x === 3);
    expect(result).toBe(3);
  });

  it("should throw an error if no element satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(() => {
      arr.single(x => x === 6);
    }).toThrowError("single:No element satisfies the condition.");
  });

  it("should throw an error if multiple elements satisfy the predicate function", () => {
    const arr = [1, 2, 3, 2, 5];
    expect(() => {
      arr.single(x => x === 2);
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
    const result = arr.select(x => x * 2);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});

describe("Array.prototype.any", () => {
  it("should return true if any element satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.any(x => x === 3);
    expect(result).toBe(true);
  });

  it("should return false if no element satisfies the predicate function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.any(x => x === 6);
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
    const result = arr.count(x => x % 2 === 0);
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
    const result = arr.max(x => x % 2 === 0);
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
    const result = arr.min(x => x % 2 === 0);
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
    const result = arr.sum(x => x % 2 === 0);
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
    const result = arr.firstOrDefault(x => x % 2 === 0);
    expect(result).toBe(2);
  });

  it("should return the default value when no element satisfies the condition", () => {
    const arr = [1, 3, 5, 7, 9];
    const result = arr.firstOrDefault(x => x % 2 === 0, 0);
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
    const result = arr.first(x => x % 2 === 0);
    expect(result).toBe(2);
  });

  it("should throw an exception when no element satisfies the condition", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(() => {
      arr.first(x => x % 2 === 0);
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
    const result = arr.lastOrDefault(x => x % 2 === 0);
    expect(result).toBe(4);
  });

  it("should return the default value when no element satisfies the condition", () => {
    const arr = [1, 3, 5, 7, 9];
    const result = arr.lastOrDefault(x => x % 2 === 0, 0);
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
    const result = arr.last(x => x % 2 === 0);
    expect(result).toBe(4);
  });

  it("should throw an exception when no element satisfies the condition", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(() => {
      arr.last(x => x % 2 === 0);
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
});
