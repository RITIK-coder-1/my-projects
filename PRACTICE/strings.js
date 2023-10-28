// let MyName = "ritik"  // (Primitive String)
// let myName = new String("ritik")  // (Object String)
// let age = 19

// // console.log(`hey, this is ${myName} and my age is ${age}`); // string interpolation with a variable

// // let escapedString = `quotes: \n ritik`
// // console.log(escapedString);

// console.log(MyName == myName); //true
// console.log(myName === MyName); // false


let statement = `Hey! This is Ritik!! Gonna be a top web developer!`

console.log(statement[3]); // !
console.log(statement[424]); // undefined
console.log(statement[-2]); // undefined
console.log(statement.charAt(0)); // H
console.log(statement.charAt(424)); // blank space
console.log(statement.charAt(-3)); // blank space
console.log(statement.at(49)); // !
console.log(statement.at(424)); // undefined
console.log(statement.at(-50)); // H