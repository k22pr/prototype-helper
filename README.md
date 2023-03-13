<img src="https://capsule-render.vercel.app/api?type=waving&color=343a40&height=210&section=header&text=Typescript Prototype Helper&fontSize=50&fontAlignY=35&fontColor=adb5bd" />
<!-- <h1 align="center">Typescript Prototype Helper</h1> -->

<p align="center">
 <a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge">
  </a>
 <a href="https://www.npmjs.com/package/prototype-helper">
    <img alt="code style: prettier" src="https://img.shields.io/npm/v/prototype-helper.svg?style=for-the-badge">
  </a>
 <a href="https://github.com/k22pr/prototype-helper/blob/master/LICENSE">
    <img alt="code style: prettier" src="https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge">
  </a>
  <img alt="npm" src="https://img.shields.io/npm/dm/prototype-helper?style=for-the-badge">
  <!-- <img alt="AppVeyor tests (compact)" src="https://img.shields.io/appveyor/tests/k22pr/prototype-helper?compact_message&style=for-the-badge"> -->
  
</p>
<p align="center">
Adds a convenient prototype function package.
</p>

# Getting started

Import the package to the first file you call.

```js
import "prototype-helper";

// and use
console.log("10000".toComma()); // 10,000
```

# Prototype Helper

## Number

### toNumber(): number;

- Returns the primitive value of a Number instance.

- Number 인스턴스의 기본값을 반환하는 메서드입니다.

### toDecimal(): Decimal;

- Converts a Number instance to a Decimal instance.

- Number 인스턴스를 Decimal 인스턴스로 변환하는 메서드입니다.

### toComma(): string;

- Returns a string representation of a number with commas.

- 숫자를 쉼표로 구분한 문자열로 변환하는 메서드입니다.

```ts
expect((3141592).toComma()).toBe("3,141,592");
expect((0).toComma()).toBe("0");
expect((-100000).toComma()).toBe("-100,000");
```

### mod(amp: number): number;

- Calculates the modulo of a number with another number.

- 한 숫자를 다른 숫자로 나눈 나머지를 반환하는 메서드입니다.

```ts
expect((7).mod(3)).toBe(1);
expect((100).mod(7)).toBe(2);
```

### div(value: number): number;

- Divides a number by another number.

- 한 숫자를 다른 숫자로 나눈 결과를 반환하는 메서드입니다.

```ts
expect((10).div(2)).toBe(5);
expect((8).div(3)).toBeCloseTo(2.6667, 4);
```

### mul(value: number): number;

- Multiplies a number by another number.

- 한 숫자에 다른 숫자를 곱한 결과를 반환하는 메서드입니다.

```ts
expect((4).mul(3)).toBe(12);
expect((5).mul(0.5)).toBeCloseTo(2.5, 4);
```

### add(value: number): number;

- Adds another number to a number.

- 한 숫자에 다른 숫자를 더한 결과를 반환하는 메서드입니다.

```ts
expect((8).add(3)).toEqual(11);
expect((100).add(1.25)).toEqual(101.25);
```

### sub(value: number): number;

- Subtracts another number from a number.

- 한 숫자에서 다른 숫자를 뺀 결과를 반환하는 메서드입니다.

```ts
expect((8).sub(3)).toEqual(5);
expect((100).sub(1.25)).toEqual(98.75);
```

### fixNumber(length: number): string;

- Returns a string representation of an integer with fixed length.

- 정수를 지정한 자릿수만큼 0으로 채워 반환하는 메서드입니다.

```ts
expect((1234).fixNumber(8)).toBe("00001234");
expect((1234).fixNumber(4)).toBe("1234");
```

### fixPoint(length: number): string;

- Returns a string representation of a number with fixed decimal places.

- 소수점 이하 자릿수를 맞추어 반환하는 메서드입니다.

```ts
expect((1234).fixPoint(8)).toBe("1234.00000000");
expect((1234.5678).fixPoint(2)).toBe("1234.56");
```

### abs(): number;

- Returns the absolute value of a number.

- 숫자의 절대값을 반환하는 메서드입니다.

```ts
expect((-3).abs()).toBe(3);
expect((3.14).abs()).toBe(3.14);
expect((0).abs()).toBe(0);
```

### isFinite(): boolean;

- Checks if a number is finite.

- 숫자가 유한한지 검사하는 메서드입니다.

```ts
expect((-5).isFinite()).toBe(true);
expect((1 / 0).isFinite()).toBe(false);
expect((-1 / 0).isFinite()).toBe(false);
```

