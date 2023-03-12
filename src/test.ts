import "./index";
// import "./extension";
// import "../dist";

// console.useTheme();

// // console.log("hello");
// // console.warn("warn log");
// // console.error("error log");

// console.log("300".fixPoint(10));
// // console.log("300".toComma(10));
// // console.log("24816246784".toComma());
// // console.log("24816246784".toNumber());

// // console.log((24816246784).toComma());

// // console.log(35 % 0.8);
// //0.5999999999999981
// // console.log((35).ampersand(0.8));
// //0.6

// // console.log(0.1 * 0.2);
// // console.log((0.1).safeMultiply(0.2));
// // console.log(0.2 / 0.2);
// // console.log((0.1).safeAdd(0.2)); // 0.6
// // console.log((0.3).safeAdd(-0.2));

// // console.log((0.1).safeSubtract(0.3)); // 0.6
// console.log((35).mod(0.8)); // 0.6
// console.log((39225.3).mod(0.1), 0); // 0
// console.log((39225.3).mod(0.01), 0); // 0
// // console.log((0.2).safeDivision(0.6)); // 0.8333333333333334
// // console.log((0.1).safeMultiply(0.2)); // 0.02

// //////////////////////////////////////////////////////////////////////////

// // console.log(Math.round10(112.5345, 3));
// // console.log(Math.floor10(112.5345, 3));
// // console.log(Math.ceil10(112.5345, 3));
// // // console.log(Math.round(112.5));
// // console.log(Math.randomRange(112.5, 200, 1));
// // console.log(Math.randomRange(112.5, 200, 0));
// // for (var i = 0; i < 10; i++) {
// //   console.log(Math.randomRange(4, 5));
// // }

// ////////////////////////////////////////////////////////////////////////////

// console.log("123".toComma());
// // console.log((1).fixNumber(5));
// // console.log((3022).fixNumber(1));

// // console.log((30222.12).fixNumber(8));
// // console.log((30222.12).fixNumber(8).toComma());

// // console.log("30222.50380000".fixPoint(8).fixNumber(8));
// console.log("30222.50380000".fixPoint(5));
// console.log("30222.50380000".fixPoint(5).toComma());

// // console.log((30222).fixPoint(3));
// // console.log((30222.12).fixPoint(5).toComma());
// // console.log((30222.12).toComma().pointPad(5));
// // console.log("30222.12".pointPad(5));

// // console.log(Math.clamp(10, 3, 5));
// // console.log(Math.clamp(1, 3, 5));
// // console.log(Math.clamp(4, 3, 5));

// const hello = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(hello.singleOrDefault((e) => e == 99));
// console.log(hello.skip(3).take(5));
// console.log(hello.skip(1).skip(1));
// const test3 = hello.take(9).select((now, index) => {
//   return {
//     id: now,
//     index,
//     name: "test",
//   };
// });
// console.log(test3);
// console.log(hello.skip(1).count());
// console.log(test3.max((now) => now.id > 3));
// console.log(test3.min((now) => now.id > 3));
// console.log(test3.sum((now) => now.id > 3));
// console.log(test3.first((now) => now.id % 3 == 0));
// console.log(test3.firstOrDefault((now) => now.id % 99 == 0, 991));
// console.log(test3.last((now) => now.id % 3 == 0));
// console.log(test3.lastOrDefault((now) => now.id % 3 == 4, 991));
// // console.log(hello.single((now) => now == 3));

// console.log((134.5).addSymbol());
// console.log((0).addSymbol());
// console.log((-1.345).addSymbol());

// console.log((134.5).addSymbol(" "));
// console.log((134.5).addSymbol("   "));

// console.log((134.5).fromPer(50));
// console.log((134.5).fromPer(33));
// console.log((134.5).fromPer(72));
// console.log((100).fromPer(50));
// console.log((100).fromPer(1250));
// console.log((300).fromPer(10));

// console.log((300).toPer(10));


// console.log((2 ** 256 + 0.213445).toComma().fixPoint(10));


// console.info("test1");
// console.warn("test2");
// console.error("test3");

// const aaa = [1, 2, 3, 4, 5];
// console.log(aaa._toJson());
// const bbb = aaa._deepCopy();
// const ccc = `[1,2,3,4,5]`;
// console.log(aaa, bbb, aaa === bbb);
// console.log(ccc.fromJson());
// // console.log({ a: 1, b: 3 }._toJson());


// console.log((1234.1234).round(2));
// console.log((1234.1234).floor(2));
// console.log((1234.1234).ceil(2));


// console.log("3022.50380000".fixNumber(5)); // 03022.50380000
// console.log((3022).fixNumber(7)); // 30222
// console.log((3222.12).fixNumber(5).toComma()); // 03,222.12

// console.log("hello world".issetWord("ell"));
// console.log("hello world".issetWord("xx"));
// console.log("hello world".issetWord(""));
// console.log("helloworld".issetWord(" "));


// console.log("hello world".getChar(0));
// console.log("hello world".getChar(1));
// console.log("hello world".getChar(2));
// console.log("hello world".getChar(3));
// console.log("hello world".getChar(4));
// console.log("hello world".getChar(5));

// // hello.findIndex;

Array.prototype.diff = function (other: any) {
  return this.where((x: any) => !other.indexOf(x));
};

Array.prototype.inter = function (other: any) {
  return this.where((x: any) => other.indexOf(x));
};


const arr = [1, 2, 3, 4, 5];
const other = [3, 4, 5, 6, 7];

console.log(arr.diff(other));
console.log(arr.inter(other));