import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "The product should have a name. Please enter a name."]
    },
    price: {
        type: Number,
        min: [1, "No Free Products"],
        required: [true, "Price is required. Please enter a price."]
    },
    category: {
        type: String,
        required: true,
        enum: ["electronics", "clothing", "home", "books"]
    },
    stock: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

export default Product