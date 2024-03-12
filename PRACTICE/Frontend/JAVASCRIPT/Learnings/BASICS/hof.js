function powerTwo(number){
    return number ** 2
}

// console.log(powerTwo(16));

// higher order function --->

function powerCube(number) {
    return powerTwo(number) * number // returns a function
}

// console.log(powerCube(5));

function higherOrder(callback){
    console.log("Higher order"); 
    callback()
}

function callbackFunction() {
    console.log("callback");
}

// higherOrder(callbackFunction) //  takes a function as an argument

// CURRYING ---->

const sum1 = (a, b, c) => {
    return a + b + c
}

const sum2 = a => {
    const one = b => {
        const two = c => {
            return a + b + c
        }
        return two
    }
    return one
}

console.log(sum1(3, 2, 3));
console.log(sum2(3)(2)(3));