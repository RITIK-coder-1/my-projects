import mongoose, { Aggregate } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new mongoose.Schema({
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

const Video = mongoose.model("Video", videoSchema)

export default Video