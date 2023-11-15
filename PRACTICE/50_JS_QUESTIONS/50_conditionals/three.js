// Write a program that checks if a given year is a leap year ------>

let year = 2024

if (typeof year === 'number') {
    if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
        console.log(`The given year ${year} is a leap year!`);
    } else {
        console.log(`The given year ${year} is not a leap year!`);
    }
} else {
    console.log("Please, input the year in number format!");
}

// Function --------->

const isLeapYear = (year) => {
    if (typeof year === 'number') {
        if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
            return `The given year ${year} is a leap year!`;
        } else {
            return `The given year ${year} is not a leap year!`;
        }
    } else {
        return "Please, input the year in number format!"
    }
}

const result = isLeapYear(year)
// console.log(result);