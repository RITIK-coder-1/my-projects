const express = require("express") // importing express
const authRouter = express.Router() // instance of the router module
const authController = require("../controllers/authController.js")

authRouter.get("/", (req, res) => {
    req.statusCode = 200
    authController(res)
})

module.exports = authRouter // exporting the router