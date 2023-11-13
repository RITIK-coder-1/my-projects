// function Add(num1, num2) {
//     console.log(num1 + num2)
// }

// console.log(Add(1,2)); // 3

// function multiply(num1, num2){
//     console.log(num1*num2);
// }

// console.log(multiply(33,4)); // 132


// function fun(name, surname){
//     let statement = `My name is: ${name} ${surname}.`
//     return statement
// }

// let statement1 = fun("Ritik", "Mahapatra")

// console.log(statement1);


// Greet Function ------------------->

// function Greet(name) {
//     console.log(`Namaste! ${name}`);
// }

// Greet("Ritik")

// Adding Function -------------------->

// function Add(num1, num2) {
//     return num1 + num2
// }

// const Add1 = Add(3, 4)
// console.log(Add1);

// AGE Function ----------------->

// function myAge(birthday, currentYear) {
//     return currentYear - birthday
// }

// const Age1 = myAge(2004, 2023)
// console.log(Age1);

// Farheneit to Celsius ----------------->

// function fahrenheitToCelsius(num) {
//     return (num - 32) * 5/9 + "Celsius"
// }

// const degreeInCelsius = fahrenheitToCelsius(20)

// console.log(degreeInCelsius);

// Even or Odd ----------------->

// function isEven(num) {
//    if (num % 2 == 0) {
//         return `the number ${num} is even`
//     } else {
//         return `the number ${num} is odd`
//     }
// }

// const num1 = isEven(2)

// console.log(num1);



// function numbers(...num) {
//     return num
// }

// console.log(numbers(1, 2, 3, 4)); // [1, 2, 3, 4]

// function numbers(num1, num2, ...num){
//     return num
// }

// console.log(numbers(1, 2, 3, 4, 5)); // [3, 4, 5] // 1 went into num1 and 2 went into num2 // we haven't returned num1 and num2


// function numbers(num1, num2, ...num) {
//     console.log(num1, num2, num);
//     return [num1, num2, num];
// }

// const result = numbers(1, 2, 3, 4, 5); // 1 2 [3, 4, 5]
// console.log(result); // [1, 2, [3, 4, 5]]

// const myDetails = {
//     name: "ritik",
//     surname: "mahapatra",
//     age: 19
// }

// const myDidi = {
//     name: "sonali",
//     surname: "mahapatra",
//     age: 22
// }

// function DisplayObjectName(anyObject) {
//     let statement = `The name of the user is: ${anyObject.name}`
//     console.log(statement);
//     return statement
// }

// DisplayObjectName(myDetails)
// DisplayObjectName(myDidi)


// const arr = [1, 2, 3, 4, 5, 6]

// function lastArrayValue(anyArray) {
//     let statement = `the last value of the array is: ${anyArray[(anyArray.length) - 1]}`
//     console.log(statement);
//     return statement
// }

// lastArrayValue(arr)


function greet(name){
    console.log(`Hello! ${name}`);
}

// greet() // Hello! undefined
// greet("Ritik") 

// let Hello = greet("Ritik") // Hello! Ritik
// console.log(Hello); // undefined

function greet2(name){
    return `Hello! ${name}`
}

// let Hello2 = greet2("ritik")
// console.log(Hello2); // Hello! ritik

function greet3(name){
    let statement = `hello! ${name}`
    console.log(statement);
    return statement
}
// let Hello3 = greet3("ritik") // hello! ritik 
// console.log(Hello3); // hello! ritik

function take(...num){
    return num
}

// console.log(take(2, 3)) // [2, 3]

function input(num1, num2, ...num){
    console.log(num1, num2, num);
}

input(1, 2, 3, 4) // 1 2 [3, 4]

