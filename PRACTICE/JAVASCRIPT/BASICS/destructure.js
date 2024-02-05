// Array Destructuring ----->

const array = [1, 2, 3]

let [a, b, c] = array // the array has been destructured and each element has been assigned into the respective variables.

console.log(a, b, c); // 1 2 3

let [x ,, y] = array // we have skipped the element 2

console.log(x, y); // 1 3

// String Destructuring ----->

const string1 = "ritik"
const string2 = "Ritik Mahapatra"

let [firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter] = string1 // the string has been destructured and each element has been assigned into the respective variables.
let [firstName, lastName] = string2.split(" ") // the string has been destructured with two specific words.

console.log(firstLetter, thirdLetter); // r t
console.log(firstName, lastName); // Ritik Mahapatra

// Object Destructuring ----->

const object = {
    name: "ritik",
    age: 19,
    newObject: {
        country: "India"
    }
}

const {age , name} = object // each property has been destructured
const {name: myName, age: myAge} = object // aliasing

console.log(age, name); // 19, ritik 
console.log(myName, myAge); // ritik 19

const {email: myEmail = "ritikmahapatra11@gmail.com"} = object // setting up the default value of email

console.log(myEmail); 
console.log(object);

const {newObject: {country}} = object

console.log(country); // India

// Function parameter destructuring ----->

function demo(name, age){ // without destructuring
    console.log(`name: ${name}, age: ${age}`);
}

demo(object.age, object.name) // name: 19, age: ritik

function demo2({name, age}) {
    console.log(`name: ${name}, age: ${age}`);
}

demo2(object) // name: ritik, age: 19