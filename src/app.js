const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

  // run function when the plus button is clicked
document.querySelector("i.fa-circle-plus").addEventListener("click", function () {
    // create a new note-taking area below plus button
    // create textarea element
  const textareaElemenetForNotes = document.createElement("textarea");
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

    // add all the above tags to the write-note-area section
  document.querySelector(".write-note-area").appendChild(textareaElemenetForNotes);
  document.querySelector(".write-note-area").appendChild(notesSaveBtn);
  document.querySelector(".write-note-area").appendChild(notesCancelBtn);
  });
  
  // Remove note-taking area on click of cancel button
window.addEventListener("click", function (event) {
  // if button cancel clicked
  if (event.target.classList.contains("cancel_btn_notes")) {
    // Remove note-taking area elements
    document.querySelector("textarea").remove();
    document.querySelector(".cancel_btn_notes").remove();
    document.querySelector(".save_btn_notes").remove();
  }
});