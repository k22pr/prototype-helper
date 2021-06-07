import "./string";
import "./number";

test("number - toComma", () => {
  expect((123).toComma()).toBe("123");
  expect((123456).toComma()).toBe("123,456");
});

test("number - safe operations", () => {
  expect((35).ampersand(0.8)).toBe(0.6);
  expect((0.1).safeAdd(0.2)).toBe(0.3);
  expect((0.1).safeSubtract(0.2)).toBe(-0.1);
  expect((0.1).safeMultiply(0.2)).toBe(0.02);
  expect((0.1).safeDivision(0.2)).toBe(0.5);
});
