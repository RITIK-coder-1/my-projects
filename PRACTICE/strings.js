// let MyName = "ritik"  // (Primitive String)
// let myName = new String("ritik")  // (Object String)
// let age = 19

// console.log(`hey, this is ${myName} and my age is ${age}`); // string interpolation with a variable

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



let statement3 = `ritik \ncoder` // "ritik; coder"
// console.log(String.raw`${statement3}`); // "ritik, coder"

let raw_string = String.raw`ritik \n coder`
// console.log(raw_string); // "ritik \n coder"



// console.log(statement2.repeat(10));
// console.log(statement.repeat(2222));


let truth = `Hey! I'm Ritik! Gonna be a top developer!`

// console.log(truth.repeat(2222));

// let statement4 = " -_- "
// console.log(statement4.repeat(22222)); 


// console.log(truth.replace(" ", "-")); // Hey!-I'm Ritik! Gonna be a top developer!
// console.log(truth.replaceAll(" ", "-")); // Hey!-I'm-Ritik!-Gonna-be-a-top-developer!

// let a = "ritik coder "
// console.log(a.replace(" ", "-")); // "ritik-coder "
// console.log(a.replaceAll(" ", "-")); // "ritik-coder-"
// console.log(a.replace("", "-")); // "-ritik coder "
// console.log(truth.replace("", "hh")); // hhHey! I'm Ritik! Gonna be a top developer!


// console.log(truth.indexOf(" ")); // 4
// console.log(truth.search("")); // 0

let statement4 = "rtk is the shortcut for ritik"

// console.log(statement4.slice(0, 2)); // "rt"
// console.log(statement4.slice(-2)); // "ik"

// let a = "ritik"
// console.log(a.slice(-3, -1)); // "ti"
// console.log(a.slice(2, 3)); // "t"

// console.log(statement4.substring(0, 19)); // "rtk is the shortcut"
// console.log(statement4.slice(0, 19)); // "rtk is the shortcut"
// console.log(statement4.substring(19, 0)); // "rtk is the shortcut"
// console.log(statement4.slice(19, 0)); // ""
// console.log(statement4.substring(-5, -1)); // ""
// console.log(statement4.substring(3)); // "is the shortcut for ritik"
// console.log(statement4.substring(244)); // ""
// console.log(statement4.slice(0, 244)); // rtk is the shortcut for ritik




// console.log(statement4.startsWith("Rtk")); // false
// console.log(statement4.endsWith("ritik")); // true



// console.log(statement4.split()); // [ 'rtk is the shortcut for ritik' ]
// console.log(statement4.split(" ")); // [ 'rtk', 'is', 'the', 'shortcut', 'for', 'ritik' ]
// console.log(statement4.split("")); // ['r', 't', 'k', ' ', 'i', 's', ' ', 't', 'h', 'e', ' ', 's', 'h', 'o', 'r', 't', 'c', 'u', 't', ' ', 'f', 'o', 'r', ' ', 'r', 'i', 't', 'i', 'k' ]
// console.log(statement4.split(" ", 3)); //  [ 'rtk', 'is', 'the' ]
// console.log(statement4.split(2)); // [ 'rtk is the shortcut for ritik' ]





console.log(statement4.toUpperCase("rtk"));
console.log(statement4.toUpperCase);

// let num = 234
// let string_num = num.toString()
// console.log(string_num);

// console.log(string_num + 23);



// let whitespace = "   ritik     "

// console.log(whitespace.length);
// console.log(whitespace.trim().length);
// console.log(whitespace.trimStart());
// console.log(whitespace.trimEnd());

// console.log(whitespace.valueOf());

// let a = new String("ritik")
// console.log(a);
// console.log(a.valueOf());
// console.log(typeof a.valueOf());
// console.log(typeof a);

// console.log(a !== a.valueOf());