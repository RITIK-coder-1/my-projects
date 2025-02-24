const app = require("./app") // importing the app module
const authRoutes = require("./routes/authRoutes") // imported the router

const port = 3000; // port number

app.use("/", authRoutes)

app.listen(port, () => {
    console.log("The server is listening...")    
})