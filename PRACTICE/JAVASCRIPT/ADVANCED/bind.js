this.name = "RITIK"
const obj = {
    name: "ritik",
    log: function(){
        console.log(this.name);
    }
}

obj.log() // ritik

function greet() {
    console.log(`Hello! ${this.name}`);
}
greet()
const greet2 = greet.bind(obj) // Hello! undefined
const greet3 = greet.bind(this) 
greet2() // Hello! ritik
greet3() // Hello! RITIK

greet.call(obj) // Hello! ritik