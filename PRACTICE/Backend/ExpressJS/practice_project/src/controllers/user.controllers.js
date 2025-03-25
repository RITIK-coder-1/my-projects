import asyncHandler from "../utils/asyncHandler.js" // importing asynchandler
import ApiError from "../utils/apiError.js" // importing api error handler
import ApiResponse from "../utils/apiResponse.js" // importing api response handler
import User from "../models/users.model.js" // importing the user model
import uploadOnCloudinary from "../utils/cloudinary.js" // importing the cloudinary upload function
import jwt from "jsonwebtoken" // importing the json web tokens
import "dotenv/config" // importing the environment variables

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

    // validating the data
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

    // fetching the user details
    const loggedInUser = await User.findById(existingUser._id).select("-password -refreshToken")

    // sending cookies
    const options = {
        httpOnly: true, // cookie can't be accessed via JavaScript
        secure: true // cookie is only sent over HTTPS
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

    // finding the user from database and updating its value at the same time
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

    // cookie security options
    const options = {
        httpOnly: true,
        secure: true
    }

    // clearing the cookies and the tokens once the user is logged out successfully
    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
        new ApiResponse(200, {}, "User Logged Out Succesfully!")
    )
}

// new access token function
const newAccessTokenFunction = async (req, res) => {
    try {
        // Getting our refresh token from the cookies or request body alternatively
        const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    
        if (!incomingRefreshToken){
            throw new ApiError(400, "Unauthorized Request") // throw an error if the refresh token is unauthorized
        }
    
        // once we have the refresh token, we decode it to get the user id
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
   
        // we get the user with a query
        const user = await User.findById(decodedToken?._id)
    
        if (!user){
            throw new ApiError(400, "Invalid Refresh Token") // throw an error if the user is not present
        }
    
        // double checking if the incoming refresh token matches the one stored in the database
        if (incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(400, "Refresh Token is expired or used")
        }
    
        // the cookie options
        const options = {
            httpOnly: true,
            secure: true
        }
    
        // getting the new access and the refresh tokens 
        const { accessToken, newRefreshToken } =  await generateTokens(user._id)
    
        // updating the cookies and sending a JSON API response
        res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access Token Refreshed!"
            )
        )
    } catch (error) {
        throw new ApiError(400, error.message || "Invalid Refresh Token") // if everything fails, the refresh token is invalid
    }
}

// fetching user details function
const getUserFunction = async (req, res) => {
    return res
    .status(200)
    .json(
        200, 
        req.user,
        "Current User Fetched Successfully!"
    )
}

// the update account function
const updateAccountFunction = async (req, res) => {

    // getting the data that can be updated
    const {fullname, username, email} = req.body

    // validating the data to be updated
    const isEmpty = [fullname, username, email].some((field) => field?.trim() === "")

    if (isEmpty){
        throw new ApiError(400, "All Fields Are Required!")
    }

    // finding the user and updating its values
    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullname: fullname,
                username: username,
                email: email
            }
        },
        {
            new: true
        }
    )
    .select("-password -refreshToken") // excluding sensitive information

    // checking if the user is valid
    if (!user){
        throw new ApiError(400, "User could not be updated")
    }

    // sending an API response for the successful update
    return res.status(200).json(
        new ApiResponse(200, user, "Account has been updated successfully")
    )
}

// the update password function
const updatePasswordFunction = async (req, res) => {

    // getting the new and old passwords
    const { oldPassword, newPassword } = req.body

    // getting the user and checking if the entered password is correct or not
    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect){
        throw new ApiError(400, "Invalid Old Password")
    }

    // updating the password
    user.password = newPassword
    await user.save({validateBeforeSave: false})

    return res
    .status(200)
    .json(
        new ApiResponse(200, {}, "Password Changed Successfully!")
    )
}

// the update file function
const updateFileFunction = async (req, res) => {
    // getting the path of the file
    const avatarLocalPath = req.file?.path // we're uploading a single file 

    // validating the path
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar File is missing")
    }

    // uploading the file on cloudinary 
    const avatar = await uploadOnCloudinary(avatarLocalPath)

    // validating the cloudinary url
    if (!avatar.url){
        throw new ApiError(400, "Could not upload the new avatar file")
    }

    // updating the user file on database
    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                avatar: avatar.url
            }
        },
        {
            new: true
        }
    )
    .select("-password -refreshToken")

    // validating if the file was updated
    if (!user){
        throw new ApiError(400, "Could not be updated!")
    }

    // sending a JSON API response
    res
    .send(200)
    .json(
        new ApiResponse(200, {}, "The file has been updated!")
    )
}


const registerUser = asyncHandler(registerFunction) // the register user controller with error handling
const loginUser = asyncHandler(loginFunction) // the login user controller with error handling
const logoutUser = asyncHandler(logoutFunction) // the login user controller with error handling
const newAccessToken = asyncHandler(newAccessTokenFunction) // the new accesstoken generator controller with error handling
const getUser = asyncHandler(getUserFunction) // the current user controller with error handling
const updateAccount = asyncHandler(updateAccountFunction) // the update account controller with error handling
const updatePassword = asyncHandler(updatePasswordFunction) // the update password controller with error handling
const updateFile = asyncHandler(updateFileFunction) // the update files controller with error handling


export { 
    registerUser,
    loginUser,
    logoutUser,
    newAccessToken,
    getUser,
    updateAccount,
    updatePassword,
    updateFile
} // exporting the controllers