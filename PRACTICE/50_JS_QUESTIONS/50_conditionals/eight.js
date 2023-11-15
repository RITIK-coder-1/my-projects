// Implement a program that checks if a given character is a vowel or a consonant ---->

const isVowel = (letter) => {
    if (typeof letter === 'string') {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            return "It's a vowel!"
        } else {
            return "It's not a vowel!"
        }
    } else {
        return "Please, enter an alphabetical letter."
    }
}

let character = "z"
const result = isVowel(character)
console.log(result);

