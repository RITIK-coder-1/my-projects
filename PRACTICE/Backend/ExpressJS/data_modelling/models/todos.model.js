import mongoose from "mongoose" 

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
})

const Todo = mongoose.model("Todo", todoSchema)

export default Todo