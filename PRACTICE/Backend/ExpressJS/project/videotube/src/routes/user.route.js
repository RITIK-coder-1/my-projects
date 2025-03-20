import { Router } from "express" // importing the router 
import registerUser from "../controllers/user.controller.js" // importing the register user controller
import upload from "../middlewares/multer.middleware.js" // importing the multer middleware for file handling

const router = Router() // the router instance

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "cover",
            maxCount: 1
        }
    ]),
    registerUser) // register the user on the register path

export default router // exporting the router 