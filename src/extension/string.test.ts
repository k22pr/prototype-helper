import "./string";

test("string - toComma()", () => {
  expect("123".toComma().length).toBe(3);
  expect("123456".toComma().length).toBe(7);

  expect("24816246784".toComma()).toBe("24,816,246,784");

  expect("24,816,246,784".toNumber()).toBe(24816246784);
});

test("string - pad extension", () => {
  expect("300".padZero(10)).toBe("0000000300");
});
