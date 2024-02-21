// Write a while loop to find the factorial of a given number ------>

const fact = (number) => {
let num = 1
let factorial = 1

while (num <= number) {
    factorial *= num
    num++
}
console.log(factorial);
}

fact(5)