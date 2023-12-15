const body = document.body
body.style.backgroundColor = "black"

const button = document.getElementById("switch")
button.textContent = "TURN ON"

const offBulb = document.getElementById("off")
offBulb.style.visibility = "visible"

const yellowBulb = document.getElementById("on-yellow")
yellowBulb.style.visibility = "hidden" 

let isDark = true

const animatedButton = (button) => {

    button.style.animation = "none"
    void button.offsetWidth
    button.style.animation = "switch 0.1s ease-in-out 0s 1 normal"

}

const dropdown = ["yellow", "blue", "green", "red"]

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
    
    if (isDark){
        body.style.backgroundColor = "#f3f391"
        yellowBulb.style.visibility = "visible"
        offBulb.style.visibility = "hidden"
        button.textContent = "TURN OFF"
    } else {
        body.style.backgroundColor = "black"
        yellowBulb.style.visibility = "hidden"
        offBulb.style.visibility = "visible"
        button.textContent = "TURN ON"
    }
    isDark = !isDark

    animatedButton(button)
}, false)

