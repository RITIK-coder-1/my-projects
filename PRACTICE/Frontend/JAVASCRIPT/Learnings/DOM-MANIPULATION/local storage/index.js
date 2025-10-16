let counterElement = document.getElementById("counter");
let counter = Number(counterElement.textContent);
const add = document.getElementById("add");
const sub = document.getElementById("sub");

add.addEventListener(
  "click",
  () => {
    counter++;
    counterElement.textContent = counter;
  },
  false
);

sub.addEventListener(
  "click",
  () => {
    counter--;
    counterElement.textContent = counter;
  },
  false
);
