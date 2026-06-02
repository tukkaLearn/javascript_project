const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateClock() {
  const now = new Date();

  // TIME

  const time = now.toLocaleTimeString();

  // DATE

  const fullDate = now.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  clock.innerText = time;
  date.innerText = fullDate;
}

updateClock();

setInterval(updateClock, 1000);
