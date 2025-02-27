import mongoose from "mongoose" // importing mongoose

// Defining the user schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: [true, "The username should be in lowercase"]
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email should be unique. If you're an existing user, please log in."],
        lowercase: true
    },
    password: {
        type: Number,
        required: true,
        min: [8, "Password must be of 8 characters minimum"]
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema) // curating a model out of the schema

export default User // exporting the schema 