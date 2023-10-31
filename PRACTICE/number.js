let num1 = 23 // (Primitive Number)

let num2 = new Number(23) // (Object Number)

console.log(num1 === num2); // false
console.log(num1); // 23
console.log(typeof num1); // number
console.log(num2); // [Number: 23]
console.log(typeof num2); // object