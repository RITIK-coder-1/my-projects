// Write a loop that counts the number of vowels in a given string ------->


const printVowels = (string) => {
    let vowelCount = 0
for (const char of string) {
    if (char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U") {
        console.log(`The vowel(s) inside the string '${string}': ${char}`);
    }
    if ('aeiouAEIOU'.includes(char)) {
        vowelCount++;
    }
}
console.log(`The total number of vowels inside the string '${string}' is ${vowelCount}`);
}

printVowels("ritik")
printVowels("aeiou")
printVowels("Ritik is a good boy")