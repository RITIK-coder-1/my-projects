import express from "express"; // Imported the Express module

const app = express(); // This creates an instance of an Express application

const port = 5000; // specific port

app.get('/', (req, res) => { // this method works with the get requests
  res.send('Hello, World!'); // Send a response of "Hello, World!" to the client
});

app.listen(port, () => { // this method is used to listen for requests
  console.log(`Server is running on http://localhost:${port}`); // This logs a message indicating the server is running
});
