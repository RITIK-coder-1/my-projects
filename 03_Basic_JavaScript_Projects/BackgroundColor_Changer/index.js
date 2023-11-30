const body = document.body
body.style.backgroundColor = "black"
let isDark = true

const statement = document.querySelector("#set-color")
statement.textContent = "BLACK color is set by default"

const firstColor = document.querySelector(".one")
const secondColor = document.querySelector(".two")
const thirdColor = document.querySelector(".three")
const fourthColor = document.querySelector(".four")
const fifthColor = document.querySelector(".five")
const sixthcolor = document.querySelector(".six")
const seventhColor = document.querySelector(".seven")
const eighthColor = document.querySelector(".eight")


firstColor.addEventListener("click", () => {

    isDark = !isDark

    if(isDark){
        body.style.backgroundColor = "black"
        statement.textContent = "BLACK color is set by default"
    } else {
        body.style.backgroundColor = "#8D3DAF"
        statement.textContent = "The Color has been set to PURPLE"
    }

}, false)

secondColor.addEventListener("click", () => {

    isDark = !isDark

    if(isDark){
        body.style.backgroundColor = "black"
        statement.textContent = "BLACK color is set by default"
    } else {
        body.style.backgroundColor = "#E07C24"
        statement.textContent = "The Color has been set to TANGERINE"
    }

}, false)

thirdColor.addEventListener("click", () => {

    isDark = !isDark

    if(isDark){
        body.style.backgroundColor = "black"
        statement.textContent = "BLACK color is set by default"
    } else {
        body.style.backgroundColor = "#8D3DAF"
        statement.textContent = "The Color has been set to PURPLE"
    }

    body.style.backgroundColor = "#758283"
    statement.textContent = "The Color has been set to SLATE BLUE"
}, false)

fourthColor.addEventListener("click", () => {

    isDark = !isDark

    if(isDark){
        body.style.backgroundColor = "black"
        statement.textContent = "BLACK color is set by default"
    } else {
        body.style.backgroundColor = "#8D3DAF"
        statement.textContent = "The Color has been set to PURPLE"
    }

    body.style.backgroundColor = "#E0388B"
    statement.textContent = "The Color has been set to DEEP PINK"
}, false)

fifthColor.addEventListener("click", () => {

    isDark = !isDark

    if(isDark){
        body.style.backgroundColor = "black"
        statement.textContent = "BLACK color is set by default"
    } else {
        body.style.backgroundColor = "#8D3DAF"
        statement.textContent = "The Color has been set to PURPLE"
    }

    body.style.backgroundColor = "#FF6666"
    statement.textContent = "The Color has been set to REDDISH PINK"
}, false)

sixthcolor.addEventListener("click", () => {

    isDark = !isDark

    if(isDark){
        body.style.backgroundColor = "black"
        statement.textContent = "BLACK color is set by default"
    } else {
        body.style.backgroundColor = "#8D3DAF"
        statement.textContent = "The Color has been set to PURPLE"
    }

    body.style.backgroundColor = "#03C6C7"
    statement.textContent = "The Color has been set to AQUA"
}, false)

seventhColor.addEventListener("click", () => {

    isDark = !isDark

    if(isDark){
        body.style.backgroundColor = "black"
        statement.textContent = "BLACK color is set by default"
    } else {
        body.style.backgroundColor = "#8D3DAF"
        statement.textContent = "The Color has been set to PURPLE"
    }

    body.style.backgroundColor = "#CAD5E2"
    statement.textContent = "The Color has been set to LIGHT BLUE"
}, false)

eighthColor.addEventListener("click", () => {

    isDark = !isDark

    if(isDark){
        body.style.backgroundColor = "black"
        statement.textContent = "BLACK color is set by default"
    } else {
        body.style.backgroundColor = "#8D3DAF"
        statement.textContent = "The Color has been set to PURPLE"
    }

    body.style.backgroundColor = "#35BDD0"
    statement.textContent = "The Color has been set to SKY BLUE"
}, false)