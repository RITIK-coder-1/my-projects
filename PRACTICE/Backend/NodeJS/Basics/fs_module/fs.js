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

// fs.open("fs.txt")

// Writing a File

fs.writeFile("fs.txt", "updated", (err) => { // this method replaces the content entirely
    if (!err) {
        console.log("The content has been updated"); // if there is no error, print this on console
    }
})

fs.appendFile("fs.txt", "appended", (e) => { // this method appends a new content
    if (!e){
        console.log("The content has been appended");
    }
})

