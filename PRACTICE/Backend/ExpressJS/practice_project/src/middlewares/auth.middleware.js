import asyncHandler from "../utils/asyncHandler.js"
import ApiError from "../utils/apiError.js"
import jwt from "jsonwebtoken"
import "dotenv/config"
import User from "../models/users.model.js"

// The function to verify the JWT token

try {
    const verfyingMiddleware = async (req, _, next) =>
    {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "") // token from cookies or a custom header
    
        if (!token){
            throw new ApiError(400, "Unauthorized request")
        } // throw an error if there is no access token
    
        // decoding the token and retrieving the payload
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        // the user 
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user){
            throw new ApiError(400, "Invalid Access Token")
        } // if the user doesn't exist with the specific token
    
        req.user = user // adding the user to the request object for later processing
    
        next()
    }
} catch (error) {
    throw new ApiError(400, "Could not verify token")
}

// veriyfing JWT with error handling
const verifyJWT = asyncHandler(verfyingMiddleware)

export default verifyJWT