// Using prototypes directly --->

function USER(name){
    this.name = name
}
USER.prototype.logName = function(){
    console.log(`The name of the user is: ${this.name}`);
}
const user1 = new USER("Ritik")
user1.logName()

// Using class --->

class user {
    constructor(name){
        this.name = name
    }

    logName(){
        console.log(`The name of the user is: ${this.name}`);
    }
}

const user2 = new user("ritik")
user2.logName()
const user3 = new user("RITIK")
user3.logName()

// class based inheritance --->

class one {
    constructor(name){
        this.name = name
    }

    actualLength(){
        console.log(this.name.trim().length);
    }

    static demo(){
        console.log("demo");
    }
}

const newUser = new one("  ritik  ")
newUser.actualLength() // 5

class two extends one {
    constructor(name, age){
        super(name)
        this.age = age
    }

    log(){
        console.log(`Name: ${this.name} and age: ${this.age}`);
    }
}

const newUser2 = new two("  ritik", 19)
newUser2.log()
newUser2.actualLength()

console.log(one.demo());
console.log(two.demo());
// console.log(newUser.demo()); // error

console.log(user1 instanceof USER); // true
console.log(newUser2 instanceof two); // true
console.log(newUser2 instanceof one); //  true
console.log(newUser instanceof two); // false

