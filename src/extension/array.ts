import deepClone from "deep-clone";

// 배열 필터링 - C# LINQ의 Where와 동일
if (!Array.prototype.where) {
  Object.defineProperty(Array.prototype, "where", {
    value: function (predicate: any) {
      return this.filter(predicate);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 조건에 맞는 단일 요소 반환 (없으면 기본값, 2개 이상이면 에러)
if (!Array.prototype.singleOrDefault) {
  Object.defineProperty(Array.prototype, "singleOrDefault", {
    value: function <T, D = T>(
      this: T[],
      predicate: (element: T, index: number) => boolean,
      defaultValue: any = null
    ): T | D {
      const isset = this.where(predicate);
      if (isset.length >= 2) throw new Error("single:sequence contains more than one element.");
      return isset.length ? isset[0] : defaultValue;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 조건에 맞는 단일 요소 반환 (없으면 에러)
if (!Array.prototype.single) {
  Object.defineProperty(Array.prototype, "single", {
    value: function (predicate: any) {
      const isset = this.singleOrDefault(predicate);
      if (isset === null || isset === undefined)
        throw new Error("single:No element satisfies the condition.");
      return isset;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 앞에서 n개 건너뛰기
if (!Array.prototype.skip) {
  Object.defineProperty(Array.prototype, "skip", {
    value: function (count: number) {
      return this.slice(count, this.length);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 앞에서 n개 가져오기
if (!Array.prototype.take) {
  Object.defineProperty(Array.prototype, "take", {
    value: function (count: number) {
      return this.slice(0, count);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 각 요소를 변환 (map과 동일)
if (!Array.prototype.select) {
  Object.defineProperty(Array.prototype, "select", {
    value: function <R>(element: any) {
      return this.map(element) as R[];
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 조건에 맞는 요소가 하나라도 있는지 확인
if (!Array.prototype.any) {
  Object.defineProperty(Array.prototype, "any", {
    value: function (predicate?: any) {
      if (predicate) return this.filter(predicate).length > 0;
      return this.length > 0;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 요소 개수 반환
if (!Array.prototype.count) {
  Object.defineProperty(Array.prototype, "count", {
    value: function (predicate?: any) {
      let list = this;
      if (predicate) list = this.where(predicate);
      return list.length;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 두 배열의 합집합
if (!Array.prototype.union) {
  Object.defineProperty(Array.prototype, "union", {
    value: function (other: any, selector?: (item: any) => any) {
      return this.concat(other.diff(this, selector));
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 최대값 반환
if (!Array.prototype.max) {
  Object.defineProperty(Array.prototype, "max", {
    value: function (selector?: any) {
      const list = selector ? this.map(selector) : this;
      if (list.length === 0) throw new Error("max: Sequence contains no elements.");
      return list.reduce((a: any, b: any) => (a > b ? a : b));
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 최소값 반환
if (!Array.prototype.min) {
  Object.defineProperty(Array.prototype, "min", {
    value: function (selector?: any) {
      const list = selector ? this.map(selector) : this;
      if (list.length === 0) throw new Error("min: Sequence contains no elements.");
      return list.reduce((a: any, b: any) => (a < b ? a : b));
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 합계 반환
if (!Array.prototype.sum) {
  Object.defineProperty(Array.prototype, "sum", {
    value: function (selector?: any) {
      const list = selector ? this.map(selector) : this;
      return list.reduce((a: any, b: any) => a + b, 0);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 첫 번째 요소 반환 (없으면 기본값)
if (!Array.prototype.firstOrDefault) {
  Object.defineProperty(Array.prototype, "firstOrDefault", {
    value: function <T, D = T>(
      this: T[],
      predicate?: (element: T, index: number) => boolean,
      defaultValue: any = null
    ): T | D {
      if (predicate == null) predicate = () => true;
      const isset = this.where(predicate);
      return isset == null || isset.length === 0 ? defaultValue : isset[0];
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 첫 번째 요소 반환 (없으면 에러)
if (!Array.prototype.first) {
  Object.defineProperty(Array.prototype, "first", {
    value: function (predicate?: any) {
      if (predicate == null) predicate = () => true;
      const isset = this.firstOrDefault(predicate);
      if (isset === null || isset === undefined)
        throw new Error("first:No element satisfies the condition.");
      return isset;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 마지막 요소 반환 (없으면 기본값)
if (!Array.prototype.lastOrDefault) {
  Object.defineProperty(Array.prototype, "lastOrDefault", {
    value: function <T, D = T>(
      this: T[],
      predicate?: (element: T, index: number) => boolean,
      defaultValue: any = null
    ): T | D {
      if (predicate == null) predicate = () => true;
      const isset = this.where(predicate);
      return isset == null || isset.length === 0 ? defaultValue : isset[isset.length - 1];
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 마지막 요소 반환 (없으면 에러)
if (!Array.prototype.last) {
  Object.defineProperty(Array.prototype, "last", {
    value: function (predicate?: any) {
      if (predicate == null) predicate = () => true;
      const isset = this.lastOrDefault(predicate);
      if (isset === null || isset === undefined)
        throw new Error("last:No element satisfies the condition.");
      return isset;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 차집합 (this에만 있는 요소)
if (!Array.prototype.diff) {
  Object.defineProperty(Array.prototype, "diff", {
    value: function (other: any[], selector?: (item: any) => any) {
      if (selector) {
        const otherMapped = other.map(selector);
        return this.filter((x: any) => !otherMapped.includes(selector(x)));
      }
      return this.filter((x: any) => !other.includes(x));
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 교집합 (양쪽에 모두 있는 요소)
if (!Array.prototype.inter) {
  Object.defineProperty(Array.prototype, "inter", {
    value: function (other: any[], selector?: (item: any) => any) {
      if (selector) {
        const otherMapped = other.map(selector);
        return this.filter((x: any) => otherMapped.includes(selector(x)));
      }
      return this.where((x: any) => other.includes(x));
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 깊은 복사
if (!Array.prototype._deepCopy) {
  Object.defineProperty(Array.prototype, "_deepCopy", {
    value: function (): any {
      return deepClone(this);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// JSON 문자열로 변환
if (!Array.prototype._toJson) {
  Object.defineProperty(Array.prototype, "_toJson", {
    value: function () {
      return JSON.stringify(this);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 키 기준으로 그룹화
if (!Array.prototype.groupBy) {
  Object.defineProperty(Array.prototype, "groupBy", {
    value: function (keySelector: any) {
      return this.reduce((storage: any, item: any, index: number) => {
        const key = keySelector(item, index);
        if (!storage[key]) storage[key] = [];
        storage[key].push(item);
        return storage;
      }, {});
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 중복 제거
if (!Array.prototype.distinct) {
  Object.defineProperty(Array.prototype, "distinct", {
    value: function (selector?: (item: any) => any) {
      if (selector) {
        const set = new Set();
        return this.filter((item: any) => {
          const value = selector(item);
          if (set.has(value)) return false;
          set.add(value);
          return true;
        });
      }
      return [...new Set(this)];
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 배열 섞기
if (!Array.prototype.shuffle) {
  Object.defineProperty(Array.prototype, "shuffle", {
    value: function () {
      const array = [...this];
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}

// 배열을 n개씩 분할
if (!Array.prototype.chunk) {
  Object.defineProperty(Array.prototype, "chunk", {
    value: function (size: number) {
      const result: any[][] = [];
      for (let i = 0; i < this.length; i += size) {
        result.push(this.slice(i, i + size));
      }
      return result;
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}
