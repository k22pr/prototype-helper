import "./string";
import "./number";

test("string - toComma()", () => {
  expect("123".toComma()).toBe("123");
  expect("123456".toComma()).toBe("123,456");

  expect("24816246784".toComma()).toBe("24,816,246,784");

  expect("24,816,246,784".toNumber()).toBe(24816246784);
});

test("string - pad extension", () => {
  expect("300".fixPoint(3)).toBe("300.000");
  expect((30222.12).fixPoint(5)).toBe("30222.12000");
  expect("30222.50380000".fixPoint(5).toComma()).toBe("30,222.50380");
  expect((30222.12).fixPoint(3).toComma()).toBe("30,222.120");
});
