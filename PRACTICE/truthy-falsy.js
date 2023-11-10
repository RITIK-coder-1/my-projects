// Truthy values:

if (12 && -1){
    console.log("non-zero integers are truthy");
}
if ("ritik"){
    console.log("non-empty strings are truthy");
}
if (12n){
    console.log("big-int is truthy");
}
if (Symbol(1)){
    console.log("Symbol is truthy");
}

// Falsy values:

if (null) {
    console.log("null is truthy");
}
if (undefined){
    console.log("undefined is truthy");
}
if (""){
    console.log("empty-string is truhty");
}
if (0){
    console.log("0 is truhty");
}