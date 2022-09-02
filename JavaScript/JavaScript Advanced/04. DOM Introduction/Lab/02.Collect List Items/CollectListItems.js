function extractText() {
   const items = [...document.querySelectorAll('li')];
   const result = items.map(e => e.textContent).join('\n');

   document.getElementById('result').value = result;

}