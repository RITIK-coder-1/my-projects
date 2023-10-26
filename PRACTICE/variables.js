let a = 23
const b = 24
var c = 25

// let a = 33  (ERROR: let doesn't let redeclaring a variable)
// const b = 34 (ERROR: const doesn't let redeclaring a variable too)

var c = 35 
// (NO-ERROR: var lets a variable to be redeclared)

a = 43
//  (NO-ERROR: let allows a variable to be reassigned)

// b = 34 (ERROR: const doesn't allow the reassignment)

c = 34
//  (NO-ERROR: var allows a variable to be reassigned)

console.log(a);
console.log(b);
console.log(c);


