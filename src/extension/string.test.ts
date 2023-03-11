import "../override/math";
import "./string";
import "./number";
import "./array";

describe("String.prototype.leadingChars", () => {
  it("should return a string of specified length with leading characters", () => {
    const str = "123";
    const result = str.leadingChars("0", 5);
    expect(result).toEqual("00123");
  });
});

describe("String.prototype.fixPoint", () => {
  it("should return the original string when no decimal point is present", () => {
    const str = "123";
    const result = str.fixPoint(2);
    expect(result).toEqual("123.00");
  });

  it("should return the original string when the specified length is 0", () => {
    const str = "123.45";
    const result = str.fixPoint(0);
    expect(result).toEqual("123");
  });

  it("should return a fixed-length string with the specified number of decimal places", () => {
    const str = "123.45";
    const result = str.fixPoint(2);
    expect(result).toEqual("123.45");
  });

  it("should round the decimal places correctly when the specified length is less than the actual number of decimal places", () => {
    const str = "123.456";
    const result = str.fixPoint(2);
    expect(result).toEqual("123.45");
  });
});

describe("String.prototype.fixNumber", () => {
  it("should return the same string if no decimal point is present", () => {
    const input = "12345678";
    const output = input.fixNumber(8);
    expect(output).toBe("12345678");
  });

  it("should add leading zeros if the input string is shorter than the specified length", () => {
    const input = "123";
    const output = input.fixNumber(8);
    expect(output).toBe("00000123");
  });

  it("should truncate the decimal part if it is longer than the specified length", () => {
    const input = "123.456789";
    const output = input.fixNumber(5);
    expect(output).toBe("00123.45678");
  });

  it("should not truncate the decimal part if it is shorter than the specified length", () => {
    const input = "123.45";
    const output = input.fixNumber(5);
    expect(output).toBe("00123.45");
  });
});


test("toComma returns correctly formatted string", () => {
  expect("0".toComma()).toBe("0");
  expect("123".toComma()).toBe("123");
  expect("1234".toComma()).toBe("1,234");
  expect("12345".toComma()).toBe("12,345");
  expect("123456".toComma()).toBe("123,456");
  expect("1234567".toComma()).toBe("1,234,567");
  expect("1234.567".toComma()).toBe("1,234.567");
  expect("0.12345".toComma()).toBe("0.12345");
  expect("NaN".toComma()).toBe("0");
  expect("".toComma()).toBe("0");
});

test('String.prototype.fromJson() - should parse JSON string to object', () => {
  const jsonString = '{"name": "John", "age": 30}';
  const parsedObject = jsonString.fromJson();
  expect(parsedObject).toEqual({ name: 'John', age: 30 });
});

test('String.prototype.fromJson() - should throw error for invalid JSON string', () => {
  const invalidJsonString = '{name: "John", age: 30}';
  expect(() => {
    invalidJsonString.fromJson();
  }).toThrow();
});

test('String.prototype.issetWord() - should return true if word exists in string', () => {
  const string = 'The quick brown fox jumps over the lazy dog';
  expect(string.issetWord('fox')).toBe(true);
});

test('String.prototype.issetWord() - should return false if word does not exist in string', () => {
  const string = 'The quick brown fox jumps over the lazy dog';
  expect(string.issetWord('cat')).toBe(false);
});

test('String.prototype.getChar() - should return correct character at given index', () => {
  const string = 'Hello, world!';
  expect(string.getChar(0)).toBe('H');
  expect(string.getChar(7)).toBe('w');
  expect(string.getChar(12)).toBe('!');
});

test('String.prototype.getChar() - should return empty string if index is out of bounds', () => {
  const string = 'Hello, world!';
  expect(string.getChar(-1)).toBe('');
  expect(string.getChar(13)).toBe('');
});
