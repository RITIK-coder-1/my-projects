// Lexical Scope -->

function one(){
    let outer = "outer"
    function two(){
        let inner = "inner"
        console.log(outer, inner);
        function three(){
            let innermost = "innermost"
            console.log(outer, inner, innermost);
        }
        three()
    }
    two()
}
one()
// outer inner
// outer inner innermost

// Closure --->

function outer(){
    let name = "ritik"
    function inner(){
        console.log(`My name is ${name}`);
    }
    return inner
}

const myName = outer()
myName() // my name is ritik // it has access to the variable of outer function even after execution