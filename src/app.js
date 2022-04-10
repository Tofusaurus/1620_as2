const notes = [
  // will be added from user
]

// run function when the plus button is clicked
document.querySelector("i.fa-circle-plus").addEventListener("click", function () {

  // create a new note-taking area below plus button
  // create textarea element
  const titleTextBox = document.createElement("input");
  titleTextBox.placeholder = "Note Title"

  const textareaElemenetForNotes = document.createElement("textarea");
  textareaElemenetForNotes.placeholder = "Note Body"

  // add properties to textarea
  textareaElemenetForNotes.cols = 30;
  textareaElemenetForNotes.rows = 7;

  // create a Cancel button
  const notesCancelBtn = document.createElement("button");
  // add properties to Cancel button
  notesCancelBtn.className = "cancel_btn_notes";
  notesCancelBtn.textContent = "Cancel";

  // create a save button
  const notesSaveBtn = document.createElement("button");
  // add properties to save button
  notesSaveBtn.className = "save_btn_notes";
  notesSaveBtn.textContent = "Save";

  notesSaveBtn.addEventListener("click", function(){
     saveNote(titleTextBox.value, textareaElemenetForNotes.value);
  });

   // add all the above tags to the write-note-area section
  document.querySelector(".write-note-area").appendChild(titleTextBox);
  document.querySelector(".write-note-area").appendChild(textareaElemenetForNotes);
  document.querySelector(".write-note-area").appendChild(notesSaveBtn);
  document.querySelector(".write-note-area").appendChild(notesCancelBtn);
});

function saveNote(noteTitle, noteBody){
  // add new note in array 
  notes.push({ 
     title: noteTitle, 
     noteBody: noteBody,
     id: notes.length
  });
  // refresh side section
  loadNotes()
  // remove input fields
  document.querySelector("input").remove();
  document.querySelector("textarea").remove();
  document.querySelector(".cancel_btn_notes").remove();
  document.querySelector(".save_btn_notes").remove();
}

// Remove note-taking area on click of cancel button
window.addEventListener("click", function (event) {

  // if button cancel clicked
  if (event.target.classList.contains("cancel_btn_notes")) {
    // Remove note-taking area elements
     document.querySelector("input").remove();
     document.querySelector("textarea").remove();
     document.querySelector(".cancel_btn_notes").remove();
     document.querySelector(".save_btn_notes").remove();
  }
});


// function to load notes from array
function loadNotes(){
  // clear the section
  document.querySelector(".notes-list").innerHTML = '';   
  // loop in array
  for(const i=0;i<notes.length;i++){
     // create div with Notetitle for note title
     const div = document.createElement("div");
     div.className = "cardNote";
     div.id = i
     // add on click
     div.addEventListener('click', function(){
        showNote(this.id)
     })
     const Notetitle = document.createElement("Notetitle");
     Notetitle.append(notes[i].title)
     div.appendChild(Notetitle)
     // append div to section
     document.querySelector(".notes-list").appendChild(div);   
  }
}

// on section list click
function showNote(id){
  document.querySelector(".read-note-area").innerHTML = '';
  const div = document.createElement("div");
  div.className = "cardNote note";
  const body = document.createElement("body");
  body.append(notes[id].title)
  const Notetitle = document.createElement("Notetitle");
  Notetitle.append(notes[id].noteBody)
  div.appendChild(body)
  div.appendChild(Notetitle)
  
  document.querySelector(".read-note-area").appendChild(div);
}