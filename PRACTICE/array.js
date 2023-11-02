const Array1 = [1, 2, 3, 4, 5]

// console.log(Array1.length); // 5
// console.log(Array1.push(6)); // Changes the original array as it is non-primitive

// console.log(Array1); // [ 1, 2, 3, 4, 5, 6 ]

const Array2 = Array1.push(6, 7) // storing the length of the new array

// console.log(Array1); // [ 1, 2, 3, 4, 5, 6, 7]
// console.log(Array2); // 7

const Array3 = Array1.pop() // storing the popped element

// console.log(Array1); // [ 1, 2, 3, 4, 5, 6]
// console.log(Array3); // 6

const Array4 = Array1.unshift("ritik")

// console.log(Array1); // [ 'ritik', 1, 2, 3, 4, 5, 6]
// console.log(Array4); // 7

const Array5 = Array1.shift()

// console.log(Array1); // [ 1, 2, 3, 4, 5, 6]
// console.log(Array5); // "ritik"


// console.log(Array1[2]); // 3
// console.log(Array1.indexOf(3)); // 2
// console.log(Array1.includes(3)); // true

// console.log(Array1.toString()); // "1,2,3,4,5,6"
// console.log(Array1.toString().split(",")); // [ '1', '2', '3', '4', '5', '6' ]

// console.log(Array1);
// console.log(Array1.at(2)); // 3
// console.log(Array1.at(-1)); // 6


const Array6 = [10, 11, 12]

const concat = Array1.concat(Array6)

// console.log(concat); // [1,  2,  3,  4, 5, 6, 10, 11, 12]

// console.log(concat.lastIndexOf(12)); // 8

const Array7 = concat.slice(0, 4) // it doesn't modify the original array

// console.log(Array7); // [1, 2, 3, 4]
// console.log(concat); // [1, 2, 3, 4, 5, 6, 10, 11, 12]

const Array8 = concat.splice(0, 4) // it modifies the original array

// console.log(Array8); // [1, 2, 3, 4]
// console.log(concat); // [5, 6, 10, 11, 12]

const Array9 = concat.concat([1, 2, 3])

console.log(Array9); // [5, 6, 10, 11, 12, 1, 2, 3]

const Array10 = [22, 33]

console.log(Array10.join(concat));

