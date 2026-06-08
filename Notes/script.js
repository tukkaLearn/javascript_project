// ELEMENTS

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

  noteColor.value = "#fde68a";
}

closeModalBtn.addEventListener("click", closeModal);

// CLOSE OUTSIDE

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// SAVE LOCAL STORAGE

function saveToLocalStorage() {
  localStorage.setItem("tukkaStickyNotes", JSON.stringify(notes));
}

// UPDATE EMPTY MESSAGE

function updateEmptyMessage() {
  emptyMessage.style.display = notes.length === 0 ? "block" : "none";
}

// CREATE NOTE

function createNote(note) {
  const noteElement = document.createElement("div");

  noteElement.classList.add("note");

  noteElement.style.background = note.color;

  noteElement.style.left = note.x + "px";

  noteElement.style.top = note.y + "px";

  noteElement.dataset.id = note.id;

  noteElement.innerHTML = `

        <div class="note-header">

          <input
          class="note-title"
          value="${note.title}" />

          <div class="note-actions">

            <button
            class="icon-btn edit-btn">

              <i class="fa-solid fa-pen"></i>

            </button>

            <button
            class="icon-btn delete-btn">

              <i class="fa-solid fa-trash"></i>

            </button>

          </div>

        </div>

        <textarea
        class="note-content">${note.content}</textarea>

        <div class="note-footer">

          <span class="time">

            ${note.time}

          </span>

          <input
          type="color"
          class="color-picker"
          value="${note.color}" />

        </div>

      `;

  workspace.appendChild(noteElement);

  // DELETE NOTE

  const deleteBtn = noteElement.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {
    notes = notes.filter((item) => item.id !== note.id);

    noteElement.remove();

    saveToLocalStorage();

    updateEmptyMessage();
  });

  // EDIT NOTE

  const titleInput = noteElement.querySelector(".note-title");

  const contentInput = noteElement.querySelector(".note-content");

  // AUTO SAVE

  function updateNote() {
    const target = notes.find((item) => item.id === note.id);

    target.title = titleInput.value;

    target.content = contentInput.value;

    saveToLocalStorage();
    ` `;
  }

  titleInput.addEventListener("input", updateNote);

  contentInput.addEventListener("input", updateNote);

  // COLOR PICKER

  const colorPicker = noteElement.querySelector(".color-picker");

  colorPicker.addEventListener("input", () => {
    noteElement.style.background = colorPicker.value;

    const target = notes.find((item) => item.id === note.id);

    target.color = colorPicker.value;

    saveToLocalStorage();
  });

  // DRAG & DROP

  let isDragging = false;

  let offsetX = 0;

  let offsetY = 0;

  noteElement.addEventListener("mousedown", (event) => {
    if (
      event.target.tagName === "TEXTAREA" ||
      event.target.tagName === "INPUT" ||
      event.target.closest("button")
    )
      return;

    isDragging = true;

    offsetX = event.clientX - noteElement.offsetLeft;

    offsetY = event.clientY - noteElement.offsetTop;
  });

  document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    noteElement.style.left = event.clientX - offsetX + "px";

    noteElement.style.top = event.clientY - offsetY + "px";
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      const target = notes.find((item) => item.id === note.id);

      target.x = noteElement.offsetLeft;

      target.y = noteElement.offsetTop;

      saveToLocalStorage();
    }

    isDragging = false;
  });
}

// SAVE NOTE BUTTON

saveNoteBtn.addEventListener("click", () => {
  if (noteTitle.value.trim() === "" || noteContent.value.trim() === "") {
    alert("Please fill all fields");

    return;
  }

  const now = new Date();

  const note = {
    id: Date.now(),

    title: noteTitle.value,

    content: noteContent.value,

    color: noteColor.value,

    time: now.toLocaleString(),

    x: Math.random() * 400,

    y: Math.random() * 250,
  };

  notes.push(note);

  saveToLocalStorage();

  createNote(note);

  updateEmptyMessage();

  closeModal();
});

// LOAD SAVED NOTES

notes.forEach((note) => {
  createNote(note);
});

updateEmptyMessage();
