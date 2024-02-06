let array = []

const screen = document.getElementById("screen")
screen.value 

let operation

const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")

const add = document.getElementById("add")
const sub = document.getElementById("sub")
const equals = document.getElementById("equals")

const clear = document.getElementById("clear")

one.addEventListener("click", () => {
    addItems(1)
})
two.addEventListener("click", () => {
    addItems(2)
})

add.addEventListener("click", () => {
    operation = "add"
})
sub.addEventListener("click", () => {
    operation = "sub"
})
equals.addEventListener("click", () => {
    // clicking the equal button will calculate on the basis of these conditions --->
    let result = 0
    array.map((ele) => {
        if (operation === "add") {
            result += ele
        } else if (operation === "sub"){
            result -= ele
        }
    })
    array = []
    console.log(result);
})

clear.addEventListener("click", () => {
    screen.value = ""
    array = []
})

// hidding placeholder while calculations --->

if (screen.value === ""){
    screen.placeholder = 0
} else {
    screen.placeholder = ""
}

// add items function --->
function addItems(button) {
    storedValues = array.push(button)
    console.log(array);
    return array
}

