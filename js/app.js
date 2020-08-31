const form = {};
form.noteText = document.querySelector("#noteText");
form.color = document.querySelector("#formColor");
form.addBtn = document.querySelector("#addBtn");

const notes = document.querySelector("#notes");

form.noteText.focus();

let selectedColor;
const inputs = document.querySelectorAll("input");
for (const input of inputs) {
  input.addEventListener("click", function () {
    selectedColor = this.value;
  });
}

const addNote = () => {
  const note = document.createElement("div");
  const deleteBtn = document.createElement("span");
  let text = form.noteText.value;
  let d = new Date();
  let currentTime = d.toLocaleTimeString();

  note.classList.add("note");
  note.classList.add(selectedColor);

  note.innerHTML = `<div class='note-text'>${text}<div class='note-timestamp'>${currentTime}</div></div>`;
  deleteBtn.classList.add("note-delete");
  deleteBtn.innerHTML = "&times;";

  note.appendChild(deleteBtn);
  notes.appendChild(note);

  form.noteText.value = "";
  form.noteText.focus();

  addListenerDeleteBtn(deleteBtn);
};

const addListenerDeleteBtn = (deleteBtn) => {
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    deleteNote(e);
  });
};

const deleteNote = (e) => {
  let eventNote = e.target.parentNode;
  eventNote.parentNode.removeChild(eventNote);
};

form.addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (form.noteText.value != "") {
    addNote();
  }
});
