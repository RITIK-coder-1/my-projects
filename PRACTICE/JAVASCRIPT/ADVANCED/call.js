function myName(name) {
    this.name = name
}

function me(name, age){
    myName.call(this, name)
    this.age = age

    return this
}
console.log(new me("ritik", 19));