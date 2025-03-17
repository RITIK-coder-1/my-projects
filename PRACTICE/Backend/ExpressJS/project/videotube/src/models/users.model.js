import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 1000
    },
    duration: {
        type: Number,
        required: true,
    }, 
    videoFile: {
        type: String, // URL from a different service (Cloudinary)
        required: true,
    }, 
    thumbnail: {
        type: String, // URL from a different service (Cloudinary)
        required: true,
    }, 
    views: {
        type: Number,
        required: true,
        default: 0
    }, 
    isPublished: {
        type: Boolean,
        required: true,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

// password hashing 
userSchema.pre("save", passwordChecker)

// password hashing function
async function passwordChecker(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
}

// password checking
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password) // a boolean value
}

// token generator
userSchema.methods.generateAccessToken = async function(){
    jwt.sign(
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

userSchema.methods.generateRefreshToken = async function(){
    jwt.sign(
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