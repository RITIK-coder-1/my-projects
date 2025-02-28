import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true
        }
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    address: {
        type: [
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
    ],
    default: []
}
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)