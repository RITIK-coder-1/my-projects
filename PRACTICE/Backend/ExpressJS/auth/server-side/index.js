require("dotenv").config() // importing the environment variables

const app = require("./app") // importing the app module

const port = process.env.PORT || 3000; // port number should fall back to 3000 if it has not been specified in the environment variables

app.get("/", (req, res) => {
    res.send("Express is running!")
})

app.listen(port, () => {
    console.log("The server is listening...")    
})

