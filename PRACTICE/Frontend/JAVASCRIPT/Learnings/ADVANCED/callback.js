// without a callback

function greet(name) {
    console.log(`Hello, ${name}`)
}

setTimeout(() => greet("ritik"), 2000)

// with a callback

function greetAfterDelay(callback, name, time){
    setTimeout(() => callback(name), time)
}

greetAfterDelay(greet, "Ritik", 5000)

// callback hell

function greet(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}`);
        callback()
    }, 2000)
}

function askHowAreYou(callback) {
    setTimeout(() => {
        console.log("How are you?");
        callback()
    }, 2000)
}

function sayGoodbye() {
    setTimeout(() => {
        console.log("Goodbye!");
    }, 2000)
}

greet("Ritik", () => {
    askHowAreYou(() => {
        sayGoodbye();
    })
})
