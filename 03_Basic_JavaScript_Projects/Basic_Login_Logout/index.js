const body = document.body
const login = document.getElementById("login")
const logout = document.getElementById("logout")
const heading = document.getElementById("heading")

let isLoggedIn = false
let isLoggedOut = false
let filledForm = false

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
    
    
    form.append(input1)
    form.append(input2)
    form.append(submit)
    body.append(form)

    submit.addEventListener("click", () => {
        event.preventDefault()
        if (input1.value === "" || input2.value === "") {
            alert("please fill the form first!")
        } else {
            heading.innerText = "The User has logged In."
            const form = document.getElementsByTagName("form")
            for (let index = 0; index < form.length; index++) {
            const element = form[index];  
            element.remove()    
            filledForm = true    
        }
        }  
    })
}

const remove = () => {
    const form = document.querySelector("form")
    form.remove()
}

login.addEventListener("click", () => {

    if (isLoggedIn === false){
        isLoggedIn = true
    } else if (isLoggedIn === true){
        isLoggedIn = false
    }

    if (isLoggedIn === true){
        createForm()
    } else {
        remove()
    }
})

logout.addEventListener("click", () => {

    if (isLoggedIn === false || filledForm === false){
        alert("You haven't logged in yet.")
    } else if (isLoggedOut === false){
        isLoggedOut = true
    } else if (isLoggedOut === true){
        isLoggedOut = false
    }

    if (isLoggedOut === true){

    alert("Are you sure? You want to log out?")

    const form = document.getElementsByTagName("form")
    for (let index = 0; index < form.length; index++) {
        const element = form[index];  
        element.remove()        
    }

    heading.innerText = "The User has Logged Out."

    logout.addEventListener("click", () => {
        alert("You have already logged out!")
    })
    
    login.addEventListener("click", () => {

        if (isLoggedOut === true){
    
        if (isLoggedIn === false){
            isLoggedIn = true
        } else if (isLoggedIn === true){
            isLoggedIn = false
        }
    
        if (isLoggedIn === true){
            createForm()
            heading.innerText = ""
        } else {
            remove()
        }
    }
    })
} 
})





