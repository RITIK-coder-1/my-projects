// console.log(this); // {}

const obj = {
    name: "ritik",
    greet: function() {
    console.log(`Hello! ${this.name}`)
},
    currentContext: function(){
        console.log(this);
    }
}

// obj.greet() // Hello! ritik
// obj.currentContext()

function myName(name){
    console.log(this); // so many different values
    console.log(this.name); // undefined // it works only within an object
}

// myName()

const MyName1 = (name) => console.log(this); // {}

const MyName2 = (name) => console.log(this.name); // undefined

// MyName1()
// MyName2()