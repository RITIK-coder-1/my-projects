const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("executed");
    }, 10000)
    resolve ("done")
})