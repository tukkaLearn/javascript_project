document.querySelector("#btn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.querySelector("#bgColor").value;
  document.body.style.color = document.querySelector("#textColor").value;
});
