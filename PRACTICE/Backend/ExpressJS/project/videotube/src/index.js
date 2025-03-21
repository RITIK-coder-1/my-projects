import "dotenv/config" // importing the environment variables
import connectDB from "./db/index.js" // importing the database connection
import app from "./app.js" // importing the express app

const port = process.env.PORT || 3000

app.on("error", (error) => {
    console.log("There was an unexpected error :", error)    
})

// Global Error Handling Middleware

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        success: false,
        message: error.message || "Internal Server Error",
        error: process.env.NODE_ENV === "development" ? err : undefined, // Full error object for debugging (only in development) 
    })
})

// connecting the database

connectDB()
.then(() => {
    app.get("/", (req, res) => {
        res.send("Just A Demo!")
    })
    app.listen(port, () => {
        console.log("Our app started listening at", port)        
    })
})
.catch((error) => {
    console.error("There was an error connecting to the database: ", error)
}) 