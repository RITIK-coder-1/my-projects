// FOR-OF-LOOP

const arr1 = [1, 2, 3, 4]

for (const element of arr1) {
    // console.log(element);
}

const arr2 = [{name: "ritik"}, {age: 19}, {}]

for (const element of arr2) {
    // console.log(element);
}

let name = "ritik mahapatra"

for (const char of name) {
    if (char === " ") {
        continue;    
    }
    // console.log(char);
}

// FOR-EACH-LOOP

const arr3 = [1, 2, 3, 4]

// arr3.forEach( (element) => console.log(element) ) // 1 2 3 4

// arr3.forEach((element) => {
//     if (element > 2) {
//         console.log(element);
//     }
// }) 
// 3 4

// arr3.forEach( (element) => {
//     console.log(element + 10);
// } )
// 11 12 13 14

let sum = 0
arr3.forEach( (element) => sum += element)
// console.log(sum); // 10

const arr4 = [{name: "ritik"}, {age: 19}]


function keyValue(anyArray){
anyArray.forEach( (object) => {
    console.log(`The key: ${Object.keys(object)}`);
    console.log(`The value: ${Object.values(object)}`);
} )
}

// keyValue(arr4)

// const foreach = arr4.forEach( (element) => console.log(element) )

// console.log(foreach); // undefined // forEach loop doesn't return anything!


const arr5 = [1, 2, 3, "ritik", "sonali"]

arr5.filter( (element) => typeof element === 'number' ) // it only returns a value upon filtering with a condition

const filter = arr5.filter( (element) => typeof element === 'number' )

// console.log(filter); // [1, 2, 3]



