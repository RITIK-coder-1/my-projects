// Condition to check the greater number out of two ----------->


// let num1 = 200
// let num2 = 200

// if (num1 === num2) {
//     console.log(`Both the numbers are equal!`);
// } else if (num1 > num2) {
//     console.log(`num1: ${num1} is greater than num2: ${num2}`);
// } else {
//     console.log(`num2: ${num2} is greater than num1: ${num1}`);
// }




// Condition to check the greatest number out of three ---------->

// let num1 = 15
// let num2 = 15
// let num3 = 15

// if (num1 === num2 && num2 === num3) {
//     console.log("All the numbers are equal!");
// } else if (num1 === num2 && num1 > num3) {
//     console.log(`num1: ${num1} and num2: ${num2} are the greatest!`);
// } else if (num1 === num3 && num1 > num2){
//     console.log(`num1: ${num1} and num3: ${num3} are the greatest!`);
// } else if (num1 > num2 && num2 >= num3 && num3 >= num2) {
//     console.log(`num1: ${num1} is the greatest!`);
// } else if (num2 === num3 && num2 > num1){
//     console.log(`num2: ${num2} and num3: ${num3} are the greatest!`);
// } else if (num2 > num3 && num3 >= num1 && num3 <= num1){
//     console.log(`num2: ${num2} is the greatest!`);
// } else {
//     console.log(`num3: ${num3} is the greatest!`);
// }




// Condition to check the greatest number and also check the type-------------->

// let num1 = 11
// let num2 = 11
// let num3 = 11

// if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {   
//   if (num1 === num2 && num2 === num3) {
//     console.log("All the numbers are equal!");
// } else if (num1 === num2 && num1 > num3) {
//     console.log(`num1: ${num1} and num2: ${num2} are the greatest!`);
// } else if (num1 === num3 && num1 > num2){
//     console.log(`num1: ${num1} and num3: ${num3} are the greatest!`);
// } else if (num1 > num2 && num2 >= num3 && num3 >= num2) {
//     console.log(`num1: ${num1} is the greatest!`);
// } else if (num2 === num3 && num2 > num1){
//     console.log(`num2: ${num2} and num3: ${num3} are the greatest!`);
// } else if (num2 > num3 && num3 >= num1 && num3 <= num1){
//     console.log(`num2: ${num2} is the greatest!`);
// } else {
//     console.log(`num3: ${num3} is the greatest!`);
// }
// } else {
//     console.log("The input type is not a number!");
// }






// Condition to check if a name is short or long ------------>

// let name = "Ritik Mahapatra"

// if (name.length == 10) {
//     console.log(`Your name '${name}' is medium.`);
// } else if (name.length > 10) {
//     console.log(`Your name '${name}' is long.`);
// } else if (name.length < 10){
//     console.log(`Your name '${name}' is short`);
// } else if (name === null && name === undefined){
//     console.log("No Name is given!");
// }



// Condition to check even or odd --------->

// let num = 123

// if (num%2 == 0) {
//     console.log(`The number ${num} is even.`);
// } else {
//     console.log(`The number ${num} is odd`);
// }



// Condition to check whether passed or failed -------------->

// const score = 23

// if (score >= 60) {
//     console.log(`Congratulations! You've passed with ${score} marks!`);
// } else {
//     console.log(`Failed: Your score is ${score} and you've failed by ${100 - score} marks`);
// }



// Condition to chech whether a leap year or not --------------->

// const year = 2023

// if ((year%4 == 0 && year%100 != 0) || year%400 != 0) {
//     console.log(`The year ${year} is a leap year!`);
// } else {
//     console.log(`The year ${year} is not a leap year!`);
// }


// Condition to check signed integers ---------------->

// let num = 222

// if (num === 0) {
//     console.log(`The number is 0!`);
// } else if (num < 0){
//     console.log(`The number ${num} is a negative integer!`);
// } else {
//     console.log(`The number ${num} is a positive integer!`);
// }


// Condition to check a future leap year or a past leap year ---------->

// const presentYear = 2023;
// const year = 2025;

// if (((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && year > presentYear) {
//     console.log(`${year} is a future leap year!`);
// } else if (((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && year < presentYear) {
//     console.log(`${year} is a past leap year!`);
// } else if (year === presentYear) {
//     console.log("The given year is the present year!");
// } else {
//     console.log(`${year} is not a leap year.`);
// }



// Condition to check if the given number is a multiple of 3 or 5 or both -------->

// let num = 15

// if (num%3 == 0 && num%5 == 0) {
//     console.log(`The given number '${num}' is a multiple of both 3 and 5!`);
// } else if (num%3 == 0) {
//     console.log(`The given number '${num}' is a multiple of 3.`);
// } else if (num%5 == 0){
//     console.log(`The given number '${num}' is a multiple of 5.`);
// } else {
//     console.log(`The given number is neither a multiple of 3 nor 5!`);
// }

