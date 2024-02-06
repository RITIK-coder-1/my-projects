// Named --->

(function cube(num){
    console.log(num*num*num);
    return num*num*num
})(3); // 27

// Unnamed --->

((num) => {
    console.log(num*num);
    return num*num
})(3); // 9

// pure function --->

function demo(num1, num2){
    console.log(num1+num2);
}
demo(3, 5) // 8

// impure function --->

let num3 = 10
function demo2(num1, num2) {
    console.log(num1+num2+num3);
}
demo2(1, 6) // 17

function one(){
    console.log("one");
    return () => console.log("two");
}

let two = one() // one
two() // two