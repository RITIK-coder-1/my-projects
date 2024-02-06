function outer(){
    let variable = "ritik"
    function inner(){
        console.log(variable);
        return variable
    }
    inner()
    return inner()
}
outer() // ritik ritik
let func = outer() // ritik ritik
console.log(func); // ritik