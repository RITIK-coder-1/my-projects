// Selecting elements --->

const img = document.querySelectorAll(".image-container > img")
const paraContainer = document.getElementsByClassName("paragraph-container")
const allProjects = document.getElementById("all-projects")
const showMore = document.querySelector("#projects button")


// Clicking the show more button will increase the height of the section, clicking the show less button with decrease it -->

showMore.addEventListener("click", () => {
    if (showMore.textContent === "SHOW MORE") {
        showMore.textContent = "SHOW LESS"
        allProjects.style.display = "flex"
    } else {
        showMore.textContent = "SHOW MORE"
        allProjects.style.display = "none"
    }
})

