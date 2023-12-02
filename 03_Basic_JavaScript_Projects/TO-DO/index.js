const body = document.body
let number = 0
function createText(){

const input = document.createElement("input")
input.type = "checkbox"
input.id = `checkbox${number}`

const text = document.createElement("input")
text.id = `text${number}`
text.type = "text"
text.style.backgroundColor = "#212121"
text.style.color = "aliceblue"
text.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
text.placeholder = "Type Something"
text.style.marginTop = "10px"
text.style.border = "none"
text.style.paddingBottom = "10px"
text.style.outline = "none"

const button = document.createElement("button")
button.style.backgroundColor = "red"
button.innerText = "DEL"
button.style.fontSize = "11px"
button.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
button.style.border = "none"
button.style.borderRadius = "5px"
button.style.height = "15px"
button.style.cursor = "pointer"


const div = document.createElement("div")
div.className = "input-field"
div.style.display = "flex"
div.style.alignItems = "center"

div.append(input)
div.append(text)
div.append(button)

body.append(div)

input.addEventListener("click", () => {
    text.style.textDecoration = "line-through"
}, false)

button.addEventListener("click", () => {
    setTimeout(() => {
        input.remove()
        text.remove()
        button.remove()
    }, 100)
}, false)

}

function addRemoveButton() {
    const remove = document.createElement("button");
    remove.id = "remove";
    remove.textContent = "REMOVE All";

    remove.addEventListener("click", () => {
        const inputFields = document.querySelectorAll(".input-field");
        inputFields.forEach((field) => field.remove())
        remove.remove();
        addRemoveButton(); // Recreate the Remove All button after removal
    });

    body.appendChild(remove);
}

const button = document.getElementById("button")
button.addEventListener("click", () => {
    setTimeout(() => {
        createText()
        document.getElementById("remove").style.display = "inline"
    }, 100)
    
    button.style.animation = "none"
    void button.offsetWidth
    button.style.animation = "button 0.2s linear 0s 1 normal"

    addRemoveButton()
    number++
}, false)


