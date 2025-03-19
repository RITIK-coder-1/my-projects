import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"

const userSchema = new mongoose.Schema({
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

// password hashing 
userSchema.pre("save", passwordChecker)

// password hashing function
async function passwordChecker(next) {
    if (this.isModified("password")) {
        try {
            this.password = await bcrypt.hash(this.password, 10)
            console.log("The password has been successfully hashed.")
        } catch (error) {
            console.error("The password couldn't be hashed:", error.message)
            return next(error)
        }
    }
    next()
}

// password checking
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password) // a boolean value
}

// token generator

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    },
process.env.ACCESS_TOKEN_SECRET,
{
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
}
)
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
        _id: this._id
    },
process.env.REFRESH_TOKEN_SECRET,
{
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
}
)
}

const User = mongoose.model("User", userSchema)

export default User