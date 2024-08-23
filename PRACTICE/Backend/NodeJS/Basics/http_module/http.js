const http = require("http") // this stores the http module

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("<h1>Hello, You created your server!") // if the request url is this, send a response of this html text
    }
    res.end() // once the response has been sent, end it
})

server.listen(3000) // server listening at the port 3000