const myDetails = {
    name: "Ritik",
    surname: "Mahapatra",
    "My age": 19,
    gender: "boy",
    nationality: "Indian",
    email: "ritikprofessional111@gmail.com",
    skillset: ["HTML5", "CSS3", "TailwindCSS"]
}

// console.log(myDetails);

// console.log(myDetails.name); // "Ritik"
// console.log(myDetails["surname"]); // "Mahapatra"

// console.log(myDetails.My age); // error
// console.log(myDetails["My age"]); // 19

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
    symbol3: 444
}

// console.log(symbol1); // Symbol(222)
// console.log(symbol2); // { symbol3: 444, [Symbol(222)]: 333}

// console.log(typeof symbol2["symbol3"]); // number
// console.log(typeof symbol2[symbol1]); // number
// console.log(typeof symbol2["symbol1"]); // undefined

// Object.freeze(myDetails) // can't change the object now

// myDetails.email = "ritik@gmail.com"

// console.log(myDetails);

myDetails.fullname = {
    name: "Ritik",
    surname: "Mahapatra"
}


// console.log(myDetails);

// console.log(myDetails.fullname); // { name: 'Ritik', surname: 'Mahapatra' }
// console.log(myDetails.fullname.name); // "Ritik"


const obj1 = {}
const obj2 = {}

obj1.id = 234
obj2.id = 235

console.log(obj1);
console.log(obj2);

const obj3 = {obj1, obj2}

// console.log(obj3); // { obj1: { id: 234 }, obj2: { id: 235 } }

const fullId = Object.assign({}, obj1, obj2) // {id: 235} // obj2 dominated because of the same key
const AnotherId = {...obj1, ...obj2} // {id: 235} // the same reason

// console.log(fullId);
// console.log(AnotherId);

const obj4 = {
    key1: {
        name: "ritik"
    }
}
const obj5 = {
    key2: {
        surname: "Mahapatra"
    }
}

const fullname = {...obj4, ...obj5} // { key1: { name: 'ritik' }, key2: { surname: 'Mahapatra' } }
const name = {...obj4.key1, ...obj5.key2} // { name: 'ritik', surname: 'Mahapatra' }

// console.log(fullname);
// console.log(name);