### isNaN(): boolean;

- Checks if a number is NaN.

- 숫자가 NaN인지 검사하는 메서드입니다.

```ts
expect(NaN.isNaN()).toBe(true);
expect((0 / 0).isNaN()).toBe(true);
expect((-1).isNaN()).toBe(false);
```

### isInteger(): boolean;

- Checks if a number is an integer.

- 숫자가 정수인지 검사하는 메서드입니다.

```ts
expect((3).isInteger()).toBe(true);
expect((3.0).isInteger()).toBe(true);
expect((-3.1).isInteger()).toBe(false);
```

### addSymbol(space?: string): string;

- Adds a plus or minus symbol to a number.

- 숫자에 부호 기호를 추가하는 메서드입니다.

```ts
expect((10).addSymbol()).toBe("+10");
expect((0).addSymbol()).toBe("0");
expect((-10).addSymbol()).toBe("-10");
```

### fromPer(per: number): number;

- Calculates a value from a percentage of another value.

- 다른 숫자의 백분율 값을 계산하는 메서드입니다.

```ts
expect((100).fromPer(50)).toBe(50);
expect((200).fromPer(25)).toBe(50);
expect((50).fromPer(10)).toBe(5);
```

### toPer(per: number): number;

- Calculates a percentage of a value.

- 숫자의 백분율 값을 계산하는 메서드입니다.

```ts
expect((50).toPer(100)).toBe(50);
expect((50).toPer(200)).toBe(25);
expect((5).toPer(50)).toBe(10);
```

### pow(value: number): number;

- Returns a number raised to a power.

- 숫자를 지수로 거듭제곱한 결과를 반환하는 메서드입니다.

```ts
expect((10).pow(2)).toEqual(100);
expect((2).pow(10)).toEqual(1024);
```

### normalize(): number;

- Returns a number squared.

- 숫자를 제곱한 결과를 반환하는 메서드입니다.

```ts
expect((2).normalize()).toEqual(4);
expect((3.1415).normalize()).toEqual(9.86902225);
```

### ceil(point?: number): number;

- Rounds a number up to the nearest integer or decimal point.

- 숫자를 가장 가까운 정수나 소수점으로 올림하는 메서드입니다.

```ts
expect((3.14159).ceil()).toBe(4);
expect((3.14159).ceil(1)).toBe(3.2);
expect((1234).ceil(-2)).toBe(1300);
```

### floor(point?: number): number;

- Returns the largest integer less than or equal to a given number.

- 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환합니다.

```ts
expect((3.14159).floor()).toBe(3);
expect((3.14159).floor(1)).toBe(3.1);
expect((1234).floor(-2)).toBe(1200);
```

### round(point?: number): number;

- Returns the value of a number rounded to the nearest integer.

- 주어진 숫자를 가장 가까운 정수로 반올림하여 반환합니다.

```ts
expect((3.14159).round()).toBe(3);
expect((3.14159).round(1)).toBe(3.1);
expect((3.14159).round(3)).toBe(3.142);
expect((1234).round(-2)).toBe(1200);
```

---

## String

### fixPoint(length: number): string;

- Returns a string representation of a number with fixed decimal places.

- 소수점 이하 자릿수를 맞추어 반환하는 메서드입니다.

```ts
const str = "123";
const result = str.fixPoint(2);
expect(result).toEqual("123.00");
```

### fixNumber(length: number): string;

- Returns a string representation of a number with fixed integer digits.

- 정수 자릿수를 맞추어 반환하는 메서드입니다.

```ts
const input = "123.45";
const output = input.fixNumber(5);
expect(output).toBe("00123.45");
```

### leadingChars(chars: string | number, length: number): string;

- Returns a string with specified characters prepended to the original string.

- 문자열의 시작 부분에 주어진 문자열 또는 숫자를 주어진 길이만큼 채우는 메서드입니다.

### toComma(): string;

- Returns a string representation of a number with commas separating groups of thousands.

- 숫자에 쉼표를 추가하여 반환하는 메서드입니다.

```ts
expect("123".toComma()).toBe("123");
expect("1234".toComma()).toBe("1,234");
expect("12345".toComma()).toBe("12,345");
```

### toNumber(): number;

- Returns the number representation of a string.

- 문자열을 숫자로 변환하여 반환하는 메서드입니다.

### addSymbol(space?: string): string;

