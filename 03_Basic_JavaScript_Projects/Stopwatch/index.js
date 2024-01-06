const div = document.querySelector('div')

let sec = 1
let min = 0

const start = document.querySelector('#start')
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")

start.addEventListener('click', () => {
    let time = setInterval(function(){

    div.innerText = `${sec++} s`

    if (sec >= 61) { // the initial value of sec is 1, thus I put the condition sec >= 61
        div.innerText = `${min} m`
    }
    stop.addEventListener("click", () => {
    clearInterval(time)
})}, 1000)

    reset.addEventListener('click', () => {
        sec = 1
        div.innerText = 0
        clearInterval(time)
    }) 
})

setInterval(() => {
    min++
}, 60000)





















