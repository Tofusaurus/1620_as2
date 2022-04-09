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
