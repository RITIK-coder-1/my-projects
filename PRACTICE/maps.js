const map = new Map()

map.set("name", "ritik")
map.set(1, "position")
map.set(1, "position")

// console.log(map);
// console.log(typeof map); // object

// console.log(map.get("name")) // "ritik"
// console.log(map.get(1)); // "position"
// console.log(map.get("ritik")); // undefined

// console.log(map.size); // 2

// console.log(map.entries()); // array within an object

map.set(null, "trail")
// console.log(map);

map.delete(null)
// console.log(map);

for (const element of map) {
    // console.log(element);
}

for (const [key, value] of map){
    // console.log(`The key: ${key} & The value: ${value}`);
}

