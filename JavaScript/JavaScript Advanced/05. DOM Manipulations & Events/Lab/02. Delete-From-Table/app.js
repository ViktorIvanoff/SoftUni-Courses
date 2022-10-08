function deleteByEmail() {
//     Write a program that takes an email from an input field and deletes the matching row from a table. 
// •	If entry is found, the textContent in the element with id="result" must be set to "Deleted."
// •	Otherwise, an error should be displayed in a <div> with id="result". The error should be "Not found." 
// Submit only the deleteByEmail() function in Judge. 
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.
const inputField = document.querySelector('input[name="email"]');
let resultDiv = document.getElementById('result');
let table = Array.from(document.querySelectorAll('tbody tr'));
let isFound = false;

for(let row of table) {
    
    if (row.children[1].textContent === inputField.value) {
        isFound = true;
        let parentElement = row.parentElement;
        parentElement.removeChild(row);
    }
}

isFound ?
    resultDiv.textContent += 'Deleted.' :
    resultDiv.textContent += 'Not found.';

}