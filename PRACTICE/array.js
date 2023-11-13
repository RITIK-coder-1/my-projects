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

// console.log(Array9); // [5, 6, 10, 11, 12, 1, 2, 3]

const Array10 = [22, 33]

// console.log(Array10.join()); "22,33"
// console.log(Array10.join(" ")); "22 33"

const Array11 = Array10.push(concat)

// console.log(Array10); // [ 22, 33, [ 5, 6, 10, 11, 12 ] ]
// console.log(Array11); // 3



// slice vs splice ---------->

const a = [1, 2, 3, 4, 5, 6, 7, 8]

let slice = a.slice(0, 2) // it takes out values without modifying the original array // it shows the cut part

// console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(slice); // [ 1, 2 ]

let splice = a.splice(0, 2) // it takes out values modifying the original array // it shows the cut part

// console.log(a); // [ 3, 4, 5, 6, 7, 8 ]
// console.log(splice); // [ 1, 2 ]

let splice2 = a.toSpliced(0, 2) // it takes out values without modifying the original array // it shows the uncut part

// console.log(a); // [ 3, 4, 5, 6, 7, 8 ]
// console.log(splice2); // [ 5, 6, 7, 8 ]

const b = a.toReversed()

// console.log(a); // [ 3, 4, 5, 6, 7, 8 ]
// console.log(b); // [ 8, 7, 6, 5, 4, 3 ]


const c = a.concat(b)

const d = b.concat(a)

// console.log(c);
// console.log(d);

const e = [...a, ...b] // spread operator

const f = [...b, ...b] // spread operator

// console.log(e);
// console.log(f);

// console.log(c === e); // false // both of them refer to different memory locations

const flat_f = f.flat()

// console.log(flat_f); // [ 8, 7, 6, 5, 4, 3, 8, 7, 6, 5, 4, 3]

const nestedArray = [1, 2, 3, [1, 2], [3, 4], [1, 1, [4, 5, [6, 7, [8, 9, [10, 11]]]]]]

const pureArray = nestedArray.flat(Infinity) // [ 1,  2,  3, 1, 2, 3, 4, 1,  1,  4, 5, 6, 7, 8, 9, 10, 11 ]

const flatArray1 = nestedArray.flat(1) // [ 1, 2, 3, 1, 2, 3, 4, 1, 1, [ 4, 5, [ 6, 7, [Array] ] ] ]
const flatArray2 = nestedArray.flat(2) // [ 1, 2, 3, 1, 2, 3, 4, 1, 1, 4, 5, [ 6, 7, [ 8, 9, [Array] ] ] ]

// console.log(pureArray);
// console.log(flatArray1);
// console.log(flatArray2);


// console.log(Array.isArray("ritik")); // false
// console.log(Array.isArray(["ritik"])); // true

// console.log(Array.from("ritik")); ["r", "i", "t", "i", "k"]
// console.log(Array.from(2)); // []
// console.log(Array.from({name: "ritik"})); // []


// console.log(Array.of(12)); // [12]
// console.log(Array.of("ritik", 1)); // [ "ritik", 1 ]


const arr1 = [1]

const push = arr1.push(1, [2])

// console.log(push); // 3
// console.log(arr1); // [ 1, 1, [2] ]

const unshift = arr1.unshift(6)

// console.log(unshift); // 4
// console.log(arr1); // [ 6, 1, 1, [2] ]

const pop = arr1.pop()

// console.log(pop); // [ 2 ]
// console.log(arr1); // [ 6, 1, 1 ]
// console.log(arr1.pop(2)); // 1 // doesn't matter what the input is // it stores the removed element

const shift = arr1.shift()

// console.log(shift); // 6
// console.log(arr1); // [ 1, 1 ]
// console.log(arr1.shift(2)); // 1 // doesn't mattet what the input is // it stores the removed element


const arr2 = [0, 1, 2, 3, 4, 5, 6]

const con1 = arr2.concat(7, 8, [9, 10])

console.log(con1); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr2); // [0, 1, 2, 3, 4, 5, 6] // unchanged
