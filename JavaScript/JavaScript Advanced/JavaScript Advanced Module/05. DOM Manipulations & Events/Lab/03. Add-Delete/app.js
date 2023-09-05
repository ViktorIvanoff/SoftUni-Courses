function addItem() {
    // Extend the previous problem to display a [Delete] link after each list item. Clicking it should delete the item with no confirmation. You have to add href="#" to the link element.
    
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
