console.log(document);
console.log(document.all);
console.log(document.title);
console.log(document.head);
console.log(document.body); // null

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

const div = document.createElement("div")
div.append("Text inside a div")

body.append(div)

console.log(document.getElementsByTagName("div"));