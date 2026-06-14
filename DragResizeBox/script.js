const box = document.getElementById("box");
const handle = document.getElementById("handle");

let dragging = false;
let resizing = false;

let offsetX = 0;
let offsetY = 0;

// ---------------- Drag ----------------

box.addEventListener("mousedown", (e) => {
  if (e.target === handle) return;

  dragging = true;

  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener("mousemove", (e) => {
  // Drag
  if (dragging) {
    box.style.left = e.pageX - offsetX + "px";
    box.style.top = e.pageY - offsetY + "px";
  }

  // Resize
  if (resizing) {
    box.style.width = e.pageX - box.offsetLeft + "px";
    box.style.height = e.pageY - box.offsetTop + "px";
  }
});

document.addEventListener("mouseup", () => {
  dragging = false;
  resizing = false;
});

// ---------------- Resize ----------------

handle.addEventListener("mousedown", (e) => {
  resizing = true;

  // Prevent drag from starting
  e.stopPropagation();
});
