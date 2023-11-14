// Loop to print the first 10 natural numbers -------->

// for (let num = 1; num <= 10; num++) {
//     console.log(num);    
// }


// Loop to print first 10 even number ---------->

// for (let num = 0; num <= 20; num+= 2) {
//     console.log(num);
// }

// Loop to calculate the sum from 1 to 100 -------------->


// let sum = 0

// for (i = 0; i <= 100; i++) {
//     sum+= i
// }
// console.log(sum);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for (let i = 0; i > -1 && i < 20; i++){
//     console.log(i++);
// }

// const arr = [1, 2]

// for (const element of arr) {
//     console.log(element);
// }


// const arr = [{name: "ritik"}]

// function iterator(anyArray){
// for (const element of anyArray) {
//     console.log(element.name);
// }
// }

// iterator(arr)

// const arr = [{
//     name: "ritik",
//     age: 19
// },
// {
//     name: "sonali",
//     age: 22
// }]

// for (const element of arr) {

//         if ("name" in element && "age" in element){
//             if (element.age > 20){
//                 console.log(element);
//             }
//         }

// }

// ---------------------------------------------------------------------

// FOR LOOP --->

// First a variable is initialised, then the condition is checked, then the program is executed and then, it is incremented or decremented. This goes on a loop until the condition is satisfied.

function wholeNumbers(num){
console.log(`The first ${num} whole numbers:`);
for (i = 0; i < num; i++){
    switch (i) {
        case 0:
            console.log("The 1st whole number:");
            break;
        case 1:
            console.log(`The 2nd whole number:`);
            break;
        case 2:
            console.log(`The 3rd whole number:`);    
            break;
        default:
            console.log(`The ${i + 1}th whole number:`);
            break;
    } 
    console.log(i);
}
}

// wholeNumbers(20)
// wholeNumbers(10)

for(i = 1; i < 10; i++){
    // console.log(`Outer loop: ${i}`);
    for(j = 1; j < 10; j++){
        // console.log(`Inner loop: ${j}`);
    }
}

for(i = 1; i < 10; i++){
    if (i === 1) {
        // console.log("The first number");
    }
    // console.log(i);
    if (i === 9) {
        // console.log("The last number");
    }
}

for(i = 1; i < 10; i++){
    if (i === 1) {
        // console.log("one has been detected");
        continue;
    }
    // console.log(i);
    if (i === 6) {
        // console.log("six has been detected");   
        break;     
    }
}

for(i = 1; i < 20; i++){
    if (i > 10) {
        break;
    }
    // console.log(i);
}









