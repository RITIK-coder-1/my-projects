// FOR-OF-LOOP ------------------->

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

// FOR-IN-LOOP ----------------------->

for (const key in arr1) {
    // console.log(`The key: ${key} and the value: ${arr1[key]}`);
}

for (const key in name) {
    // console.log(`Index value: ${key} and Character: ${name[key]}`);
}

// FOR-EACH-LOOP ------------------------->

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

const myArr = ["ritik", 19, "1st"]

// myArr.forEach(element => console.log(myArr.indexOf(element)))

// myArr.forEach((val, index, arr) => console.log(`The value: ${val}, the index: ${index} and the whole array is: ${arr}`))

// const foreach = arr4.forEach( (element) => console.log(element) )

// console.log(foreach); // undefined // forEach loop doesn't return anything!

// MAP ------------------------------>

const myArray = [1, 2, 3]

const map = myArray.map( (ele) => ele ) // map returns a value
// console.log(map); // [1,2,3]
const foreach2 = myArray.forEach( (ele) => ele )
// console.log(foreach2); // undefined

// myArray.map((ele, ind, arr) => { console.log(ele, ind, arr) }) // Acts just like foreach



// FILTER -------------->

const arr5 = [1, 2, 3, "ritik", "sonali"]

arr5.filter( (element) => typeof element === 'number' ) // it only returns a value upon filtering with a condition

const filter = arr5.filter( (element) => typeof element === 'number' )

// console.log(filter); // [1, 2, 3]

// arr5.filter((element) => console.log(element))

// REDUCE -------------------------->

const array = [1, 2, 3, 4]

const total = array.reduce( (acc, ele) => acc + ele, 0)
// console.log(total); // 10

const sub = array.reduce((acc, ele) => acc - ele, 0)
// console.log(sub); // -10


const a = [1, 2, 3, 4]
const b = "ritik"

let sum1 = 0;
for (let i = 0; i < a.length; i++) {
    const element = a[i]
    // sum1 += a[i]
    // console.log(`The index: ${i} and the value: ${element}`);
}
// console.log(`The Sum: ${sum1}`);

for (let i = 0; i < b.length; i++) {
    const element = b[i];
    // console.log(`The index: ${i} and the value: ${element}`);
}

for (const key in a) {
    // console.log(`The index: ${key} and the value: ${a[key]}`);
    // sum1 += a[key]
}
// console.log(sum1);

for (const key in b) {
    // console.log(b[key]);
}

for (const iterator of a) {
    // console.log(iterator);
}

for (const iterator of b) {
    // console.log(iterator);
}

const forEach = a.forEach(function(element){
    // console.log(element);
    return element // it doesn't return
})

// console.log(forEach) // undefined

const map1 = a.map((ele) => {
    return ele // it does return
})

// console.log(map1) // [1,2,3,4]

const filter1 = a.filter((ele) => ele > 2) // it also returns

// console.log(filter1); // [3,4]


