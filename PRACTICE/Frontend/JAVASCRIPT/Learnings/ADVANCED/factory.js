function factory(name, age, email){
    const myObj = {
        name: name,
        age: age,
        email: email,
        greet: () => console.log(`Hey ${name}, how are you?`)
    }
    return myObj
}

const me = factory("ritik", 19, "rtk@gmail.com")

console.log(me.name);
me.greet()

function User(name) {
    const obj = {
        name: name,
        logName: () => console.log(`The name of the user is: ${name}`)
    }
    return obj
}

const user = User("ritik")
user.logName()