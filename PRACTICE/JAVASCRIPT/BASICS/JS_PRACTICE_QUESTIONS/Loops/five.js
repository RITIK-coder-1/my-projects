// Using a loop, print a multiplication table for a given number ------>

const Multiples = (num) => {
for (let i = num; i <= 10; i++) {
    console.log(`The multiplication table of ${i}: (The first 10 multiples)`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    } 
    break;
}
}

Multiples(6)