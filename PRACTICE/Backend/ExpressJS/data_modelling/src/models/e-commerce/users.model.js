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
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true,
      max: 10
    },
    address: [
      {
        country: {
          type: String,
          required: true
        },
        state: {
          type: String,
          required: true
        },
        city: {
          type: String,
          required: true
        },
        homeNumber: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true,
  }
)

// Creating a model from the schema

const User = mongoose.model("User", userSchema)

export default User // Exporting the model
