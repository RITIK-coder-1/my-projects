const body = document.body

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
})

secondColor.addEventListener("click", () => {
    body.style.backgroundColor = "#E07C24"
})

thirdColor.addEventListener("click", () => {
    body.style.backgroundColor = "#758283"
})

fourthColor.addEventListener("click", () => {
    body.style.backgroundColor = "#E0388B"
})

fifthColor.addEventListener("click", () => {
    body.style.backgroundColor = "#FF6666"
})

sixthcolor.addEventListener("click", () => {
    body.style.backgroundColor = "#03C6C7"
})

seventhColor.addEventListener("click", () => {
    body.style.backgroundColor = "#CAD5E2"
})

eighthColor.addEventListener("click", () => {
    body.style.backgroundColor = "#35BDD0"
})