// ---------------------- STRING CONVERSION -------------------------------------


let a = 34
// number 
let String_a = String(a)
// string 

// console.log(String_a);
// console.log(typeof a);
// console.log(typeof String_a);

// everything can be converted into a string 


// ---------------------- NUMBER CONVERSION -------------------------------------

let b = "345"
// string 
let Number_b = Number(b)
// number 
let BigNumber = 123594085498n
// BigInt 
let IntNumber = Number(BigNumber)
// number 

// console.log(Number_b);
// console.log(typeof b);
// console.log(typeof Number_b);

// console.log(IntNumber);
// console.log(typeof BigNumber);
// console.log(typeof IntNumber);

// a numeric string and a BigInt get converted into their respective number


let c = "ritik"
// string 
let Number_c = Number(c)
// number 
let d;
// undefined
let Number_d = Number(d)
// number

// console.log(Number_c);
// console.log(typeof c);
// console.log(typeof Number_c);
// console.log(Number_d);
// console.log(typeof d);
// console.log(typeof Number_d);

// a non-numeric string and undefined value gets converted to NaN 


let boolean1 = true
// boolean
let Number_boolean1 = Number(boolean1)
// number

// console.log(Number_boolean1);
// console.log(typeof boolean1);
// console.log(typeof Number_boolean1);

let boolean2 = false
// boolean
let Number_boolean2 = Number(boolean2)
// number

// console.log(Number_boolean2);
// console.log(typeof boolean2);
// console.log(typeof Number_boolean2);

let temp = null
// null (object)
let Number_temp = Number(temp)
// number

// console.log(Number_temp);
// console.log(typeof Number_temp);
// console.log(typeof temp);

// true is 1, false is 0 and null is also 0


let empty = ""
// string 
let number_empty = Number(empty)
// number 

// console.log(number_empty);
// console.log(typeof empty);
// console.log(typeof number_empty);

// an empty string gets converted into 0 


// console.log(Number(Symbol(3))); (ERROR: A symbol can't be converted into a number)


// ----------------------- BOOLEAN CONVERSION ------------------------------


let e = 123
// number 
let boolean_e = Boolean(e)
// boolean 

// console.log(boolean_e);
// console.log(typeof e);
// console.log(typeof boolean_e);

let f = "ritikkkkkk"
// string 
let boolean_f = Boolean(f)
// boolean 

// console.log(boolean_f);
// console.log(typeof f);
// console.log(typeof boolean_f);

let g = 1
// number 
let boolean_g = Boolean(g)
// boolean 

// console.log(boolean_g);
// console.log(typeof g);
// console.log(typeof boolean_g);

let h = -101
// number 
let boolean_h = Boolean(h)
// boolean 

// console.log(boolean_h);
// console.log(typeof h);
// console.log(typeof boolean_h);

let i = 101n
// BigInt
let boolean_i = Boolean(i)
// boolean 

// console.log(boolean_i);
// console.log(typeof i);
// console.log(typeof boolean_i);

// console.log(Boolean(Symbol(34)));

// a non-zero integer, non-empty String, bigint, symbol get converted to true  


let j = 0
// number 
let boolean_j = Boolean(j)
// boolean 
let k = ""
// string 
let boolean_k = Boolean(k)
// boolean 
let l = null
// null (object)
let boolean_l = Boolean(l)
// boolean 
let m
// undefined 
let boolean_m = Boolean(m)

// console.log(boolean_j);
// console.log(typeof j);
// console.log(typeof boolean_j);

// console.log(boolean_k);
// console.log(typeof k);
// console.log(typeof boolean_k);

// console.log(boolean_l);
// console.log(typeof l);
// console.log(typeof boolean_l);

// console.log(boolean_m);
// console.log(typeof m);
// console.log(typeof boolean_m);

// 0, empty String, null, undefined get converted to false 

