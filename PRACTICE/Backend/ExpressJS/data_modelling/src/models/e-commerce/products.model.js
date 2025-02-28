import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "The product should have a name. Please enter a name."]
    },
    price: {
        INR: {
            type: Number,
            min: [1, "No Free Products"],
            required: [true, "Price is required. Please enter a price."]                
        },
        USD: {
            type: Number,
            min: [0.1, "No Free Products"],
            required: [true, "Price is required. Please enter a price."]                
        }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        refer: "User"
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

export default Product