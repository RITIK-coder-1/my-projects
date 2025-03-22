import mongoose from "mongoose" // importing mongoose
import { DB_NAME } from "../constants.js" // importing the name of the database

async function connectDB() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Database Connected Successfully")        
    } catch (error) {
        console.error("There was an error in database connection :", error)        
        process.exit(1)
    }
}

export default connectDB // exporting the database