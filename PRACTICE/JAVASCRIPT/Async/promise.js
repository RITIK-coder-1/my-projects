// Creating a Promise ---->

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("executed");
        resolve() // it resolves the promise after timeout
        reject()
    }, 2000)
    // resolve() // it resolves the promise before timeout
})

// Consuming a Promise ---->

myPromise.then(() => {
    console.log("resolved");
})