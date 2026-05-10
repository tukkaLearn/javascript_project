const clock = document.querySelector("#clock");

setInterval(() => {
  const dateAndTime = new Date();
  clock.textContent = dateAndTime.toLocaleString();
}, 1000);
