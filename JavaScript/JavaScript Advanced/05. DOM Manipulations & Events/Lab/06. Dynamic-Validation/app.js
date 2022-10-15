function validate() {
  //     Write a function that dynamically validates an email input field when it is changed. If the input is invalid, apply the class "error". Do not validate on every keystroke, as it is annoying for the user, consider only change events.

  // A valid email is considered to be in the format: <name>@<domain>.<extension>

  // Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style

  // select input
  const input = document.querySelector("#email");

  // add 'change' event to input
  input.addEventListener('change', onChange);

  // write onChange function
  function onChange(event) {
    // select the value of the event target (email)
    let value = event.target.value;

    // make a regex, check if email is valid against it 
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {

        // if email not valid, add class 'error'
      input.classList.add("error");
    } else {
        
         // if email valid, remove class 'error'
      input.classList.remove("error");
    }
  }
}
