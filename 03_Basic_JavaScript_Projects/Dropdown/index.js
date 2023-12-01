const dropdown = ["JavaScript", "Java", "Python", "C", "C++"]

const selectElements = document.getElementById("dropdown")

dropdown.forEach((language) => {

    const Option = document.createElement("option")
    Option.value = language
    Option.textContent = language

    selectElements.append(Option)
})