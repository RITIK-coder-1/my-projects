const myDetails = {
    name: "Ritik",
    surname: "Mahapatra",
    "age": 19,
    gender: "boy",
    nationality: "Indian",
    email: "ritikprofessional111@gmail.com",
    skillset: ["HTML5", "CSS3", "TailwindCSS"]
}

// console.log(myDetails);

// console.log(myDetails.name); // "Ritik"
// console.log(myDetails["surname"]); // "Mahapatra"

// console.log(myDetails.age); // 19

// console.log(myDetails["name"].concat(myDetails["surname"])); // "RitikMahapatra"
// console.log(`My name is: ${myDetails.name} ${myDetails.surname}`); // "My name is: Ritik Mahapatra"
// console.log(`My name is: ${myDetails["name"].concat(myDetails["surname"])}`); // "My name is: RitikMahapatra"

myDetails["gender"] = "Male"

// console.log(myDetails); // gender has been modified

let myGender = myDetails["gender"] = "boy"

// console.log(myGender); // boy

// console.log(myDetails); // gender again got modified

// console.log(typeof myDetails["age"]); // number

myDetails["gender"] = "Male"

// console.log(myDetails); // gender --> male
// console.log(myGender); // boy

myGender = myDetails["gender"] 

// console.log(myGender); // male


let symbol1 = Symbol(222)

let symbol2 = {
    [symbol1]: 333, // accessing a symbol
    symbol1: 444
}

// console.log(symbol1); // Symbol(222)
// console.log(symbol2); // { symbol1: 444, [Symbol(222)]: 333}