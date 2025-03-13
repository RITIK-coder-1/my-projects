import "dotenv/config" // importing the environment variables
import connectDB from "./db/index.js" // importing the database connection
import app from "./app.js" // importing the express app

const port = process.env.PORT || 3000

// connecting the database

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log("Our app started listening at", port)        
    })
})
.catch((error) => {
    console.error("There was an error connecting to the database: ", error)
}) 