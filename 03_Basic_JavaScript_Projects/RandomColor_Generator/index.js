const button = document.getElementById('button')
const body = document.body

button.addEventListener('click', () => {
    let bodyStyle = generateRandomColor()
    let buttonStyle = `#${reverseString(bodyStyle).slice(0, 6)}` // opposite the color of the background // I sliced it to not include the "#" at the end
    body.style.backgroundColor = `${bodyStyle}`
    button.style.backgroundColor = `${buttonStyle}`
    animatedButton(button)
    console.log(`1: Background Color: ${bodyStyle}`);
    console.log(`2: Button Color: ${buttonStyle}`);
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

function reverseString(str) {
    return str.split('').reverse().join('');
}

function animatedButton(Button){
    Button.style.animation = "none"
    void Button.offsetWidth
    Button.style.animation = "button 0.1s ease-in-out 0s 1 normal"
}