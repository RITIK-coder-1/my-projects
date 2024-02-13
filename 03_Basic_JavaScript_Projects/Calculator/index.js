let array = [] // array to store numbers and perform arithmetic operations
let operation // it will decide the type of operation
let screenValue = ""

// Selecting elements --->

const screen = document.getElementById("screen")
screen.value = screenValue

const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")

const add = document.getElementById("add")
const sub = document.getElementById("sub")
const multiply = document.getElementById("multiply")
const equals = document.getElementById("equals")

const clear = document.getElementById("clear")

// Operations --->

add.addEventListener("click", () => {
    operation = "add"
    display("+")
})
sub.addEventListener("click", () => {
    operation = "sub"
    display("-")
})

equals.addEventListener("click", () => {
    // clicking the equal button will calculate on the basis of these conditions --->

    let initialvalue = 0
    let result = array.reduce((accumulator, element) => accumulator + element, initialvalue)

    array = [] // the array should get empty once a calculation is done
    operation = undefined // the operation should again reset to its original value
    screen.value = result
    console.log(result);
})
// clicking numbers --->

one.addEventListener("click", () => {
    switch (operation) {
        case undefined:
            addItems(1)
            break; 
        case "add":
            addItems(1)
            break;   
        case "sub":
            addItems(-1)
            break;
    } 
})
two.addEventListener("click", () => {
    switch (operation) {
        case undefined:
            addItems(2)
            break; 
        case "add":
            addItems(2)
            break;  
        case "sub":
            addItems(-2)
            break;
    }
})
three.addEventListener("click", () => {
    switch (operation) {
        case undefined:
            addItems(3)
            break; 
        case "add":
            addItems(3)
            break;  
        case "sub":
            addItems(-3)
            break;
    }
})
four.addEventListener("click", () => {
    switch (operation) {
        case undefined:
            addItems(4)
            break; 
        case "add":
            addItems(4)
            break;  
        case "sub":
            addItems(-4)
            break;
    }
})
five.addEventListener("click", () => {
    switch (operation) {
        case undefined:
            addItems(5)
            break; 
        case "add":
            addItems(5)
            break;  
        case "sub":
            addItems(-5)
            break;
    }
})
six.addEventListener("click", () => {
    switch (operation) {
        case undefined:
            addItems(6)
            break; 
        case "add":
            addItems(6)
            break;  
        case "sub":
            addItems(-6)
            break;
    }
})
seven.addEventListener("click", () => {
    switch (operation) {
        case undefined:
            addItems(7)
            break; 
        case "add":
            addItems(7)
            break;  
        case "sub":
            addItems(-7)
            break;
    }
})
eight.addEventListener("click", () => {
    switch (operation) {
        case undefined:
            addItems(8)
            break; 
        case "add":
            addItems(8)
            break;  
        case "sub":
            addItems(-8)
            break;
    }
})
nine.addEventListener("click", () => {
    switch (operation) {
        case undefined:
            addItems(9)
            break; 
        case "add":
            addItems(9)
            break;  
        case "sub":
            addItems(-9)
            break;
    }
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
    array.push(button)
    console.log(array);
    
    // Immediately Invoked Function to update screen value --> 

    (() => {

        if (button < 0){
            button *= -1 
            // button should be displayed positive as the "-" sign will have already been displayed by the "sub" button onto the screen
        }

        // Concatenating the clicked value to the current value

        let newValue = screen.value + button;
        
        // Updating the display with the new value
        screen.value = newValue;
    })()
}

function display(button) {
    let newValue = screen.value + button

    screen.value = newValue
}
