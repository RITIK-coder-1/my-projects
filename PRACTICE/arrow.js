const arrow1 = (num1, num2) =>  num1 + num2

// console.log(arrow1(1, 2));

const arrow2 = (anyString) => `${anyString} has ${anyString.length} number of characters`

// console.log(arrow2("ritik"));
// console.log(arrow2("sonali"));

const arrow3 = (anyArray) => {
    let arrayNumber = false
    for (let index = 0; index < anyArray.length; index++) {
        if (typeof anyArray[index] === 'number') {
            arrayNumber = true
        }
        if (arrayNumber){
            console.log(`The array [${anyArray}] has got number element(s) and the element(s): ${anyArray[index]}}`);
        }
} 
if (arrayNumber === false){
    console.log(`The array [${anyArray}] has got no number elements`);
}

}

// console.log(arrow3(["ritik", 1, null]));
// console.log(arrow3(["ritik"]));
