// Primitive Data Types

let name = "ritik"
// it is a string 

let age = 19
// it is a number

let boy = true
// it is a boolean

let girl = false
// it is also a boolean

let random;
// it is undefined

let random2 = undefined
// it is also undefinied

let BigNum = 1234892305397502n
// it is a BigInt

let random3 = Symbol(3)
// it is a symbol

let temp = null
// it is a null type but shows object

let random4 = NaN
// it is a number too (Not-a-Number)
console.table([name, age, boy, girl, random, random2, random3, BigNum, temp, random4])
console.table([typeof(name),typeof age,typeof boy,typeof girl,typeof random,typeof random2,typeof random3,typeof BigNum,typeof temp, typeof random4])

let random5 = Symbol(3)
console.log(random3 === random5);
// it's false 



let a = 23
let b = a 
b = 24

console.log(a);
console.log(b);
console.log(a === b);