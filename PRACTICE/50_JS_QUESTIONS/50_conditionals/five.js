// Create a program that prompts the user for their age and determines if they are eligible to vote (18 or older) ---->

const isEligible = (age) => {
    if (typeof age === 'number'){
        if (age >= 18) {
            return "You are eligible to vote!"
        } else {
            return "You are not eligible to vote!"
        }
    } else {
        return "Please! Enter your age in number format."
    }
}

let age = 13
const result = isEligible(age)
console.log(result);