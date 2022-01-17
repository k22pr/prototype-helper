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

# Prototype Helper

## Number

### toComma()

It is a function that attaches a three-digit comma.

```ts
let test = 123;
test.toComma(); // "123"
test = 123456;
test.toComma(); // "123,456"
//
```

### ampersand()

Ampsand that safely handles floating point errors.

```ts
console.log(35 % 0.8); // 0.5999999999999981
console.log((35).ampersand(0.8)); // 0.6
```

### safeAdd()

Addition to safely handling floating point errors.

Calculate only up to 15 decimal places.

```ts
console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1).safeAdd(0.2)); // 0.3
```

### safeSubtract()

Subtraction that safely handles floating point errors.

Calculate only up to 15 decimal places.

```ts
console.log(0.1 - 0.3); // -0.19999999999999998
console.log((0.1).safeSubtract(0.3)); // 0.2
```

### safeDivision()

Division that safely handles floating point errors.

Calculate only up to 15 decimal places.

```ts
console.log(0.2 / 0.6); // 0.33333333333333337
console.log((0.2).safeDivision(0.6)); // 0.3333333333333333
```

### safeMultiply()

Division that safely handles floating point errors.

Calculate only up to 15 decimal places.

```ts
console.log(0.1 * 0.2); // 0.020000000000000004
console.log((0.1).safeMultiply(0.2)); // 0.02
```

### fixNumber()

Fix the number of digits to be marked.

```ts
console.log("30222.50380000".fixPoint(5)); // 30222.50380
console.log((30222).fixPoint(3)); // 30222.000
console.log((30222.12).fixPoint(5).toComma()); // 30,222.12000
```

### fixPoint()

Fix the decimal place to be marked.

```ts
console.log("30222.50380000".fixPoint(5)); // 30222.50380
console.log((30222).fixPoint(3)); // 30222.000
console.log((30222.12).fixPoint(5).toComma()); // 30,222.12000
```

---

## String

### toComma()

It is a function that attaches a three-digit comma.

```ts
let test = "123";
test.toComma(); // "123"
test = "123456";
test.toComma(); // "123,456"
//
```

### fixNumber()

Fix the number of digits to be marked.

```ts
console.log("30222".fixPoint(5)); // 30222
console.log("30222".fixPoint(5)); // 30222
```

### fixPoint()

Fix the decimal place to be marked.

```ts
console.log("30222.50380000".fixPoint(5)); // 30222.50380
console.log((30222).fixPoint(3)); // 30222.000
console.log((30222.12).fixPoint(5).toComma()); // 30,222.12000
console.log("30222.50380000".fixPoint(8).fixNumber(8)); // 00030222.50380000
```

## Object

## Array

---

# Override Helper

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
