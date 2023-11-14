if (true){
    let a = "ritik"
    const b = "Ritik"
    var c = "RITIK"

    // console.log(a, b, c);
}

// console.log(a); // ERROR
// console.log(b); // ERROR
// console.log(c); // RITIK


let name = "RITIK"

if (true) {
    const name = "ritik"
    // console.log(`innerName: ${name}`); // "ritik"
}

// console.log(`outerName: ${name}`); // "RITIK"


let num = 100

let num1 = 1

if (true) {
    const num = 200
    const num2 = 33
    // console.log(num1); // 1
    // console.log(num3); // ERROR
    // console.log(num); // 200
    if (true) {
        const num = 300
        // const num3 = 22 // ERROR
        // console.log(num2); // 33
        // console.log(num); // 300
    }
}

// console.log(num); 100
// console.log(num1); // 1
// console.log(num2); // ERROR
// console.log(num3); // ERROR

// console.log(a); // undefined // can be hoisted with var
// console.log(b); // ERROR // can't be hoisted with let
// console.log(five); // ERROR // can't be hoisted with const
var a = 3
let b = 4
const five = 5

// Function Scope ----------------->

function add(num1, num2) {
    var addition = num1 + num2
    return addition
}

// console.log(addition); // ERROR // var is function scoped

if (true) {
    var one = 1
    let two = 2
}

// console.log(one); // 1 // var is not block scoped
// console.log(two); // ERROR

