const button = document.getElementById('button')
const body = document.body

button.addEventListener('click', () => {
    body.style.backgroundColor = `${generateRandomColor()}`
    let bodyStyle = button.style.backgroundColor
    button.style.backgroundColor = `#${reverseString(body.style.backgroundColor).slice(0, 6)}`
    animatedButton(button)
    console.log(`#${reverseString(generateRandomColor()).slice(0, 6)}`);
    console.log(generateRandomColor());
    console.log(bodyStyle);
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

function animatedButton(Button){
    Button.style.animation = "none"
    void Button.offsetWidth
    Button.style.animation = "button 0.1s ease-in-out 0s 1 normal"
}

function reverseString(str) {
    return str.split('').reverse().join('');
}