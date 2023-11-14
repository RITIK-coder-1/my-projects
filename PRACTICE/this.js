// console.log(this); // {}

const obj = {
    name: "ritik",
    greet1: function() {
    console.log(`Hello! ${this.name}`)
    },
    greet2: () => console.log(this.name),
    currentContext1: function(){
        console.log(this);
    },
    currentContext2: () => console.log(this)
}

// obj.greet1() // Hello! ritik
// obj.greet2() // undefined
// obj.currentContext1()
// obj.currentContext2() // {}

function myName(name){
    console.log(this); // so many different values
    console.log(this.name); // undefined // it works only within an object
}

// myName()

const MyName1 = (name) => console.log(this); // {}

const MyName2 = (name) => console.log(this.name); // undefined

// MyName1()
// MyName2()