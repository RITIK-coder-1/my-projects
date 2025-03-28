import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./public/temp")
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({
    storage: storage
})

export default upload