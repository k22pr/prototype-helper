import Decimal from "decimal.js";
import "../override/math";
import "./string";
import "./number";
import "./array";

describe("Number.prototype.toNumber", () => {
  test("converts to number", () => {
    expect(Math.PI.toNumber()).toBe(Math.PI);
    expect((12345).toNumber()).toBe(12345);
    expect("1.23".toNumber()).toBe(1.23);
    expect("12345".toNumber()).toBe(12345);
    expect(Number.NaN.toNumber()).toBeNaN();
    expect(Number.POSITIVE_INFINITY.toNumber()).toBe(Number.POSITIVE_INFINITY);
  });
});

describe("Number.prototype.toDecimal", () => {
  test("converts to Decimal", () => {
    expect(Math.PI.toDecimal()).toStrictEqual(new Decimal(Math.PI));
    expect((12345).toDecimal()).toStrictEqual(new Decimal(12345));
    expect(Number.NaN.toDecimal().isNaN()).toBeTruthy();
    expect(Number.POSITIVE_INFINITY.toDecimal().isFinite()).toBeFalsy();
  });
});

describe("Number prototype 기본 확장 테스트", () => {
  test("toNumber", () => {
    expect((10).toNumber()).toBe(10);
    expect(Math.PI.toNumber()).toBe(Math.PI);
    expect((0).toNumber()).toBe(0);
  });

  test("toComma", () => {
    expect((100000).toComma()).toBe("100,000");
    expect((3333333).toComma()).toBe("3,333,333");
    expect((0).toComma()).toBe("0");
    expect((-100000).toComma()).toBe("-100,000");
    expect((1.23).toComma()).toBe("1.23");
    expect((-1.23).toComma()).toBe("-1.23");
  });
});

