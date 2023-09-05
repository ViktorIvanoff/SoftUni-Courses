function create(words) {
   // You will receive an array of strings. For each string, create a div with a paragraph with the string in it. Each paragraph is initially hidden (display:none). Add a click event listener to each div that displays the hidden paragraph. Finally, you should append all divs to the element with an id "content".
   // ['Section 1', 'Section 2', 'Section 3', 'Section 4']
   const result = document.getElementById('content');

   for (let word of words) {
      // create a div with a paragraph with the string in it
      let div = document.createElement('div');
      let p = document.createElement('p');
      // Each paragraph is initially hidden (display:none)
      p.style.display = 'none';
     
      div.appendChild(p);
      p.textContent += word;

      result.appendChild(div);

      div.addEventListener('click', ( ) => {
         p.style.display = 'block';
      });

   }

}