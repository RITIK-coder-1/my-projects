// Write a function that determines if a given year is a century year (ending in '00') --->

const isCentury = (year) => {
    if (typeof year === 'number'){
        if (year % 100 === 0) {
            return `The given year ${year} is a century!`
        } else {
            return `The given year ${year} is not a century!`
        }
    } else {
        return "Please enter the year in number format!"
    }
}

let year = 2023
const result = isCentury(year)
console.log(result);