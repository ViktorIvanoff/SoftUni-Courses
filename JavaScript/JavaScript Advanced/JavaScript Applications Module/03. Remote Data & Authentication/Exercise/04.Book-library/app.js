function books() {

    const baseUrl = `http://localhost:3030/jsonstore/collections/books`;
    const loadBooksBtn = document.getElementById('loadBooks');
    const submitBtn = document.querySelector('form button');
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    loadBooksBtn.addEventListener('click', loadBooks);
    submitBtn.addEventListener('click', createBook);

    async function loadBooks(ev) {
        try {

            tbody.replaceChildren();

            const response = await fetch(baseUrl);
            if(response.status !== 200) {
                throw new Error('Error loading books!');
            }

            const data = await response.json();
            Object.entries(data)
            .forEach((b) => {
          
             const tr = document.createElement('tr');
             tr.id = b[0];
      
             const titleCell = tr.insertCell(0);
             titleCell.innerHTML = b[1].title;

             const authorCell = tr.insertCell(1);
             authorCell.innerHTML = b[1].author;

             const buttonsTd = document.createElement('td');
             const editBtn = document.createElement('button');
             editBtn.textContent = 'Edit';
             buttonsTd.appendChild(editBtn);

             editBtn.addEventListener('click', updateBook)
             
             const deleteBtn = document.createElement('button');
             deleteBtn.textContent = 'Delete';
             buttonsTd.appendChild(deleteBtn);

             deleteBtn.addEventListener('click', deleteBook);

             tr.appendChild(buttonsTd);
             tbody.appendChild(tr);
            });
        }
        catch(error) {
            console.log(error);
        }
    }

    async function createBook(ev) {
        ev.preventDefault();

        const titleElement = document.querySelector('input[type="text"][name="title"]');
        const authorElement = document.querySelector('input[type="text"][name="author"]');

        if(titleElement.value == '' || authorElement.value == '') {
            alert('Fields can\'t be empty!');
            return;
        }
        
        const book = {
            author: authorElement.value,
            title: titleElement.value
        };

        const postRes = await fetch(baseUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });

        if(postRes.status !== 200) {
            throw new Error('Error sending data to server!');
        };

            const tr = document.createElement('tr');

             const titleCell = tr.insertCell(0);
             titleCell.innerHTML = titleElement.value;

             const authorCell = tr.insertCell(1);
             authorCell.innerHTML = authorElement.value;

             const buttonsTd = document.createElement('td');
             const editBtn = document.createElement('button');
             editBtn.textContent = 'Edit';
             buttonsTd.appendChild(editBtn);

             const deleteBtn = document.createElement('button');
             deleteBtn.textContent = 'Delete';
             buttonsTd.appendChild(deleteBtn);

             tr.appendChild(buttonsTd);
             tbody.appendChild(tr);

             authorElement.value = '';
             titleElement.value = '';
    }


    async function updateBook(ev) {
        // change form 
        //change submit btn to save btn
        const bookId = ev.target.parentNode.parentNode.id;

        const data = await fetch(`${baseUrl}/${bookId}`);
        const res = await data.json();

        const { title, author } = res;
    
        const titleElement = document.querySelector('input[type="text"][name="title"]');
        const authorElement = document.querySelector('input[type="text"][name="author"]');

        titleElement.value = title;
        authorElement.value = author;

        if(titleElement.value == '' || authorElement.value == '') {
            alert('Fields can\'t be empty!');
            return;
        }

        const editedBook = {
            author: authorElement.value,
            title: titleElement.value
        };

        const putRequest = await fetch(`${baseUrl}/${bookId}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedBook)
        });
    }

    async function deleteBook(ev) {
        const tr = ev.target.parentNode.parentNode;
        const trId = tr.id;

        tr.remove();
        const deleteReq = await fetch(`${baseUrl}/${trId}`, {
            method: 'delete',
        });
    }
}
books();





