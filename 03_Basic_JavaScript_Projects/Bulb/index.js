const body = document.body
body.style.backgroundColor = "black"

const button = document.getElementById("switch")
button.textContent = "TURN ON"

const offBulb = document.getElementById("off")
offBulb.style.visibility = "visible"

const yellowBulb = document.getElementById("yellow-bulb")
yellowBulb.style.visibility = "hidden" 

const blueBulb = document.getElementById("blue-bulb")
blueBulb.style.visibility = "hidden"

const greenBulb = document.getElementById("green-bulb")
greenBulb.style.visibility = "hidden"

const redBulb = document.getElementById("red-bulb")
redBulb.style.visibility = "hidden"

let isOff = true

const animatedButton = (button) => {

    button.style.animation = "none"
    void button.offsetWidth
    button.style.animation = "switch 0.1s ease-in-out 0s 1 normal"

}

const dropdown = ["Yellow", "Blue", "Green", "Red"]

const selectElements = document.getElementById("dropdown")

dropdown.forEach((language) => {

    const option = document.createElement("option")
    option.value = language
    option.textContent = language

    selectElements.append(option)
})

selectElements.addEventListener("change", function() {

    const selectedOption = this.options[this.selectedIndex];

}, false);

button.addEventListener("click", () => {
    
    if (isOff && selectElements.value === "Yellow"){
        body.style.backgroundColor = "#f3f391"
        yellowBulb.style.visibility = "visible"
        offBulb.style.visibility = "hidden"
        button.textContent = "TURN OFF"
    } else if (isOff && selectElements.value === "Blue"){
        body.style.backgroundColor = "#9b9bc0"
        blueBulb.style.visibility = "visible"
        offBulb.style.visibility = "hidden"
        button.textContent = "TURN OFF"
    } 
    else if (isOff && selectElements.value === "Green"){
        body.style.backgroundColor = "#5eb35e"
        greenBulb.style.visibility = "visible"
        offBulb.style.visibility = "hidden"
        button.textContent = "TURN OFF"
    } 
    else if (isOff && selectElements.value === "Red"){
        body.style.backgroundColor = "#d47878"
        redBulb.style.visibility = "visible"
        offBulb.style.visibility = "hidden"
        button.textContent = "TURN OFF"
    } 
    else {
        body.style.backgroundColor = "black"
        yellowBulb.style.visibility = "hidden"
        blueBulb.style.visibility = "hidden"
        greenBulb.style.visibility = "hidden"
        redBulb.style.visibility = "hidden"
        offBulb.style.visibility = "visible"
        button.textContent = "TURN ON"
    }
    isOff = !isOff

    animatedButton(button)
}, false)

