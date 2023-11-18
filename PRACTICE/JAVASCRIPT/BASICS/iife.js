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
