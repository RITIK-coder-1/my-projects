function demo(name, age){
    this.name = name // this.myName is a variable (key) that is injected to the this object whose value is name
    this.age = age // similarly this.age

    return this // it returns the entire this object that has function properties and also name and age
}

const trial = demo("ritik", 19)
const trail2 = demo("RITIK", 19) // it overrides the value of name
console.log(trial); // the values have been overriden

function demo2(name, age){
    this.name = name
    this.age = age

    return this
}
const trial3 = new demo2("rtk", 19)
const trial4 = new demo2("RTK", 19) // new creates a new instance thus the values ain't overriden here
console.log(trial4);
console.log(trial3);

console.log(trial3.constructor, trial4.constructor); // [Function: demo2]
