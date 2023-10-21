// get formular 
document.querySelector('form').addEventListener('submit', onSubmit);

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    // get data from formular
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('rePass');

    try {
    //validation
        if (email == '' || password == '') {
            alert('All fields must be filled!');
        }

        if(password != repass) {
            alert('Password don\'t match!');
        }
    // post fetch 

        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { email, password } )
        });

        // check status, get error from response and throw error 
        if(response.ok === false) {
            let error = await response.json();
            throw Error(error);
        }

        // 2nd promise 
        const responseData = await response.json();

        // save token in sessionStorage and redirect 
                            // key , always in '' and value from data obj
        sessionStorage.setItem('accessToken', responseData.accessToken);

        window.location = '/finished/index.html';
    }
    catch(error) {
        alert(error.message);
    }
}

