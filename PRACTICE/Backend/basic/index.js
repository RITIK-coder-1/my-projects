const express = require("express") // it gets the express library and stores it in the variable "express"
const app = express() // it returnes the express app and stores it within the "app" variable.
const port = process.env.PORT || 3000 // port number

app.get("/", (req, res) => { // handles the get resquest at the home route and sends a message.
  res.send("Hello World!")
})

app.get("/", (req, res) => { // this code will never be reached
    res.send("Ritik")
})

app.get("/new", (req, res) => { // handles the get request at the new route and sends a message.
    res.send("<h1>New response!</h1>")
})

app.listen(port, () => { // the server has been created and it listens to the 3000 port 
  console.log(`My Sever is listening on port ${port}`)
})