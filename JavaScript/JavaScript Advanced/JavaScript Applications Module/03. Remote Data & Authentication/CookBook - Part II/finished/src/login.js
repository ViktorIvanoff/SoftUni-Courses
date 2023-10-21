// get formular
    document.querySelector('form').addEventListener('submit', onLogin);

    async function onLogin(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email');
        const password = formData.get('password');

        //validation
        if(email == '') {
            alert('Email field cannot be empty!');
        }

        if(password == '') {
            alert('Password field cannot be empty!');
        }

        try {

            const response = await fetch('http://localhost:3030/users/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( { email, password } )
            });

            if(response.ok === false) {
                let error = await response.json();
                throw new Error(error.message);
            }

            //get data
            const data = await response.json();
            // save token
            sessionStorage.setItem('accessToken', data.accessToken);

            window.location = '/finished/login.html';
        }
        catch(error) {
            alert(error.message);
        }
    }