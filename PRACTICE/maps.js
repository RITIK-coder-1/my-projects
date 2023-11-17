const map = new Map()

map.set("name", "ritik")
map.set(1, "position")
map.set(1, "position")

console.log(map);
// console.log(typeof map); // object

// console.log(map.get("name")) // "ritik"
// console.log(map.get(1)); // "position"
// console.log(map.get("ritik")); // undefined

console.log(map.size); // 2

map.set(null, "trail")
// console.log(map);

map.delete(null)
// console.log(map);