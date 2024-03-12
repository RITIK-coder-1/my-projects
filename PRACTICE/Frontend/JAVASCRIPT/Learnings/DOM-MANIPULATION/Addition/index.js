// console.log(document);
// console.log(document.all);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body); 

// changing elements

// document.title = "Changed Title"

// Adding a text --->

document.body.append("hey")

// creating and adding a text ---->

const text = document.createTextNode("  hiiiii")
let body = document.body

body.append(text)

// creating and adding element --->

const para = document.createElement("p")
para.append("This is a paragraph")

body.append(para)

// adding a styled div ------->

const div = document.createElement("div")

div.style.border = "2px solid red"
div.style.height = "250px"
div.style.width = "250px"
div.style.backgroundColor = "blue"
div.style.display = "flex"
div.style.justifyContent = "center"
div.style.alignItems = "center"
div.style.fontFamily = "Sans-serif"
div.style.fontWeight = "900"


const divText = "this is a JS generated text"


div.append(divText)

body.append(div)