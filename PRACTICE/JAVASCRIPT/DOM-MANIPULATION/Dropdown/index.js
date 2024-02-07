const dropdown = ["JavaScript", "Java", "Python", "C", "C++"]

const selectElements = document.getElementById("dropdown")

dropdown.forEach((language) => {

    const option = document.createElement("option")
    option.value = language
    option.textContent = language

    selectElements.append(option)
})

selectElements.addEventListener("change", function() {

    const selectedOption = this.options[this.selectedIndex];

    const p = document.querySelector("p")
    p.innerText = `Your Favourite Programming Language has been set to: ${selectedOption.value}`

});

