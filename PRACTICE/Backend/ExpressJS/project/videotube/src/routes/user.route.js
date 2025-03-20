import { Router } from "express" // importing the router 
import registerUser from "../controllers/user.controller.js" // importing the register user controller

const router = Router() // the router instance

router.route("/register").post(registerUser)

export default router // exporting the router 