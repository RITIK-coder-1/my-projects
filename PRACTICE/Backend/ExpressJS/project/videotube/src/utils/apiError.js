class ApiError extends Error {
    constructor(statusCode, message, errors = [], stack = "") {
        super(message)
        this.statusCode = statusCode
        this.success = false
        this.errors = errors

        // Stack trace handling
        this.stack = stack || new Error().stack
    }
}

export default ApiError
