import { Router } from "express" // importing the router 
import { loginUser, logoutUser, registerUser } from "../controllers/user.controllers.js" // importing the register user controller
import upload from "../middlewares/multer.middleware.js" // importing the multer middleware for file handling
import verifyJWT from "../middlewares/auth.middleware.js"
import newAccessToken from "../controllers/user.controllers.js"

const router = Router() // the router instance

router
.route("/register")
.post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
) // register the user on the register path

router.
route("/login")
.post(loginUser) // login the user on the login path

// secured routes (User should be logged in to access this)

router
.route("/logout")
.post(verifyJWT, logoutUser) // log the user out on this path

router.
route("/refresh-token")
.post(newAccessToken) // to issue new access token end point

export default router // exporting the router 