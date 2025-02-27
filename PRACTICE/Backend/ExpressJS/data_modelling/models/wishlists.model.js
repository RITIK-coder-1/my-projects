import mongoose from "mongoose"

const wishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }]
}, {
    timestamps: true
})


wishlistSchema.index({ userId: 1, products: 1 }, { unique: true })

const Wishlist = mongoose.model("Wishlist", wishlistSchema)

export default Wishlist
