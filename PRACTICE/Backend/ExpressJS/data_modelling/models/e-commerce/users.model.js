import mongoose from "mongoose" // Importing mongoose

// Defining the user schema

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true, 
      unique: true, 
    },
    age: {
      type: Number,
      min: [18, "The user should be at least 18 years old to continue using this app."],
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      lowercase: true,
    },
    password: {
      type: String, 
      required: true,
      minlength: [6, "Password must be at least 6 characters long"], 
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
)

// Creating a model from the schema

const User = mongoose.model("User", userSchema)

export default User // Exporting the model
