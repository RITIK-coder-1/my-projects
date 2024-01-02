const body = document.body
const login = document.getElementById("login")
login.style.cursor = "pointer"
const logout = document.getElementById("logout")
logout.style.cursor = "pointer"
const heading = document.getElementById("heading")

let loggedIn = false
let loggedOut = false

const createForm  = function (){
    const form = document.createElement("form")
    form.style.display = "flex"
    form.style.flexDirection = "column"

    const input1 = document.createElement("input")
    input1.id = "input1"
    input1.setAttribute("placeholder", "Enter Your ID here")
    input1.type = "text"
    input1.style.width = "250px"

    const input2 = document.createElement("input")
    input2.id = "input2"
    input2.setAttribute("placeholder", "Enter Your Password here")
    input2.type = "text"
    input2.style.width = "250px"

    let submit = document.createElement("input")
    submit.id = "submit"
    submit.innerText = "Submit"
    submit.style.width = "150px"
    submit.type = "submit"
    submit.style.cursor = "pointer"
    
    
    form.append(input1)
    form.append(input2)
    form.append(submit)
    body.append(form)
}


login.addEventListener("click", () => {
    if (loggedIn === false){
        createForm()
    } else {
        document.querySelector('form').remove()
    }

    if (loggedIn === false){
        loggedIn = true
    } else {
        loggedIn = false
    }
}, false)


logout.addEventListener("click", () => {
    if (loggedIn === false){
        alert("You haven't logged in yet!")
    } else if (loggedOut === false && loggedIn === true){
        alert("Are you sure? You want to log out?")
        const form = document.getElementsByTagName("form")
        for (let index = 0; index < form.length; index++) {
        const element = form[index];  
        element.remove()        
        }
        heading.innerText = "The User has Logged Out."
        loggedOut = true
    } else if (loggedOut === true) {
        alert("You have already logged Out!")
    }
}, false)