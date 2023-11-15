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
            return "It's a Zero!"
        } else if (num < 0) {
            return `The number ${num} is a negative integer!`
        } else {
            return `The number ${num} is a positive integer!`
        }
    } else {
        return `Please! Input a number!`
    }
}

const result = checkInteger(num)
// console.log(result);