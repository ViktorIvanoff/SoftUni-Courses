function focused() {
    // Write a function that highlights the currently active section of a document. There will be multiple divs with input fields inside them. Set the class of the div that contains the currently focused input field to "focused". When the focus is lost (blurred), remove the class from the element.
    // Submit only the focused() function in Judge.
    
   const sections = Array.from(document.querySelectorAll('input[type="text"]')).
   forEach( div => {

        div.addEventListener('focus', onFocus);
        div.addEventListener('blur,', onBlur);
   });

   function onFocus(event) {
        event.target.parentElement.className = 'focused';

   }

   function onBlur(event) {
    event.target.parentElement.className = ' ';

   }
}
