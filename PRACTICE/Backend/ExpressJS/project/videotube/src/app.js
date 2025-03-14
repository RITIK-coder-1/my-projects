import express from "express" // importing express
import cors from "cors" // importing cors for security
import cookieParser from "cookie-parser" // importing cookie-parser
import "dotenv/config" // importing environment variables

const app = express() // the express app
const limit = "16kb" // setting the limit of accepting data

// setting the cors origin
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// accepting different data
app.use(express.json({
    limit: limit
}))
app.use(express.urlencoded({
    limit: limit,
    extended: true
})) 
app.use(express.static("public"))
app.use(cookieParser())

export default app