describe("Number Extension Test", () => {
  describe("mod", () => {
    it("should return correct mod", () => {
      expect((7).mod(3)).toBe(1);
      expect((100).mod(7)).toBe(2);
      expect((23).mod(23)).toBe(0);
    });
  });

  describe("div", () => {
    it("should return correct division", () => {
      expect((10).div(2)).toBe(5);
      expect((8).div(3)).toBeCloseTo(2.6667, 4);
      expect((7).div(7)).toBe(1);
    });
  });

  describe("mul", () => {
    it("should return correct multiplication", () => {
      expect((4).mul(3)).toBe(12);
      expect((5).mul(0.5)).toBeCloseTo(2.5, 4);
      expect((2).mul(2)).toBe(4);
    });
  });

  describe("toNumber", () => {
    test("should return correct number", () => {
      expect((100).toNumber()).toEqual(100);
      expect((0).toNumber()).toEqual(0);
      expect(Math.PI.toNumber()).toEqual(Math.PI);
      expect((-10).toNumber()).toEqual(-10);
    });
  });

  describe("toComma", () => {
    test("should return correct comma-separated string", () => {
      expect((100).toComma()).toEqual("100");
      expect((0).toComma()).toEqual("0");
      expect((1000).toComma()).toEqual("1,000");
      expect((-12345.6789).toComma()).toEqual("-12,345.6789");
    });
  });

  describe("mod", () => {
    test("should return correct mod value", () => {
      expect((10).mod(3)).toEqual(1);
      expect((5).mod(5)).toEqual(0);
      expect((100).mod(7)).toEqual(2);
    });
  });

  describe("div", () => {
    test("should return correct division value", () => {
      expect((10).div(5)).toEqual(2);
      expect((8).div(3)).toEqual(2.6666666666666665);
      expect((100).div(1.25)).toEqual(80);
    });
  });

  describe("mul", () => {
    test("should return correct multiplication value", () => {
      expect((10).mul(5)).toEqual(50);
      expect((8).mul(3)).toEqual(24);
      expect((100).mul(1.25)).toEqual(125);
    });
  });

  describe("add", () => {
    test("should return correct addition value", () => {
      expect((10).add(5)).toEqual(15);
      expect((8).add(3)).toEqual(11);
      expect((100).add(1.25)).toEqual(101.25);
    });
  });

  describe("sub", () => {
    test("should return correct subtraction value", () => {
      expect((10).sub(5)).toEqual(5);
      expect((8).sub(3)).toEqual(5);
      expect((100).sub(1.25)).toEqual(98.75);
    });
  });

  describe("pow", () => {
    test("should return correct power value", () => {
      expect((10).pow(2)).toEqual(100);
      expect((2).pow(10)).toEqual(1024);
      expect(Math.PI.pow(2)).toBeCloseTo(Math.PI ** 2, 8);
    });
  });

  describe("normalize", () => {
    test("should return correct square value", () => {
      expect((10).normalize()).toEqual(100);
      expect((2).normalize()).toEqual(4);
      expect(Math.PI.normalize()).toBeCloseTo(Math.PI ** 2, 8);
    });
  });

  describe("fixNumber", () => {
    it("should return a string with fixed length", () => {
      expect((1234).fixNumber(8)).toBe("00001234");
      expect((1234).fixNumber(4)).toBe("1234");
      expect((1234.5678).fixNumber(5)).toBe("01234.5678");
      expect((-1234.5678).fixNumber(5)).toBe("-01234.5678");
    });
  });

  describe("fixPoint", () => {
    it("should return a string with fixed decimal points", () => {
      expect((1234).fixPoint(8)).toBe("1234.00000000");
      expect((1234.5678).fixPoint(8)).toBe("1234.56780000");
      expect((1234.5678).fixPoint(2)).toBe("1234.56");
      expect((-1234.5678).fixPoint(3)).toBe("-1234.567");
    });
  });

  describe("abs()", () => {
    it("should return absolute value of a number", () => {
      expect((-3).abs()).toBe(3);
      expect(Math.PI.abs()).toBe(Math.PI);
      expect((0).abs()).toBe(0);
    });
  });

  describe("isFinite()", () => {
    it("should return true if a number is finite", () => {
      expect((0.1).isFinite()).toBe(true);
      expect((-5).isFinite()).toBe(true);
      expect((1 / 0).isFinite()).toBe(false);
      expect((-1 / 0).isFinite()).toBe(false);
      expect((0 / 0).isFinite()).toBe(false);
    });
  });

  describe("isNaN()", () => {
    it("should return true if a number is NaN", () => {
      expect(Number.NaN.isNaN()).toBe(true);
      expect((0 / 0).isNaN()).toBe(true);
      expect((-1).isNaN()).toBe(false);
      expect((0).isNaN()).toBe(false);
      expect((1).isNaN()).toBe(false);
    });
  });

  describe("isInteger()", () => {
    it("should return true if a number is integer", () => {
      expect((-3).isInteger()).toBe(true);
      expect((3).isInteger()).toBe(true);
      expect((3.0).isInteger()).toBe(true);
      expect((-3.1).isInteger()).toBe(false);
      expect((3.1).isInteger()).toBe(false);
    });
  });

  test("addSymbol: add plus sign with space", () => {
    expect((10).addSymbol()).toBe("+10");
    expect((0).addSymbol()).toBe("0");
    expect((-10).addSymbol()).toBe("-10");
    expect((10).addSymbol(" ")).toBe("+ 10");
    expect((-10).addSymbol(" ")).toBe("- 10");
  });

  test("percentOf: convert from percent to decimal", () => {
    expect((100).percentOf(50)).toBe(50);
    expect((200).percentOf(25)).toBe(50);
    expect((50).percentOf(10)).toBe(5);
  });

  test("toPercent: convert from decimal to percent", () => {
    expect((50).toPercent(100)).toBe(50);
    expect((50).toPercent(200)).toBe(25);
    expect((5).toPercent(50)).toBe(10);
  });

  describe("addSymbol", () => {
    it("adds plus symbol if the number is positive", () => {
      const num = 5;
      const numWithPlus = num.addSymbol();
      expect(numWithPlus).toBe("+5");
    });

    it("adds space before the number if space is given as an argument", () => {
      const num = -10;
      const numWithSpace = num.addSymbol(" ");
      expect(numWithSpace).toBe("- 10");
    });

    it("adds both plus symbol and space if both arguments are given", () => {
      const num = 123;
      const numWithPlusAndSpace = num.addSymbol(" ");
      expect(numWithPlusAndSpace).toBe("+ 123");
    });
  });

  describe("Number.prototype", () => {
    test("ceil", () => {
      expect(Math.PI.ceil()).toBe(4);
      expect(Math.PI.ceil(1)).toBe(3.2);
      expect((1234).ceil(-2)).toBe(1300);
    });

    test("floor", () => {
      expect(Math.PI.floor()).toBe(3);
      expect(Math.PI.floor(1)).toBe(3.1);
      expect((1234).floor(-2)).toBe(1200);
    });

    test("round", () => {
      expect(Math.PI.round()).toBe(3);
      expect(Math.PI.round(1)).toBe(3.1);
      expect(Math.PI.round(3)).toBe(3.142);
      expect((1234).round(-2)).toBe(1200);
    });

    test("toFileSize", () => {
      expect((1024).toFileSize()).toBe("1.00KB");
      expect((1048576).toFileSize()).toBe("1.00MB");
      expect((500).toFileSize()).toBe("500.00B");
    });

    test("isBetween", () => {
      expect((5).isBetween(1, 10)).toBe(true);
      expect((1).isBetween(1, 10)).toBe(true);
      expect((10).isBetween(1, 10)).toBe(true);
      expect((0).isBetween(1, 10)).toBe(false);
      expect((11).isBetween(1, 10)).toBe(false);
    });
  });
});
