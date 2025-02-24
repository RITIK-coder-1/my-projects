const app = require("./app") // importing the app module

const port = 3000; // port number

app.get("/", (req, res) => {
    res.send("Express")
})

app.listen(port, () => {
    console.log("The server is listening...")    
})