const increase = document.querySelector("#increment")
const num = document.querySelector("#number")
const decrease = document.querySelector("#decrement")

increase.addEventListener("click", () => {

   num.textContent = Number(num.textContent) + 1

   const button = document.querySelector("#increment")
   button.style.animation = "none"
   void button.offsetWidth
   button.style.animation = "button 0.2s linear 0s 1 normal"

}, false)

decrease.addEventListener("click", () => {

   num.textContent = Number(num.textContent) - 1

    if (num.textContent < 0){
        alert("Check out! The Counter is going beyond 0.")
    }

   const button = document.querySelector("#decrement")
   button.style.animation = "none"
   void button.offsetWidth
   button.style.animation = "button 0.2s linear 0s 1 normal"

}, false)