- Returns a string with a symbol added in front, where the symbol is "+" if the number is positive, "-" if it is negative, or an empty string if it is zero.

- 숫자에 부호를 추가하여 반환하는 메서드입니다.

### fromJSON<T>(): T;

- Parses a JSON string and returns the resulting object.

- JSON 문자열을 파싱하여 객체로 변환하는 메서드입니다.

```ts
const jsonString = '{"name": "John", "age": 30}';
const parsedObject = jsonString.fromJson();
expect(parsedObject).toEqual({ name: "John", age: 30 });
```

### issetWord(word: string): boolean;

- Returns true if the given word exists in the string, false otherwise.

- 주어진 문자열이 해당 문자열에 포함되어 있는지 여부를 반환하는 메서드입니다.

```ts
const string = "The quick brown fox jumps over the lazy dog";
expect(string.issetWord("cat")).toBe(false);
```

### getChar(index: number): string;

- Returns a substring of the string that contains only the character at the specified index.

- 문자열에서 주어진 인덱스에 해당하는 문자를 반환하는 메서드입니다.

```ts
const string = "Hello, world!";
expect(string.getChar(0)).toBe("H");
expect(string.getChar(7)).toBe("w");
```

### isNumber(num: any): boolean;

- Returns true if the given value is a number, false otherwise.

- 주어진 값이 숫자인지 여부를 반환하는 메서드입니다.

## Object

## Array

### single(predicate: (element: T, index: number) => boolean): T;

- Returns the only element of a sequence that satisfies a specified condition, and throws an error if more than one such element exists.

- 조건을 만족하는 시퀀스의 유일한 요소를 반환하며, 해당 조건을 만족하는 요소가 두 개 이상 존재하는 경우 에러를 발생시킵니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.single((x) => x === 3);
expect(result).toBe(3);
```

### singleOrDefault(predicate: (element: T, index: number) => boolean, defaultValue?: any): T;

- Returns the only element of a sequence that satisfies a specified condition or a default value if no such element exists, and throws an error if more than one such element exists.

- 조건을 만족하는 시퀀스의 유일한 요소를 반환하거나, 해당 조건을 만족하는 요소가 없는 경우 기본값을 반환하며, 해당 조건을 만족하는 요소가 두 개 이상 존재하는 경우 에러를 발생시킵니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.singleOrDefault((x) => x === 3);
expect(result).toBe(3);
```

### where(predicate: (element: T, index: number) => boolean): T[];

- Filters a sequence of values based on a predicate.

- 조건에 따라 값을 필터링합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.where((x) => x % 2 === 0);
expect(result).toEqual([2, 4]);
```

### skip(count: number): T[];

- Bypasses a specified number of elements in a sequence and returns the remaining elements.

- 시퀀스에서 지정된 수의 요소를 생략하고 나머지 요소를 반환합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.skip(2);
expect(result).toEqual([3, 4, 5]);
```

### take(count: number): T[];

- Returns a specified number of contiguous elements from the start of a sequence.

- 시퀀스의 시작부터 지정된 수의 연속적인 요소를 반환합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.take(3);
expect(result).toEqual([1, 2, 3]);
```

### select<R>(predicate: (element: T, index: number) => R): R[];

- Projects each element of a sequence into a new form.

- 시퀀스의 각 요소를 새로운 형태로 변환합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.select((x) => x * 2);
expect(result).toEqual([2, 4, 6, 8, 10]);
```

### any(predicate?: (element: T, index: number) => boolean): boolean;

- Determines whether any element of a sequence exists or satisfies a condition.

- 시퀀스에 요소가 하나 이상 존재하는지 또는 조건을 만족하는 요소가 있는지 확인합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.any((x) => x === 3);
expect(result).toBe(true);
```

### count(predicate?: (element: T, index: number) => boolean): number;

- Returns the number of elements in a sequence.

- 시퀀스의 요소 수를 반환합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.count();
expect(result).toBe(5);

const arr = [1, 2, 3, 4, 5];
const result = arr.count((x) => x % 2 === 0);
expect(result).toBe(2);
```

### max(predicate?: (element: T, index: number) => boolean): T;

- Returns the element in the array with the maximum value. The optional predicate parameter can be used to specify a custom condition for the maximum value to be selected.

- 배열에서 가장 큰 값을 가지는 요소를 반환합니다. 선택적 매개변수인 predicate를 사용하여 최대값이 선택되는 조건을 지정할 수 있습니다.

