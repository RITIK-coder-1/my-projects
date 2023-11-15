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

// console.log(arr1[0]); // 1
// console.log(arr1.at(0)); // 1
// console.log(arr1.indexOf(1)); // 0
// console.log(arr1.includes(1)); // true 

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
// console.log(arr1.shift(2)); // 1 // doesn't matter what the input is // it stores the removed element


const arr2 = [0, 1, 2, 3, 4, 5, 6]

const con = arr2.concat(7, 8, [9, 10])

// console.log(con); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr2); // [0, 1, 2, 3, 4, 5, 6] // unchanged

const sli = arr2.slice(0, 3)

// console.log(sli); // [0, 1, 2]
// console.log(arr2); // [0, 1, 2, 3, 4, 5, 6]

const spli = arr2.splice(0, 3)

// console.log(spli); // [0, 1, 2]
// console.log(arr2); // [3, 4, 5, 6]

const toSpli = arr2.toSpliced(0, 2)

// console.log(toSpli); // [5, 6]
// console.log(arr2); // [3, 4, 5, 6]


const arr3 = [1, 2, 3, [1, 2, [1, 2, [3, 4, [4]]]]]
const arrFlat1 = arr3.flat()
const arrFlat2 = arr3.flat(2)
const arrFlat3 = arr3.flat(Infinity)

// console.log(arr3.join("-")); // 1-2-3-1,2,1,2,3,4,4
// console.log(arr3.toString()); // 1,2,3,1,2,1,2,3,4,4
// console.log(arr3.flat(Infinity).join("-")); // 1-2-3-1-2-1-2-3-4-4

// console.log(arrFlat1); // [ 1, 2, 3, 1, 2, [ 1, 2, [ 3, 4, [Array] ] ] ]
// console.log(arrFlat2); // [ 1, 2, 3, 1, 2, 1, 2, [ 3, 4, [ 4 ] ] ]
// console.log(arrFlat3); // [ 1, 2, 3, 1, 2, 1, 2, 3, 4, 4 ]


const arr4 = [1, 2]
const arr5 = [3, 4]

// console.log(...arr4); // 1 2
// console.log(...arr5); // 3 4

const add = [...arr4, ...arr5]
// console.log(add); [1, 2, 3, 4]

// console.log(Array.isArray("ritik")); // false
// console.log(Array.isArray([1])); // true 

// console.log(Array.from("ritik")); // [ 'r', 'i', 't', 'i', 'k' ]
// console.log(Array.of("ritik", 1)); // [ 'ritik', 1 ]


const arr6 = [1, 2, 3, 4]

const reversed = arr6.reverse()

// console.log(reversed); // [4, 3, 2, 1]
// console.log(arr6); // [4, 3, 2, 1] // changes the original array

const toReversed = arr6.toReversed()

// console.log(toReversed); // [1, 2, 3, 4]
// console.log(arr6); // [4, 3, 2, 1] // doesn't change the original array


const numbers = [0, 1, 2, 3]
const sliced = numbers.slice(0, 2)
// console.log(sliced); // [0,1]
// console.log(numbers); // [0,1,2,3]
const spliced = numbers.splice(0, 2)
// console.log(spliced); // [0, 1]
// console.log(numbers); // [2, 3]
const toSpliced = numbers.toSpliced(0, 1)
// console.log(toSpliced); // [3]
// console.log(numbers); // [2, 3]