const increase = document.querySelector("#increment")
const num = document.querySelector("#number")
const decrease = document.querySelector("#decrement")

increase.addEventListener("click", () => {
   num.textContent++
})
decrease.addEventListener("click", () => {
    num.textContent--
    if (num.textContent < 0){
        alert("Check out! The Counter is going beyond 0.")
    }
 })