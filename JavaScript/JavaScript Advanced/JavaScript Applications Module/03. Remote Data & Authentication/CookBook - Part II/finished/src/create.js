document.querySelector('form').addEventListener('submit', onCreate);

async function onCreate(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    // get data from formular
    const name = formData.get('name').trim();
    const image = formData.get('img').trim();

    const ingredients = formData.get('ingredients').trim().split('\n');
    const preparation = formData.get('steps').trim().split('\n');
    // create obj from data

    const data = {
        name,
        image,
        ingredients,
        preparation
    }

    // get token
    const token = sessionStorage.getItem('accessToken');

    // check if user logged in, if not, redirect
    // if(token == null) {
    //     alert('Please login!');
    //     window.location = '/finished/login.html';
    //     return;
    // }

    // fetch
    try {
        const response = await fetch('http://localhost:3030/data/recipes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(data)
        });

        if(response.ok === false) {
            let error = await response.json();
            throw new Error(error.message);
        }

        window.location = '/';

    }
    catch(error) {
        alert(error.message);
    }
}