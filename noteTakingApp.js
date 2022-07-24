const form = {}
form.noteText = document.querySelector('#formNoteText');
form.addButton = document.querySelector('#formAddButton');
modal = document.querySelector('.modal');
const notes = document.querySelector('#notes');

form.noteText.focus();

function addNote() {
  let text = form.noteText.value;
  let note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `<div class='note-text'>${text}<div class="view-container"><div class="text">VIEW</div></div></div>`;

  note.addEventListener('click', (e) => {
    document.querySelector('.content').textContent = text;
    e.preventDefault();
    modal.classList.add('modal-active');
    modal.classList.remove('modal-inactive');
  })
  notes.appendChild(note);
  form.noteText.value = '';
  form.noteText.focus();
}

form.addButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (form.noteText.value == '') {
    alert('Enter a Note .');
  }
  else {
    addNote();
  }
})

document.querySelector('.close-modal').addEventListener('click', (e) => {
  e.preventDefault()
  modal.classList.remove('modal-active')
  modal.classList.add('modal-inactive')
})