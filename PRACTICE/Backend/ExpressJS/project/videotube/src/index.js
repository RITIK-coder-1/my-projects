import mongoose from "mongoose" // importing mongoose
import { DB_NAME } from "./constants.js" // importing the database name
import 'dotenv/config' // importing the environment variables
import express from "express" // importing the express

const app = express() // the express app
const port = process.env.PORT || 3000

;(
    async function connectDB() {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

            app.on("error", (error) => {
                console.log("There was an error in the server listening to the database :", error)                
            })

            app.listen(port, () => {
                console.log("Our express app has been started!")                
            })
        } catch (error) {
            console.error("There was an error while connecting to the database: ", error)            
        }
    }
)();