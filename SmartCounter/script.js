// ELEMENTS

const counterElement = document.getElementById("counter");

const incrementBtn = document.getElementById("incrementBtn");

const decrementBtn = document.getElementById("decrementBtn");

const resetBtn = document.getElementById("resetBtn");

const themeBtn = document.getElementById("themeBtn");

// COUNTER VALUE

let counter = localStorage.getItem("tukkaCounter")
  ? parseInt(localStorage.getItem("tukkaCounter"))
  : 0;

// THEME

let savedTheme = localStorage.getItem("tukkaTheme");

if (savedTheme === "light") {
  document.body.classList.add("light");

  themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

// UPDATE UI

function updateCounter() {
  counterElement.innerText = counter;

  // SAVE COUNTER

  localStorage.setItem("tukkaCounter", counter);

  counterElement.style.transform = "scale(1.08)";

  const timeout = setTimeout(() => {
    counterElement.style.transform = "scale(1)";
    clearTimeout(timeout);
  }, 150);
}

// INCREMENT

function increment() {
  counter++;

  updateCounter();
}

// DECREMENT

function decrement() {
  counter--;

  updateCounter();
}

// RESET

function reset() {
  counter = 0;

  updateCounter();
}

// BUTTON EVENTS

incrementBtn.addEventListener("click", increment);

decrementBtn.addEventListener("click", decrement);

resetBtn.addEventListener("click", reset);

// THEME TOGGLE

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // SAVE THEME

  if (document.body.classList.contains("light")) {
    localStorage.setItem("tukkaTheme", "light");

    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    localStorage.setItem("tukkaTheme", "dark");

    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

// KEYBOARD EVENTS

document.addEventListener("keydown", (event) => {
  // +

  if (event.key === "+") {
    increment();
  }

  // -
  else if (event.key === "-") {
    decrement();
  }

  // R
  else if (event.key === "r" || event.key === "R") {
    reset();
  }
});

// INITIAL UI

updateCounter();
