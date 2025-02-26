require("dotenv").config() // importing the environment variables

const app = require("./app") // importing the app module
const authRoutes = require("./routes/authRoutes") // imported the router

const port = process.env.PORT || 3000; // port number should fall back to 3000 if it has not been specified in the environment variables

app.use("/", authRoutes)

app.listen(port, () => {
    console.log("The server is listening...")    
})

