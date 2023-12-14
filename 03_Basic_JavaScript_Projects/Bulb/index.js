const body = document.body
body.style.backgroundColor = "black"

const button = document.getElementById("switch")
button.textContent = "TURN ON"

const offBulb = document.getElementById("off")
offBulb.style.visibility = "visible"

const onBulb = document.getElementById("on")
onBulb.style.visibility = "hidden" 

let isDark = true

const animatedButton = (button) => {

    button.style.animation = "none"
    void button.offsetWidth
    button.style.animation = "switch 0.1s ease-in-out 0s 1 normal"

}

button.addEventListener("click", () => {
    
    if (isDark){
        body.style.backgroundColor = "#f3f391"
        onBulb.style.visibility = "visible"
        offBulb.style.visibility = "hidden"
        button.textContent = "TURN OFF"
    } else {
        body.style.backgroundColor = "black"
        onBulb.style.visibility = "hidden"
        offBulb.style.visibility = "visible"
        button.textContent = "TURN ON"
    }
    isDark = !isDark

    animatedButton(button)
}, false)

const colors = [blue, green, red]
const dropdown = document.getElementById("dropdown")