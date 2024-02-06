const array = [1, 2, 3]

console.log(...array); // 1 2 3

const newArray = [...array, ...[5, 6]]
console.log(newArray); // [1, 2, 3, 5, 6]

const obj = {name: "ritik"}
const newObj = {...obj, age: 19}

console.log(newObj); // { name: 'ritik', age: 19 }

function demo(num1, num2) {
    console.log(num1 + num2);
}
demo(...array) // 3

function demo2(...num) {
    console.log(num); // [1, 3, 5]
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        const element = array[i];
        sum += element
    }
    console.log(sum); // 6
}

demo2(1, 3, 5)

