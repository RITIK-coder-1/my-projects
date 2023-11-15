// Create a function that takes two numbers and returns the larger one -------->

const largerNumber = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if (num1 > num2) {
            return `The number ${num1} is the largest!`
        } else if (num2 > num1) {
            return `The number ${num2} is the largest!`
        } else {
            return "Both the numbers are equal!"
        }
    } else {
        return "Both the input values should be numbers!"
    }
}

let result = largerNumber(123, 156)
// console.log(result);
result = largerNumber(1, "ritik")
// console.log(result);
result = largerNumber(12, 12)
// console.log(result);
