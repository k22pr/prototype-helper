import "./index";

console.useTheme();
// import "../dist";

// console.log("hello");
// console.warn("warn log");
// console.error("error log");

console.log("300".fixPoint(10));
// console.log("300".toComma(10));
// console.log("24816246784".toComma());
// console.log("24816246784".toNumber());

// console.log((24816246784).toComma());

// console.log(35 % 0.8);
//0.5999999999999981
// console.log((35).ampersand(0.8));
//0.6

// console.log(0.1 * 0.2);
// console.log((0.1).safeMultiply(0.2));
// console.log(0.2 / 0.2);
// console.log((0.1).safeAdd(0.2)); // 0.6
// console.log((0.3).safeAdd(-0.2));

// console.log((0.1).safeSubtract(0.3)); // 0.6
console.log((35).mod(0.8)); // 0.6
console.log((39225.3).mod(0.1), 0); // 0
console.log((39225.3).mod(0.01), 0); // 0
// console.log((0.2).safeDivision(0.6)); // 0.8333333333333334
// console.log((0.1).safeMultiply(0.2)); // 0.02

//////////////////////////////////////////////////////////////////////////

// console.log(Math.round10(112.5345, 3));
// console.log(Math.floor10(112.5345, 3));
// console.log(Math.ceil10(112.5345, 3));
// // console.log(Math.round(112.5));
// console.log(Math.randomRange(112.5, 200, 1));
// console.log(Math.randomRange(112.5, 200, 0));
// for (var i = 0; i < 10; i++) {
//   console.log(Math.randomRange(4, 5));
// }

////////////////////////////////////////////////////////////////////////////

console.log("123".toComma());
// console.log((1).fixNumber(5));
// console.log((3022).fixNumber(1));

// console.log((30222.12).fixNumber(8));
// console.log((30222.12).fixNumber(8).toComma());

// console.log("30222.50380000".fixPoint(8).fixNumber(8));
console.log("30222.50380000".fixPoint(5));
console.log("30222.50380000".fixPoint(5).toComma());

// console.log((30222).fixPoint(3));
// console.log((30222.12).fixPoint(5).toComma());
// console.log((30222.12).toComma().pointPad(5));
// console.log("30222.12".pointPad(5));

// console.log(Math.clamp(10, 3, 5));
// console.log(Math.clamp(1, 3, 5));
// console.log(Math.clamp(4, 3, 5));

const hello = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(hello.singleOrDefault((e) => e == 99));
console.log(hello.skip(3).take(5));
console.log(hello.skip(1).skip(1));
const test = hello.take(9).select((now, index) => {
  return {
    id: now,
    index,
    name: "test",
  };
});
console.log(test);
console.log(hello.skip(1).count());
console.log(test.max((now) => now.id));
console.log(test.min((now) => now.id));
console.log(test.sum((now) => now.id));
console.log(test.first((now) => now.id % 3 == 0));
console.log(test.firstOrDefault((now) => now.id % 99 == 0, 991));
console.log(test.last((now) => now.id % 3 == 0));
console.log(test.lastOrDefault((now) => now.id % 3 == 4, 991));
// console.log(hello.single((now) => now == 3));

console.log((134.5).addSymbol());
console.log((0).addSymbol());
console.log((-1.345).addSymbol());

console.log((134.5).addSymbol(" "));
console.log((134.5).addSymbol("   "));

console.log((134.5).per(50));
console.log((134.5).per(33));
console.log((134.5).per(72));
console.log((100).per(50));
console.log((100).per(1250));
console.log((300).per(10));

console.log((2 ** 256 + 0.213445).toComma().fixPoint(10));


console.info("test1");
console.warn("test2");
console.error("test3");

const aaa = [1, 2, 3, 4, 5];
console.log(aaa.toJson());
const bbb = aaa.deepClone();
const ccc = `[1,2,3,4,5]`;
console.log(aaa, bbb, aaa === bbb);
console.log(ccc.fromJson());


// hello.findIndex;
