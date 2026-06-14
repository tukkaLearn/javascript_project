const workspace = document.getElementById("workspace");

const modal = document.getElementById("modal");

const openModalBtn = document.getElementById("openModalBtn");

const closeModalBtn = document.getElementById("closeModalBtn");

const saveNoteBtn = document.getElementById("saveNoteBtn");

const noteTitle = document.getElementById("noteTitle");

const noteContent = document.getElementById("noteContent");

const noteColor = document.getElementById("noteColor");

const emptyMessage = document.getElementById("emptyMessage");

// NOTES ARRAY

let notes = JSON.parse(localStorage.getItem("tukkaStickyNotes")) || [];

// OPEN MODAL

openModalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

// CLOSE MODAL

function closeModal() {
  modal.classList.remove("active");

  noteTitle.value = "";

  noteContent.value = "";

  noteColor.value = "#38bdf8";

  noteColor.style.background = "#38bdf8";
}

closeModalBtn.addEventListener("click", closeModal);

// CLOSE OUTSIDE

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

noteColor.addEventListener("input", (e) => {
  noteColor.style.background = String(e.target.value);
  noteColor.value = String(e.target.value);
});

// ----------------TODO----------------

// SAVE LOCAL STORAGE
// UPDATE EMPTY MESSAGE
// CREATE NOTE (See Modified This in html file, for changes)
// DELETE NOTE
// EDIT NOTE
// UPDATE NOTE
// DRAG & DROP
