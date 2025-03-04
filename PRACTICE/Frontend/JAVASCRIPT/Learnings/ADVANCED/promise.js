// Creating a Promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("executed")
        resolve("promise resolved")
        reject(Error)
    }, 2000)
})

// Consuming a Promise

myPromise
.then((data) => data + " returned again")
.then((data) => console.log(data)) // promise resolved returned again