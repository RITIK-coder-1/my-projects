// console.log(this); // {}

const obj = {
    name: "ritik",
    greet: function() {
    console.log(`Hello! ${this.name}`)
}
}

obj.greet()