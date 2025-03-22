import mongoose from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const videoSchema = new mongoose.Schema({
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

const Video = mongoose.model("Video", videoSchema)

videoSchema.plugin(mongooseAggregatePaginate)

export default Video