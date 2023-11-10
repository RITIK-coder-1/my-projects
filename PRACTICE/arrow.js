const arrow1 = (num1, num2) =>  num1 + num2

// console.log(arrow1(1, 2));

const arrow2 = (anyString) => `${anyString} has ${anyString.length} number of characters`

// console.log(arrow2("ritik"));
// console.log(arrow2("sonali"));
// console.log(arrow2("sushma"));
// console.log(arrow2("sunena"));
// console.log(arrow2("bijay"));

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

const acc = {
    principal: 5000,
    rate: 8/100,
    time: 2
}

const interest = (anyAccount) => anyAccount["principal"] * anyAccount["rate"] * anyAccount["time"]
const amount = (anyAccount) => anyAccount["principal"] + interest(anyAccount)

// console.log(interest(acc));
// console.log(amount(acc));