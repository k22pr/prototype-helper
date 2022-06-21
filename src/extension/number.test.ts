import "../override/math";
import "./string";
import "./number";

test("number - toComma", () => {
  expect((123).toComma()).toBe("123");
  expect((123456).toComma()).toBe("123,456");
});

test("number - safe operations", () => {
  expect((35).mod(0.8)).toBe(0.6);
  expect((39225.3).mod(0.1)).toBe(0);
  expect((39225.3).mod(0.01)).toBe(0);

  expect((0.1).add(0.2)).toBe(0.3);
  expect((0.3).add(-0.2)).toBe(0.1);

  expect((0.1).sub(0.2)).toBe(-0.1);
  expect((0.1).sub(0.3)).toBe(-0.2);
  expect((0.1).sub(-0.3)).toBe(0.4);

  expect((0.1).mul(0.2)).toBe(0.02);

  expect((0.1).div(0.2)).toBe(0.5);
});
