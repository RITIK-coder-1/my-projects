// let MyName = "ritik"  // (Primitive String)
// let myName = new String("ritik")  // (Object String)
// let age = 19

// // console.log(`hey, this is ${myName} and my age is ${age}`); // string interpolation with a variable

// // let escapedString = `quotes: \n ritik`
// // console.log(escapedString);

// console.log(MyName == myName); //true
// console.log(myName === MyName); // false


let statement = `Hey! This is Ritik!! Gonna be a top web developer`

// console.log(statement.length); // number of characters: 49


// console.log(statement[3]); // !
// console.log(statement[424]); // undefined
// console.log(statement[-2]); // undefined
// console.log(statement["2"]); // y
// console.log(statement["a"]); // undefined

// console.log(statement.charAt(0)); // H
// console.log(statement.charAt(424)); // blank space
// console.log(statement.charAt(-3)); // blank space
// console.log(statement.charAt("4")); // blank space
// console.log(statement.charAt(null)); // null => 0 // H
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



// console.log(statement.includes("ritik")); //false
// console.log(statement.includes("Ritik")); // true
// console.log(statement.includes("")); // true



// console.log(statement.indexOf("R")); // 13
// console.log(statement.indexOf(statement)); // 0
// console.log("ritik".indexOf("ritik")); // 0
// console.log("ritik".indexOf("i")); // 1
// console.log(statement.indexOf("")); // 0
// console.log(statement.indexOf("zaa")); // -1




// console.log(statement.lastIndexOf("Ritik")); //13
// console.log(statement.lastIndexOf("")); // last index from 1 => 50
// console.log(statement.lastIndexOf("uff")); // -1



// let a = "ritik"
// let b = "rtk"

// console.log(b.localeCompare(a)); // 1 // rtk is considered greater than ritik

let statement2 = "ritik"

// console.log(statement2.length); // 5
// console.log(statement2.padEnd(8, "323")); // "ritik323"
// console.log(statement2.padEnd(6).length); // 6
// console.log(statement2.padEnd(6, "kt")); // "ritikk"

// console.log(statement2.padStart(6, 1)); // "1ritik"
// console.log(statement2.padStart(7)); // "  ritik"
// console.log(statement2.padStart(7, "k")); // kkritik
// console.log(statement2.padStart(1)); // ritik





