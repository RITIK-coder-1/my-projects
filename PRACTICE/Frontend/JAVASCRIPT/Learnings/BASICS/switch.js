// let color = "orange"

// switch (color) {
//     case "red":
//     console.log("The color is red");
//     break;
//     default:
//     console.log(('The color is not red'));
//     break;
// }

// Program to find the day of the week ----------------->


// let num = 5

// switch (num) {
//     case 1:
//         console.log("The Day is Monday");
//         break;
//     case 2:
//         console.log("The Day is Tuesday");
//         break;
//     case 3:
//         console.log("The Day is Wednesday");
//         break;
//     case 4:
//         console.log("The Day is Thursday");
//         break;
//     case 5:
//         console.log("The Day is Friday");
//         break;
//     case 6:
//         console.log("The Day is Saturday");
//         break;
//     case 7:
//         console.log("The Day is Sunday");
//         break;    
//     default:
//         console.log("Please input a number from 1 to 7!");
//         break;
// }



// Program for grade calculator ------------------------>

// let score = 100
// let grade = score

// switch (grade) {
//     case score:
//         if (score >= 0 && score <= 100) {
//             if (score >= 0 && score <= 59) {
//                 console.log("Your grade is F");  
//                 }     
//                 if (score >= 60 && score <= 69) {
//                 console.log("Your grade is D");
//                 }
//                 if (score >= 70 && score <= 79) {
//                 console.log("Your grade is C");
//                 }
//                 if (score >= 80 && score <= 89) {
//                 console.log("Your grade is B");
//                 }
//                 if (score >= 90 && score <= 100) {
//                 console.log("Your grade is A");
//                 }
//         } else {
//             console.log("Your grade can not be evaluated");
//         }
//         break;
// }

// OR

// let score = 100;
// let grade;

// if (score >= 0 && score <= 100) {
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     console.log(`Your grade is ${grade}`);
// } else {
//     console.log("Your grade cannot be evaluated");
// }


let temp = null

if (typeof temp === 'number') {
    switch (temp) {
        case temp > 20:
            console.log("hot");
            break;
        default:
            console.log("cold");
            break;
    }
} else {
    console.log("please enter a number!");
}

