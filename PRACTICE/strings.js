// let MyName = "ritik"  // (Primitive String)
// let myName = new String("ritik")  // (Object String)
// let age = 19

// // console.log(`hey, this is ${myName} and my age is ${age}`); // string interpolation with a variable

// // let escapedString = `quotes: \n ritik`
// // console.log(escapedString);

// console.log(MyName == myName); //true
// console.log(myName === MyName); // false


let statement = `Hey! This is Ritik!! Gonna be a top web developer!`

// console.log(statement[3]); // !
// console.log(statement[424]); // undefined
// console.log(statement[-2]); // undefined
// console.log(statement["2"]); // y
// console.log(statement["a"]); // undefined

// console.log(statement.charAt(0)); // H
// console.log(statement.charAt(424)); // blank space
// console.log(statement.charAt(-3)); // blank space
// console.log(statement.charAt("4")); // blank space
// console.log(statement.charAt("b")); // NaN => 0 // H

// console.log(statement.at(49)); // !
// console.log(statement.at(424)); // undefined
// console.log(statement.at(-50)); // H
// console.log(statement.at("5")); // T
// console.log(statement.at("cc")); // NaN => 0 // H



// console.log(statement.codePointAt(0)); // 72
// console.log("H".codePointAt(0)); // 72
// console.log(statement.codePointAt(-1)); // undefined
// console.log(statement.codePointAt("3")); // 33
// console.log(statement.codePointAt("aa")); // NaN => 0 // 72

// console.log(statement.charCodeAt(2)); // 121
// console.log(statement.charCodeAt(-2)); // NaN
// console.log(statement.charCodeAt("4")); // 32
// console.log(statement.charCodeAt("ritik")); // NaN => 0 // 72



// console.log(statement.concat(" A top One!"));



// console.log(statement.endsWith("developer")); // false
// console.log(statement.endsWith("developer!")); // true


// console.log(String.fromCharCode(72)); // H
// console.log(String.fromCodePoint(121)); // y