```ts
const arr = [1, 3, 5, 4, 2];
const result = arr.max();
expect(result).toBe(5);
```

### min(predicate?: (element: T, index: number) => boolean): T;

- Returns the element in the array with the minimum value. The optional predicate parameter can be used to specify a custom condition for the minimum value to be selected.

- 배열에서 가장 작은 값을 가지는 요소를 반환합니다. 선택적 매개변수인 predicate를 사용하여 최소값이 선택되는 조건을 지정할 수 있습니다.

```ts
const arr = [1, 3, 5, 4, 2];
const result = arr.min();
expect(result).toBe(1);
```

### sum(predicate?: (element: T, index: number) => boolean): number;

- Returns the sum of all the elements in the array. The optional predicate parameter can be used to specify a custom condition for which elements should be included in the sum.

배열의 모든 요소의 합을 반환합니다. 선택적 매개변수인 predicate를 사용하여 합산할 요소를 지정할 수 있습니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.sum();
expect(result).toBe(15);
```

### first(predicate?: (element: T, index: number) => boolean): T;

- Returns the first element in the array that matches the specified predicate function. If no element matches the predicate, an error is thrown.

- 지정된 predicate 함수와 일치하는 첫 번째 요소를 반환합니다. 일치하는 요소가 없으면 오류가 발생합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.sum((x) => x % 2 === 0);
expect(result).toBe(6);
```

### firstOrDefault(predicate?: (element: T, index: number) => boolean, defaultValue?: any): T;

- Returns the first element in the array that matches the specified predicate function, or a default value if no element matches the predicate.

- 지정된 predicate 함수와 일치하는 첫 번째 요소를 반환합니다. 일치하는 요소가 없으면 기본값을 반환합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.firstOrDefault();
expect(result).toBe(1);
```

### last(predicate?: (element: T, index: number) => boolean): T;

- Returns the last element in the array that matches the specified predicate function. If no element matches the predicate, an error is thrown.

- 지정된 predicate 함수와 일치하는 마지막 요소를 반환합니다. 일치하는 요소가 없으면 오류가 발생합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.last();
expect(result).toBe(5);
```

### lastOrDefault(predicate?: (element: T, index: number) => boolean, defaultValue?: any): T;

- Returns the last element in the array that matches the specified predicate function, or a default value if no element matches the predicate.

- 지정된 predicate 함수와 일치하는 마지막 요소를 반환합니다. 일치하는 요소가 없으면 기본값을 반환합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.lastOrDefault((x) => x % 2 === 0);
expect(result).toBe(4);
```

### diff(other: T[]): T[];

- Returns an array of elements that exist in the current array but not in the other array.

- 현재 배열에서는 존재하지만 다른 배열에는 존재하지 않는 요소들의 배열을 반환합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.diff([1, 5, 6]);
expect(result).toEqual([2, 3, 4]);
```

### inter(other: T[]): T[];

- Returns an array of elements that exist in both the current array and the other array.

- 현재 배열과 다른 배열 모두에 존재하는 요소들의 배열을 반환합니다.

```ts
const arr = [1, 2, 3, 4, 5];
const result = arr.inter([1, 3, 5, 6]);
expect(result).toEqual([1, 3, 5]);
```

### \_deepCopy<T>(): T[];

- Returns a deep copy of the current array.

- 현재 배열의 깊은 복사본을 반환합니다.

### \_toJson(): string;

- Returns a JSON string representation of the current array.

- 현재 배열의 JSON 문자열 표현을 반환합니다.

---

# Extention Helper

## Math

### round10(x: number, point?: number)

### floor10(x: number, point?: number)

### ceil10(x: number, point?: number)

A function that allows you to use decimal points for discarding/rounding/round.

I used the code of the MDN below.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil#decimal_adjustment

```ts
console.log(Math.round10(112.5345, 3)); //112.535
console.log(Math.floor10(112.5345, 3)); //112.534
console.log(Math.ceil10(112.5345, 3)); //112.535
```

### randomRange(a: number, b: number, point?: number)

Create random numbers within that range.

(Includes maximum and minimum values.)

```ts
console.log(Math.randomRange(112.5, 200, 1)); //135.1
console.log(Math.randomRange(0, 200)); //169
```

### clamp(input: number, min: number, max: number)

```ts
console.log(Math.clamp(10, 3, 5)); // 5
console.log(Math.clamp(1, 3, 5)); // 3
console.log(Math.clamp(4, 3, 5)); // 4
```

```

```
