console.log(this); // {}

function demo() {
    console.log(this);
}
demo()

const demo2 = () => {
    console.log(this);
}
demo2() // {}

let name
const myObj = {
    name: "ritik",
    age: 19,
    demo: function () {
        console.log(this);
        console.log(this.name); // ritik
        console.log(name); // undefined
    },
    demo2: () => {
        console.log(this); // {}
        console.log(this.name); // undefined
        console.log(name); // undefined
    }
}
myObj.demo()
myObj.demo2()