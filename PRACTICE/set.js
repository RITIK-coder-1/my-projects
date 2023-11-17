const mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.add(2)

// console.log(mySet); // { 1, 2 }
// console.log(mySet.size); // 2

mySet.delete(2)
// console.log(mySet); // {1}

for (const ele of mySet) {
    // console.log(ele); // 1
}

// console.log(mySet.has(1)); // true