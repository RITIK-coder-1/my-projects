const obj1 = {
    name: "ritik",
    age: 19
}

const property = Object.getOwnPropertyDescriptor(obj1, "name")
console.log(property);

Object.defineProperty(obj1, "name", {
    writable: false
})

obj1.name = "RITIK"

console.log(obj1);

