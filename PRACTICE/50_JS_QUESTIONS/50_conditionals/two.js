// Create a function that takes two numbers and returns the larger one -------->

const largerNumber = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if (num1 > num2) {
            let statement = `The number ${num1} is the largest!`
            console.log(statement);
            return statement
        } else if (num2 > num1) {
            let statement = `The number ${num2} is the largest!`
            console.log(statement);
            return statement
        } else {
            let statement = "Both the numbers are equal!"
            console.log(statement);
            return statement
        }
    } else {
        let statement = "Both the input values should be numbers!"
        console.log(statement);
        return statement
    }
}

// largerNumber(123, 156)
// largerNumber(1, "ritik")
// largerNumber(12, 12)