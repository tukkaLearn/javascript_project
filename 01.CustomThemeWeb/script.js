const textColor = document.querySelector("#textColor");
const bgColor = document.querySelector("#bgColor");
const resetBtn = document.querySelector("#resetBtn");
const applyBtn = document.querySelector("#applyBtn");

applyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = bgColor.value;
  document.body.style.color = textColor.value;
});

resetBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#0f172a";
  bgColor.value = "#0f172a";
  document.body.style.color = "#ffffff";
  textColor.value = "#ffffff";
});
