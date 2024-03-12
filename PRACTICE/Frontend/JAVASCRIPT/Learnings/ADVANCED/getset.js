// Objects -->

const obj = {
    _name: "ritik", // conventionally privatised
    _age: 19,

    get name(){
        return `abc${this._name}cba`
    },

    set age(value){
        if (value > 0 && value < 100){
            this._age = value
        } else {
            console.log("Invalid age");
        }
    }
}

console.log(obj.name); // abcritikcba

obj.age = 30

console.log(obj._age); // 30

obj.age = 120

console.log(obj._age); // Invalid age // 30

// Class --->

class newClass {
    #name // privatised
    #age

    constructor(name, age){
        this.#name = name
        this.#age = name
    }

    get name(){
        return `abc${this.#name}cba`
    }

    get age(){
        return this.#age
    }

    set age(value){
        if (value > 0 && value < 100) this.#age = value
        else console.log("Invalid");
    }
}

const user = new newClass("ritik", 19)

console.log(user.name); // abcritikcba

user.age = 30

console.log(user.age); // 30

user.age = 200

console.log(user.age); // Invalid // 30