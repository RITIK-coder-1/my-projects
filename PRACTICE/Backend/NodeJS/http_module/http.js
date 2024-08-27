const http = require("http") // this stores the http module

const hostname = "localhost" // the current host
const port = 3000 // port to listen at

const server = http.createServer((req, res) => {
    res.statusCode = 200 // the status code
    res.setHeader("Content-Type", "text/html") // the current content that is being sent is html
    if (req.url === "/") {
        res.write("<h1>Hello, I created my server using NodeJS!<h1> <br />") // if the request url is this, send a response of this html text
    }
    res.end("Ending Message...") // once the response has been sent, end it
    // the input parameter will be displayed on the page as the last message
})

server.listen(port, hostname, () => {
    console.log("The server is listening at port", port); // server listening at the port 3000
}) 