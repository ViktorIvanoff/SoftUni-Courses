function validate() {
    //     Write a function that dynamically validates an email input field when it is changed. If the input is invalid, apply the class "error". Do not validate on every keystroke, as it is annoying for the user, consider only change events.
    // A valid email is considered to be in the format: <name>@<domain>.<extension>
    // Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style. Submit only the validate() function in Judge.
    
    // select the input field
    const inputField = document.getElementById('email');
    
    // add event listener to it
    inputField.addEventListener('change', onChange);
    // check if email is valid against regex 
    
    function onChange(event) {
        // select input value 
        let value = event.target.value;
        
        if (! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
            inputField.classList.add('error');
        } else {
            inputField.classList.remove('error');
        }
    }
    
    }