let a = 23
const b = 24
var c = 25
d = 26

// let a = 33  (ERROR: let doesn't let redeclaring a variable)
// const b = 34 (ERROR: const doesn't let redeclaring a variable too)

var c = 35 
// (NO-ERROR: var lets a variable to be redeclared)

a = 43
//  (NO-ERROR: let allows a variable to be reassigned)

// b = 34 (ERROR: const doesn't allow the reassignment)

c = 34
//  (NO-ERROR: var allows a variable to be reassigned)

d = 27
// (NO-ERROR: it works just like the var keyword)

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let name // Variable Declaration
name = "ritik" // Variable initialisation
name = "Ritik" // Reassignment of a value


