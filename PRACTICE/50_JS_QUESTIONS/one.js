// Write a JavaScript program to check if a number is positive, negative, or zero -------->

let num = 0

if (typeof num === 'number'){
    if (num === 0) {
        console.log("It's a Zero!");
    } else if (num < 0) {
        console.log(`The number ${num} is a negative integer!`);
    } else {
        console.log(`The number ${num} is a positive integer!`);
    }
} else {
    console.log(`Please! Input a number!`);
}

// FUNCTION ------------->

function checkInteger(num) {
    if (typeof num === 'number'){
        if (num === 0) {
            console.log("It's a Zero!");
        } else if (num < 0) {
            console.log(`The number ${num} is a negative integer!`);
        } else {
            console.log(`The number ${num} is a positive integer!`);
        }
    } else {
        console.log(`Please! Input a number!`);
    }
}

// checkInteger(10)
// checkInteger(-1)
// checkInteger(0)
// checkInteger("null")