const events = require("events") // imported the events module
const eventEmitter = new events() // instance of the object

// listening to the event -->

eventEmitter.on("demo", (message) => { // when the demo event is triggered, display the input message
    console.log(message);
})

// emitting the event -->

const statement = "A demo event has been triggered" // the statement to be displayed

eventEmitter.emit("demo", statement) // emitting the event