const firstHeading = document.getElementById("first heading")

firstHeading.style.color = "green"

firstHeading.style.backgroundColor = "blue"

firstHeading.style.padding = "20px"

const li = document.querySelectorAll("li")

const arrayLi = Array.from(li)

arrayLi.map((ele) => { 
    ele.style.color = "blue"
    ele.style.backgroundColor = "green"
})

const para = document.querySelectorAll("p")

para[1].style.fontSize = "50px"

