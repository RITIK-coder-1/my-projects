const projects = document.getElementById("projects")
const projectContainer = document.querySelector("#projects > div")
const showMore = document.querySelector("#projects button")

showMore.addEventListener("click", () => {
    if (showMore.textContent === "SHOW MORE") {
        projects.style.height = "1800px"
        projectContainer.style.height = "auto"
        showMore.textContent = "SHOW LESS"
        projects.style.transition = "0s"
    } else {
        projects.style.height = "700px"
        projectContainer.style.height = "520px"
        showMore.textContent = "SHOW MORE"
        projects.style.transition = "2s"
    }
})