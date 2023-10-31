let num1 = 23 // (Primitive Number)

let num2 = new Number(23) // (Object Number)

// console.log(num1 === num2); // false
// console.log(num1); // 23
// console.log(typeof num1); // number
// console.log(num2); // [Number: 23]
// console.log(typeof num2); // object


// let a = 1.2
// let b = 2.1
// let c = b - a
// let d = 0.9

// console.log(c === d); // false
// console.log(c); // 0.9000000000000001




let num3 = 2334
let num4 = 1/0 // Infinity
let num5 = "ritik"*2 // NaN

// console.log(Number.isFinite(num3)); // true
// console.log(Number.isFinite(num4)); // false
// console.log(Number.isFinite(num5)); // false
// console.log(Number.isFinite(-Infinity)); // false



let num6 = 1.21

// console.log(Number.isInteger(num3)); // true
// console.log(Number.isInteger(num4)); // false
// console.log(Number.isInteger(num5)); // false
// console.log(Number.isInteger(num6)); // false



// console.log(Number.isNaN(num3)); // false
// console.log(Number.isNaN(num5)); // true


// Safe integers ==> -(2^53 - 1) to 2^53 - 1

let num7 = 12233267813483
let num8 = -num7
let num9 = 1262835134023745601847568743560184371583892381638961065038301365036105615
let num10 = 1871034873n

// console.log(Number.isSafeInteger(num6)); // false // not an integer
// console.log(Number.isSafeInteger(num7)); // true
// console.log(Number.isSafeInteger(num8)); // true
// console.log(Number.isSafeInteger(num9)); //  false
// console.log(Number.isSafeInteger(num10)); // false
// console.log(Number.isSafeInteger(Infinity)); // false
// console.log(Number.isSafeInteger(NaN)); // false