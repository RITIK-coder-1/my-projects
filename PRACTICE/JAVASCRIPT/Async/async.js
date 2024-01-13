setTimeout(() => {
    console.log("async exec");
}, 2000)

console.log("first execution");

function demo(){
    console.log("func");
}

setInterval(() => {
    console.log("interval");
}, 1000)

demo()

setTimeout(() => {
    console.log("async execution");
}, 0)

demo()

console.log("end");