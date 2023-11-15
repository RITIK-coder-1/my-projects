// Write a function that checks if a given string is empty or not ---------->

function isEmpty(string) {
    if (string.length === 0) {
        return "The given string is empty!"
    } else {
        return `The given string is not empty and it has ${string.length} character(s)`
    }
}

let word = "ritik"
const result = isEmpty(word)
console.log(result);