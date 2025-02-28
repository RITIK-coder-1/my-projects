import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    unique: true 
},
  subcategories: [
    {
      name: { 
        type: String,
        required: true
    },
      items: {
        type: String, 
        enum: ["Computer", "Laptop", "Desktop", "Mobile Phone", "Tablet", "Wireless", "Wired", "Fictional", "Non-fictional"]
      }
    }
  ]
})

const Category = mongoose.model("Category", categorySchema)

export default Category
