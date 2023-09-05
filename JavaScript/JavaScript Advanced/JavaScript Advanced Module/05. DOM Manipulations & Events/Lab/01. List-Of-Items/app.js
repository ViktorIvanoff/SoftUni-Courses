function addItem() {
    // Write a function that reads the text inside an input field and appends the specified text to a list inside an HTML page.
    const input = document.getElementById('newItemText');
    let liElement = document.createElement('li');

    liElement.textContent = input.value;

    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);

    input.value = ' ';
 
}