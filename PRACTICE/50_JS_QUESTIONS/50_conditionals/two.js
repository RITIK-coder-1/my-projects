// Create a function that takes two numbers and returns the larger one -------->

const largerNumber = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if (num1 > num2) {
            console.log(`The number ${num1} is the largest!`);
        } else {
            console.log(`The number ${num2} is the largest!`);
        }
    } else {
        console.log("Both the input values should be numbers!");
    }
}

// largerNumber(123, 156)
// largerNumber(1, "ritik")