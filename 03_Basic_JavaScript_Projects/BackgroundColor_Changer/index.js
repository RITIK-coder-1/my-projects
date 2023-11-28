const body = document.body
const statement = document.querySelector("#set-color")

const firstColor = document.querySelector(".one")
const secondColor = document.querySelector(".two")
const thirdColor = document.querySelector(".three")
const fourthColor = document.querySelector(".four")
const fifthColor = document.querySelector(".five")
const sixthcolor = document.querySelector(".six")
const seventhColor = document.querySelector(".seven")
const eighthColor = document.querySelector(".eight")


firstColor.addEventListener("click", () => {
    body.style.backgroundColor = "#8D3DAF"
    statement.textContent = "The Color has been set to PURPLE"
})

secondColor.addEventListener("click", () => {
    body.style.backgroundColor = "#E07C24"
    statement.textContent = "The Color has been set to TANGERINE"
})

thirdColor.addEventListener("click", () => {
    body.style.backgroundColor = "#758283"
    statement.textContent = "The Color has been set to SLATE BLUE"
})

fourthColor.addEventListener("click", () => {
    body.style.backgroundColor = "#E0388B"
    statement.textContent = "The Color has been set to DEEP PINK"
})

fifthColor.addEventListener("click", () => {
    body.style.backgroundColor = "#FF6666"
    statement.textContent = "The Color has been set to REDDISH PINK"
})

sixthcolor.addEventListener("click", () => {
    body.style.backgroundColor = "#03C6C7"
    statement.textContent = "The Color has been set to AQUA"
})

seventhColor.addEventListener("click", () => {
    body.style.backgroundColor = "#CAD5E2"
    statement.textContent = "The Color has been set to LIGHT BLUE"
})

eighthColor.addEventListener("click", () => {
    body.style.backgroundColor = "#35BDD0"
    statement.textContent = "The Color has been set to SKY BLUE"
})