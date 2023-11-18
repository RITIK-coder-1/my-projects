// Write a program to check if a given number is prime using a loop ---->

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const numberToCheck = 13; 

if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} is a prime number.`);
} else {
    console.log(`${numberToCheck} is not a prime number.`);
}
