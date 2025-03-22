import asyncHandler from "../utils/asyncHandler.js" // importing asynchandler
import ApiError from "../utils/apiError.js" // importing api error handler
import ApiResponse from "../utils/apiResponse.js" // importing api response handler
import User from "../models/users.model.js" // importing the user model
import uploadOnCloudinary from "../utils/cloudinary.js" // importing the cloudinary uplload function

// Function to generate Access and Refresh Tokens
const generateTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "Could not generate tokens")
    }
}

// the register user function
const registerFunction = async (req, res) => {
    
    // destructuring the request body object
    const { username, fullname, email, password } = req.body
    
    // validating if all the required fields have been input or not by removing extra spaces
    const isInputWrong = [username, fullname, email, password].some((field) => field?.trim() === "") // (it stores a boolean value if atleast each field is empty or not)

    if (isInputWrong){
        throw new ApiError(400, "All fields are required!")
    } // (if a field is empty, throw an error message) 

    // checking files (images) upload
    const avatarLocalPath = req.files?.avatar[0]?.path // (required)
    
    let coverLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverLocalPath = req.files.coverImage[0].path // only if the cover image is uploaded
    }

    if (!avatarLocalPath){
        throw new ApiError(400, "Please upload a profile picture!")
    } // (if the avatar is empty, throw an error message)

    // checking if the user already exists or not
    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existingUser){
        throw new ApiError(400, "The user is already registered!")
    } // (if the user exists already, throw an error message) 

    // uploading files on cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverLocalPath)

    if (!avatar){
        throw new ApiError(400, "Image wasn't uploaded")
    }

    // saving the user data in database
    const user = await User.create({
        username,
        fullname,
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || "" // only if the cover image is present, else it should be empty
    })

    // validating if the user has been registered
    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createdUser){
        throw new ApiError(500, "There was a problem while registering the user")
    }

    // API Response if user has been registered successfully
    return res.status(200).json(
        new ApiResponse(200, createdUser, "User has been registered succesfully!")
    )
}

// the login user function
const loginFunction = async (req, res) => {

    // Getting data from the user
    const { username, email, password } = req.body

    // validating data
    if (!username || !email){
        throw new ApiError(400, "username or email is required!")
    }

    // checking if the input data exists in the database
    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (!existingUser){
        throw new ApiError(404, "the user isn't registered! Enter correct credentials or sign up.")
    }

    // checking if the password for the given user is correct or not
    const passwordValidator = await existingUser.isPasswordCorrect(password)

    if (!passwordValidator){
        throw new ApiError(400, "The password isn't correct!")
    }

    // generating tokens if the user exists 
    const { accessToken, refreshToken } = await generateTokens(existingUser._id)

    const loggedInUser = await User.findById(existingUser._id).select("-password -refreshToken")

    // sending cookies
    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, {
                user: loggedInUser,
                accessToken,
                refreshToken
            },
            "User Logged In Successfully!"
        )
    )
}

// the logout user function
const logoutFunction = async (req, res) => {

    // finding the user from database
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        }, {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
        new ApiResponse(200, {}, "User Logged Out Succesfully!")
    )
}

const registerUser = asyncHandler(registerFunction) // the register user controller with error handling
const loginUser = asyncHandler(loginFunction) // the login user controller with error handling
const logoutUser = asyncHandler(logoutFunction) // the login user controller with error handling


export { 
    registerUser,
    loginUser,
    logoutUser
} // exporting the controllers