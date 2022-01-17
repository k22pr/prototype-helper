# Typescript Prototype Helper

Adds a convenient prototype function package.

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

## Object

## Array

### toComma

---

# Override Helper

## Math

### round10()

### floor10()

### ceil10()

A function that allows you to use decimal points for discarding/rounding/round.

I used the code of the MDN below.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil#decimal_adjustment

```ts
console.log(Math.round10(112.5345, 3)); //112.535
console.log(Math.floor10(112.5345, 3)); //112.534
console.log(Math.ceil10(112.5345, 3)); //112.535
```

### randomRange()

Create random numbers within that range.

(Includes maximum and minimum values.)

```ts
console.log(Math.randomRange(112.5, 200, 1)); //135.1
console.log(Math.randomRange(0, 200, 0)); //169
```
