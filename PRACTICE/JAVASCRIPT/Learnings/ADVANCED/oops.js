// Encapsulation -->

const obj = {
    _name: "ritik", // privatised by convention
    _age: 19,

    getName: function () { return this._name },
    getAge: function () { return this._age }
}
console.log(obj.name); // undefined
console.log(obj._name); // ritik // we can still get the value
console.log(obj.getAge()); // 19

class ME{
    name
    #age
    constructor(name, age){
        this.name = name
        this.#age = age
    }
}
const me = new ME("ritik", 19)

console.log(me.name); // ritik
console.log(me.age); // undefined
// console.log(me.#age); // error

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

// class based inheritance --->

class one {
    constructor(name){
        this.name = name
    }

    actualLength(){
        console.log(this.name.trim().length);
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

// Abstraction --> 

function add(a, b) {
    return a + b;
}

console.log(add(123, 152)); // 275
  
class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    start() {
      console.log('Engine started');
    }
}
  
let myCar = new Car('Toyota', 'Camry');

myCar.start() // Engine Started

// Polymorphism -->

class Shape {
    draw() {
      console.log('Drawing a shape');
    }
}
  
  class Circle extends Shape {
    draw() {
      console.log('Drawing a circle');
    }
}
  
let shape = new Circle();
shape.draw();  // Calls the draw method of the Circle class