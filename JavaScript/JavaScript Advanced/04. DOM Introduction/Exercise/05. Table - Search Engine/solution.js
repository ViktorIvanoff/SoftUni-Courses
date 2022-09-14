function solve() {
// When the "Search" button is clicked, go through all cells in the table except for the first row (Student name, Student email, and Student course) and check if the given input has a match (check for both full words and single letters).
// If any of the rows contain the submitted string, add a class select to that row. Note that more than one row may contain the given string. 
// Оtherwise, if there is no match, nothing should happen.
// Note: After every search ("Search" button is clicked), clear the input field and remove all already selected classes (if any) from the previous search, for the new search to contain only the new result.

   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let inputText = document.getElementById('searchField');
   let table = document.querySelectorAll('tbody tr');

   function onClick() {
    
      for (let row of table) {

         // first clear all the classes row select so that the table is clear
         row.classList.remove('select');
         // check if the given input has a match (check for both full words and single letters)
         if (inputText.value !== ' ' && row.innerHTML.includes(inputText.value)) {
            // If any of the rows contain the submitted string, add a class select to that row
            row.className = 'select'; 
         }
      }
      // After every search ("Search" button is clicked), clear the input field and remove all already selected classes (if any) from the previous search
      inputText.value = ' ';

   }
}