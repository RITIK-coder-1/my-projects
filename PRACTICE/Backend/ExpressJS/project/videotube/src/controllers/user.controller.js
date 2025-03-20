import asyncHandler from "../utils/asyncHandler.js" // importing asynchandler

// the register user function
const controllerFunction = async (req, res) => {
    res
    .status(200)
    .json({
        message: "ok"
    })
}

// the register user control with error handling
const registerUser = asyncHandler(controllerFunction)

export default registerUser // exporting the controller