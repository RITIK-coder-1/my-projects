let score = 0

function demo(score){
    this.score = score
    return this.score
}

console.log(demo.prototype); // {}
demo.prototype.increment = function (){
    // score++ // it refers to the global score variable
    this.score++ // it refers to the score parameter of the function
    return this.score
}

console.log(new demo(5).increment()); // new keyword creates a new instance of an object and links the prototype

console.log(String.prototype); // {}

String.prototype.actualLength = function(){
    return this.trim().length
}

let name = "   ritik    "
console.log(name.actualLength()); // 5

// Prototypal inheritance -->

const obj1 = {
    name: "ritik",
    greet: function () {
        console.log(`Hey ${this.name}`);
    }
}

const obj2 = {
    __proto__: obj1
}
console.log(obj2.name);
obj2.greet()

const obj3 = {}
Object.setPrototypeOf(obj3, obj1)

console.log(obj3.name);