let numberHolder = document.querySelector("span");
let number = Number(numberHolder.innerText);
let instruction = document.querySelector("p");

try {
  setInterval(() => {
    number = number + 1;
    numberHolder.innerText = number;
    if (number > 4) {
      instruction.textContent = "Exhale";
    } else instruction.textContent = "Inhale";

    if (number === 10) {
      number = 0;
    }
  }, 1000);
} catch (error) {
  console.error("Couldn't process it. Error: ", error);
}
