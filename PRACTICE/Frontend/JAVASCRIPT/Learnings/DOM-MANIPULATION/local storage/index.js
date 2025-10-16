let counterElement = document.getElementById("counter");
let counter = Number(counterElement.textContent);
const add = document.getElementById("add");
const sub = document.getElementById("sub");

let counterState = Number(localStorage.getItem("counter")) || 0;
counterElement.textContent = counterState;

add.addEventListener(
  "click",
  () => {
    counterState++;
    updateLocalStorage();
  },
  false
);

sub.addEventListener(
  "click",
  () => {
    counterState--;
    updateLocalStorage();
  },
  false
);

function updateLocalStorage() {
  localStorage.setItem("counter", String(counterState));
  counterElement.textContent = counterState;
}
