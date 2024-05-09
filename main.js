console.log("Connected!");
// YOU WILL MODIFY THIS FUNCTION TO GET THE PROGRAM TO WORK
const wordCounter = (value) => {
  // Type into the input and press submit, you will see the value you entered in your console
  console.log(value);

  if (value) {
    value = value.trim();
    let wordCounter = value.split(/\s+/).length; //NOT PERFECT !!!!!! REGEX????
    wordCount.innerHTML = `u got uhh ... ${wordCounter} words`;
  } else {
    // if the value is empty, set the error message value to "Please input text"
    error.innerHTML = "ok so what do u want me to do from here"; // UPDATE THIS
  }
};

// OPTIONAL CHALLENGE
const toggleMode = (btnText) => {
  // complete the function
};

// ************************************************ //
// **** DO NOT MODIFY THE CODE BELOW THIS LINE **** //
// ************************************************ //

// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");

const toggleButton = document.querySelector("#bg-switch");
const submitButton = document.querySelector("#submit-button");
const clearButton = document.querySelector("#clear-button");

const body = document.querySelector("body");

// These are event listeners. We will focus on them later in the course
form.addEventListener("submit", (event) => {
  event.preventDefault(); // the default behavior of a form is to reload the page, we do not want that so we want to prevent that behavior
  error.innerHTML = ""; // clear out the innerHTML on submit
  wordCount.innerHTML = ""; // clear out the innerHTML on submit
  const value = textarea.value; // grab the value of the text area on submit
  wordCounter(value); // call the function and pass it the value
});

form.addEventListener("reset", () => {
  error.innerHTML = ""; // on reset, clear the innerHTML
  wordCount.innerHTML = ""; // on reset, clear the innerHTML
});

toggleButton.addEventListener("click", (event) => {
  body.classList.toggle("dark-mode");
  toggleButton.classList.toggle("button-dark-mode");
  submitButton.classList.toggle("button-dark-mode");
  clearButton.classList.toggle("button-dark-mode");
});
