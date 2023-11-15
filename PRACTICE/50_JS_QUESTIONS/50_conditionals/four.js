// Implement a function that determines if a given number is even or odd ---------->

function isEven(num) {
    if (typeof num === 'number'){
        if (num % 2 === 0) {
            return `The given number ${num} is even.`
        } else {
            return `The given number ${num} is odd.`
        }
    } else {
        return `Please! Input a number.`
    }
}

let number = 3
const result = isEven(number)

console.log(result);