const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const counter = document.querySelector("#counter");

let count = 0;

function updateColor() {
  if (count > 0 && counter.style.color !== "green") {
    counter.style.color = "green";
  } else if (count < 0 && counter.style.color !== "red") {
    counter.style.color = "red";
  } else if (count === 0 && counter.style.color !== "white") {
    counter.style.color = "white";
  }
}
increase.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  updateColor();
});
decrease.addEventListener("click", () => {
  count--;
  counter.textContent = count;
  updateColor();
});
reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  updateColor();
});
