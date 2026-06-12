const box = document.getElementById("box");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

box.addEventListener("mousedown", (e) => {
  isDragging = true;

  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  box.style.left = e.pageX - offsetX + "px";
  box.style.top = e.pageY - offsetY + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
