const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("executed");
    }, 2000)
    resolve ("done")
})

myPromise.then()