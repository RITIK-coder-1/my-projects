import asyncHandler from "../utils/asyncHandler.js" // importing asynchandler
import ApiError from "../utils/apiError.js" // importing api error handler
import ApiResponse from "../utils/apiResponse.js" // importing api response handler
import User from "../models/users.model.js" // importing the user model
import uploadOnCloudinary from "../utils/cloudinary.js" // importing the cloudinary uplload function

// the register user function
const controllerFunction = async (req, res) => {

    // destructuring the request body object
    const { username, fullname, email, password } = req.body
    
    // validating if all the required fields have been input or not by removing extra spaces
    if (
        [username, fullname, email, password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required!")
    }

    // checking if the user already exists or not
    const existingUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if (existingUser){
        throw new ApiError(400, "The user is already registered!")
    }

    // checking files (images) upload
    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverLocalPath = req.files?.cover[0]?.path    
    
    if (!avatarLocalPath){
        throw new ApiError(400, "Please upload a profile picture!")
    }

    // uploading files on cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverLocalPath)

    if (!avatar || !coverImage){
        throw new ApiError(400, "Image wasn't uploaded")
    }

    // saving the user data in database
    const user = await User.create({
        username,
        fullname,
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage.url
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    // validating if the user has been registered
    if (!createdUser){
        throw new ApiError(500, "There was a problem while registering the user")
    }

    // API Response if user has been registered successfully
    return res.status(200).json(
        new ApiResponse(200, createdUser, "User has been registered succesfully!")
    )
}


// the register user controller with error handling
const registerUser = asyncHandler(controllerFunction)

export default registerUser // exporting the controller