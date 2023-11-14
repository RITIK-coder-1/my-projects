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

const obj1 = {
    name: "ritik",
    age: 19
}

// for (const iterator of obj1) { // CAN"T ITERATE WITH THIS
//     console.log(iterator);
// }

for (const key in obj1) {
    // console.log(key);
    // console.log(obj1[key]);
}

const arr4 = ["one", "two", "three"]

arr4.forEach( function (element){
    // console.log(element);
})

// arr4.forEach((elm) => console.log(elm))

