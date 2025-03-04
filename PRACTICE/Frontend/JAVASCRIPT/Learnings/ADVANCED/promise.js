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

// async and await

async function consumePromise(){
    try {
        let data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("executed")
                resolve("promise resolved")
                reject(Error)
            }, 2000)
        })

        console.log(data)

    } catch (error) {
        console.log("Promise is rejected: ", error)
    }    
}

consumePromise() // promise resolved




