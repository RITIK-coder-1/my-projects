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

// WRITING A FILE

fs.writeFile("fs.txt", "updated", (err) => { // this method replaces the content entirely
    if (!err) {
        console.log("The content has been updated"); // if there is no error, print this on console
    }
})

// fs.writeFileSync("fs.txt", "written"); // synchronous


fs.appendFile("fs.txt", "appended", (e) => { // this method appends a new content
    if (!e){
        console.log("The content has been appended");
    }
})

// fs.appendFileSync("fs.txt", "appended") // synchronous

// OPENING A FILE

const buffer = Buffer.alloc(1024) // the buffer object with 1024 bytes // temporary storage 

fs.open("fs.txt", "r+", (err, data) => { // read and write mode
    console.log("file has been opened");
    fs.read(data, buffer, 0, buffer.length, 3, (err, bytesRead, buffer) => { // it will start reading from the 3rd index
        console.log("The file has been read succesfully");
        console.log("The content: ", buffer.toString()); // the buffer has been converted to string
        console.log("The number of bytes read: ", bytesRead);
    })

    // closing the file
    fs.close(data, (err) => console.log("The file has been closed"))
})

// DELETING A FILE

// fs.unlink("fs.txt", (err) => {
//     console.log("The file has been successfully deleted");
// })

// CREATING A FILE

// fs.writeFile("fs.txt", "New File", (err) => {
//     console.log("A new file has been created");
// })
