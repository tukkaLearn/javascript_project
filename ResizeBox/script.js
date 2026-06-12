const box = document.getElementById("box");
const handle = document.getElementById("handle");

let resizing = false;

handle.addEventListener("mousedown", () => {
  resizing = true;
});

document.addEventListener("mousemove", (e) => {
  if (!resizing) return;

  box.style.width = e.pageX - box.offsetLeft + "px";
  box.style.height = e.pageY - box.offsetTop + "px";
});

document.addEventListener("mouseup", () => {
  resizing = false;
});
