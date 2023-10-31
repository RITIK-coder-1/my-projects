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


let a = "3.123"
let b = "4.97"
let c = ""
let d = " "
let e = "ritik"

// console.log(Number.parseFloat(a)); // 3.123
// console.log(Number.parseInt(a)); // 3
// console.log(Number.parseInt(b)); // 4
// console.table([Number.parseFloat(c), Number.parseFloat(d),Number.parseFloat(e), Number.parseInt(c), Number.parseInt(d), Number.parseInt(e)]); // NaN

let f = Infinity

// console.log(Number.parseFloat(f)); // Infinity
// console.log(Number.parseInt(f)); // NaN



let num11 = 324
let num12 = 4.2

// console.log(num11.toExponential());
// console.log(num12.toExponential());

let num13 = 123.62355

// console.log(num13.toFixed()); // 124
// console.log(num13.toFixed(3)); // 123.624

console.log(num13.toPrecision()); // 123.62355
console.log(num13.toPrecision(3)); // 124
console.log(num13.toPrecision(4)); // 123.6
console.log(num13.toPrecision(2)); // 1.2e+2

let num14 = 100000000
let InternationalNumber = num14.toLocaleString()
let IndianNumber = num14.toLocaleString("en-IN")

// console.log(InternationalNumber); // 100,000,000
// console.log(IndianNumber); // 10,00,00,000



console.log(num14.toString()); // "100000000"
console.log(typeof num14.toString()); // string



let ObjectNumber = new Number(234)
let ObjectValue = ObjectNumber.valueOf()

console.log(ObjectNumber); // [Number: 234]
console.log(ObjectValue); // 234
console.log(typeof ObjectValue); // number

