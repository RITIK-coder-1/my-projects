const button = document.getElementById('button')

button.addEventListener('click', () => {
    generateRandomColor()
})

const randomColor = ["0", "1", "2", "3", "4", "5", "6", "A", "B", "C", "D", "E", "F"]

const generateRandomColor = () => {
    let Color = "#"
    for (let i = 0; i < randomNumber(); i++) {
        const Element = randomColor[i]
        Color += Element
        console.log(Element);
    }
    // console.log(Element);
    console.log(randomNumber())
}

const randomNumber = () => {
let min = 6
let max = 13
    return Math.floor(Math.random() * ((max - min) + 1) + min)
}