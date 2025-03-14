import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
            required: true
        }
    ],
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index: true
    }, 
    avatar: {
        type: String, // URL from a different service (Cloudinary)
        required: true,
    }, 
    coverImage: {
        type: String, // URL from a different service (Cloudinary)
        required: true,
    }, 
    password: {
        type: String,
        required: true,
    }, 
    refreshToken: {
        type: String,
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User