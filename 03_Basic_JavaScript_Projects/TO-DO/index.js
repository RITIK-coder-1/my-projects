const body = document.body
let number = 0
let tasks = 0
const numberOfToDo = document.querySelector("nav > div > span")
const tasksDone = document.querySelector("nav > div > span + span")
const add = document.getElementById("add-button")
const input = document.getElementById("todo-input")
const todoList = document.getElementById("todo-list")
const reset = document.getElementById("reset")
const nav = document.querySelector("nav")

const container = document.getElementById("container")

add.addEventListener("click", () => {
    createToDo()
})

function createToDo() {

    const todoItem = document.createElement("li")
    todoItem.className = "todo-item"
    const todo = document.createElement("input")
    todo.value = input.value
    todoItem.append(todo)
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.title = "Done"
    const removeButton = document.createElement("button")
    const remove = document.createElement("img")
    remove.src = "remove.png"
    removeButton.append(remove)
    const checkboxContainer = document.createElement("div")
    checkboxContainer.className = "checkbox-container"
    checkboxContainer.append(checkbox)
    checkboxContainer.append(removeButton)
    todoItem.append(checkboxContainer)
    

    if (!(input.value === "")) {
        todoList.append(todoItem)
        number++
        numberOfToDo.textContent = `To Dos: ${number}`
        tasksDone.textContent = `Tasks Done: ${tasks}`
        nav.style.visibility = "visible"
    }

    input.value = ""

    checkbox.addEventListener("click", () => {
        if (!(todo.style.textDecoration === "line-through")) {
            todo.style.textDecoration = "line-through"
            tasks++
            tasksDone.textContent = `Tasks Done: ${tasks}`
        } else {
            todo.style.textDecoration = "none"
            tasks--
            tasksDone.textContent = `Tasks Done: ${tasks}`
            if (tasks < 0){
                tasksDone.textContent = `Tasks Done: ${0}`
            }
        }
    })

    remove.addEventListener("click", () => {
        number--
        tasks--
        todoItem.remove()
        checkboxContainer.remove()
        numberOfToDo.textContent = `To Dos: ${number}`
        tasksDone.textContent = `Tasks Done: ${tasks}`
        if (tasks < 0){
            tasksDone.textContent = `Tasks Done: ${0}`
        }
    })
}

reset.addEventListener("click", () => {
    number = 0
    tasks = 0
    const todo = document.querySelectorAll(".todo-item")
    todo.forEach(ele => ele.remove())

    numberOfToDo.textContent = ""
    nav.style.visibility = "hidden"
})