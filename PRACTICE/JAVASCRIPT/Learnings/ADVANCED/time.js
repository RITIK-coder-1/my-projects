setTimeout(message, 2000)

function message() {
    console.log('delay of 2 secs');
}

let interval = setInterval(message, 2000)

setTimeout(() => {
    clearInterval(interval)
    console.log("interval cleared");
}, 5000)