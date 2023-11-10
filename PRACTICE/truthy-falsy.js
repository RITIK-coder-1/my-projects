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
if ([12] && []){
    console.log("Array is truthy");
}
if ({name: "ritik"} && {}){
    console.log("Object is truhty");
}
if (function name(params) {}){
    console.log("Function is truthy");
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