// Creating HTML Content using JavaScript -------->

const body = document.body
body.style.backgroundColor = "#212121"
body.style.color = "aliceblue"
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.justifyContent = "center"
body.style.alignItems = "center"

// Adding Text to the title element --->

const title = document.querySelector("title")

const titleText = document.createTextNode("JAVASCRIPT CREATED ELEMENTS")

title.append(titleText) 
    
// Adding Styled Content to the body ---->

const h1 = document.createElement("h1")

const headingText = document.createTextNode("JavaScript Created Heading!")

h1.append(headingText)
body.append(h1)

const para = document.createElement("p")

const paraText = document.createTextNode("Javascript created paragraph! I'm realising how Powerful JavaScript is!")

para.append(paraText)
body.append(para)

const div = document.createElement("div")

div.style.border = "2px solid red"
div.style.borderRadius = "50%"
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
