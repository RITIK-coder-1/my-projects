// Condition to check the greater number out of two ----------->


// let num1 = 1
// let num2 = 2

// if (num1 > num2) {
//     console.log(`num1: ${num1} is greater than num2: ${num2}`);
// } else {
//     console.log(`num2: ${num2} is greater than num1: ${num1}`);
// }


// Condition to check the greater number out of three ---------->

let num1 = 1600000000
let num2 = 1700000000
let num3 = 1700000000

if (num1 == num2 && num2 == num3) {
    console.log("All the numbers are equal");
} else {
    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3 || num3 >= num2) {
        console.log(`num1: ${num1} is the greatest`);
    }
    } else {
        if (num2 >= num1 && num2 >= num3) {
            if (num2 > num1 && num2 == num3) {
                console.log(`num2: ${num2} & num3: ${num3} are the greatest`);
            }
        } else{
                if (num1 >= num3 || num3 >= num1) {
                console.log(`num2: ${num2} is the greatest`);
                } else {
                    if (num3 >= num2 && num3 >= num1) {
                        if (num2 >= num1 || num1 >= num2) {
                        console.log(`num3: ${num3} is the greatest`);
                    }
                }
            }
        }
    }
}



// if (typeof num1 === typeof num2 === Number) { 
//     if (num1 > num2) {
//         console.log("num1 is greater than num2");
//     } if (num2 > num1) {
//         console.log("num2 is greater than num1");
//     } if (num1 === num2) {
//         console.log("num1 equals to num2");
//     }
// } else {
//     console.log("The input type is not a number!");
// }

// if (typeof num1 === typeof num2 === typeof 1) {
//     if (num1 > num2) {
//         console.log(`num1: ${num1} is greater than num2: ${num2}`);
//     } else {
//         console.log(`num2: ${num2} is greater than num1: ${num1}`);
//     } if (num1 === num2) {
//         console.log("Both the numbers are equal");
//     }
// } else {
//     console.log("The input type is not a number!");
// }






