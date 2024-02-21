const input = document.getElementById("input")
const unorderedList = document.getElementById("unordered-list")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")

input.addEventListener('input', () => {
    const value = input.value.toLowerCase()
    const items = [one, two, three, four, five, six]

    items.forEach((ele) => {
        const text = ele.innerText.toLowerCase()

        if (!(text.includes(value))) {
            ele.style.display = "none"
        } else {
            ele.style.display = "list-item"
        }
    })
})