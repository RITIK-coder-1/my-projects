const fs = require("fs")

fs.readFile("file.txt", (err, data) => {
    if (err) {
        console.log("There was an error: ", err);
    }
    console.log("Async: The data is: ", data.toString());
})

const data = fs.readFileSync("file.txt")

console.log("Sync: The data is: ", data.toString());
