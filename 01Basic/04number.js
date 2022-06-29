// integer literals

/* 0
100
0xff => 255
0b, 0B */

// Floating point literals
/* 
1.9
3.14

3.03e23 => 3.03 * 10 to the power 23

let billion = 1_000_000_000
 */

// Arithmetic
// +, -, *, /, %, **

Math.pow(2, 9);
console.log(`Math.pow(3, 1/3) is ${Math.pow(3, 1 / 3)}`);
console.log("Round: ", Math.round(0.6));
console.log("Ceil", Math.ceil(0.6));
Math.floor(0.6);
Math.abs(-5);
Math.min(2, 3, 7, 4, 8);
Math.max(2, 3, 7, 4, 8);
console.log("Random", Math.random());
console.log("Random below 5:", Math.random() * 5);

// ES6 new methods
Math.cbrt(27); // cube root output -- 27 i.e cube root of 27 is 3
Math.hypot(3, 4); // sum of squares of the the argument 3 and 4 i.e 9 + 16 = 25 and square of 25 is 5
Math.clz32(0xf);
console.log("Math.clz32(0xf):", Math.clz32(0xf));

// Infinity, no errors; just Infinity
// divide by 0; it's just NaN

Number.MAX_SAFE_INTEGER;
// console.log(Number.isNaN("2"));
//console.log(Number.parseInt("3a"));
//console.log(Number.isNaN("3a"));

let statementOne = 0.3 - 0.2;
let statementTwo = 0.2 - 0.1;

// console.log(statementOne === statementTwo);
// console.log(statementOne === .1);
// console.log(statementTwo === .1);
// console.log(.3 - .2);
// console.log(.2 - .1);

// BigInt

let googol = "1" + "0".repeat(100);
console.log(BigInt(googol));
