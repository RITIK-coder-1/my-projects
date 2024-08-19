const fs = require("fs") // this stores the file system module

// READING A FILE

// async way

fs.readFile("fs.txt", (err, data) => {
    if (err) {
        console.log("There was an error in reading the file"); // if it catches an error
    } else {
        console.log(data.toString()); // the data has been converted to string
    }    
})

// sync way

const read = fs.readFileSync("fs.txt") // this returns the data directly
console.log(read.toString()); // the data has been converted to string

// Opening a File

fs.open("fs.txt")


