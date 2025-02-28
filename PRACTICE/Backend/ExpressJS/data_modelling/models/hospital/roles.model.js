import mongoose from "mongoose"

const roleSchema = new mongoose.Schema({
    name: 
    {
        type: String,
        enum: ["Doctor", "Patient", "Admin"],
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const Role = mongoose.model("Role", roleSchema)