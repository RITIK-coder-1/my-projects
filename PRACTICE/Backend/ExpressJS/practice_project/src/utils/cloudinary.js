import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
import "dotenv/config"

// configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Upload On Cloudinary
const uploadOnCloudinary = async (filePath) => {
    if (!filePath) return null

    try {
        const response = await cloudinary.uploader.upload(filePath, { resource_type: "auto" })
        console.log("Upload Successful:", response.url)

        // Delete the file after uploading

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error("File deletion failed:", err.message)
            } else {
                console.log("The file has been deleted successfully!")
            }
        })
        return response
    } catch (error) {

        // Delete the file in case it has been corrupted
        
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error("File deletion failed:", err.message)
            } else {
                console.log("The file has been deleted successfully!")
            }
        })
        console.error("Upload Failed:", error)
        return null
    }
}

export default uploadOnCloudinary