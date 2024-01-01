const button = document.getElementById('button')
const body = document.body

button.addEventListener('click', () => {
    body.style.backgroundColor = `${generateRandomColor()}`
})

const randomColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

const generateRandomColor = () => {
    let Color = "#"
    for (let i = 0; i < 6; i++) {
        const Element = randomColor[randomNumber()]
        Color += Element
    }
    return Color
}

const randomNumber = () => {

return Math.floor(Math.random() * 16)

}