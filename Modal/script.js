const modal = document.getElementById("modal");

const openModal = document.getElementById("openModal");

const closeModal = document.getElementById("closeModal");

const cancelBtn = document.getElementById("cancelBtn");

openModal.addEventListener("click", () => {
  modal.classList.add("active");
});

function closePopup() {
  modal.classList.remove("active");
}

closeModal.addEventListener("click", closePopup);

cancelBtn.addEventListener("click", closePopup);

modal.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === modal) {
    closePopup();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
});
