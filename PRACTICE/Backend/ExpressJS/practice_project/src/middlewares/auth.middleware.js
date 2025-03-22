import asyncHandler from "../utils/asyncHandler.js"
import ApiError from "../utils/apiError.js"
import jwt from "jsonwebtoken"
import "dotenv/config"
import User from "../models/users.model.js"

try {
    const verfyingMiddleware = async (req, res, next) =>
    {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    
        if (!token){
            throw new ApiError(400, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user){
            throw new ApiError(400, "Invalid Access Token")
        }
    
        req.user = user
    
        next()
    }
} catch (error) {
    throw new ApiError(400, "Could not verify token")
}

const verifyJWT = asyncHandler(verfyingMiddleware)

export default verifyJWT