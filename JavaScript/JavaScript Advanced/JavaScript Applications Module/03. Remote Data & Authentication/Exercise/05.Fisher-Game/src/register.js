function registerUser() {
    const regUrl = 'http://localhost:3030/users/register';
    const formElement = document.querySelector('form');
    const errorNotification = document.getElementsByClassName('notification')[0];

    const regBtn = document.querySelector('button');
    const logoutBtn = document.getElementById('logout');
    regBtn.addEventListener('click', onRegister);

    async function onRegister(event) {

        event.preventDefault();
        const formData = new FormData(formElement);

        let email = formData.get('email');
        let password = formData.get('password');
        let rePass = formData.get('rePass');

        //validation
        if(email == '') {
            errorNotification.textContent += `You must enter an email!`;
        } else if(password == '') {
            errorNotification.textContent += `You must enter a password!`;
        } else if(rePass == '') {
            errorNotification.textContent += `You must enter a password!`;
        }

        if(password !== rePass) {
            errorNotification.textContent += `Passwords don't match!`;
            return;
        }

        if(email && password && rePass) {

        try{

        const user = {
            email,
            password
        };

        
        const postRes = await fetch(regUrl, {
        method: 'post',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        });

        if(postRes.status !== 200) {
            let error = new Error(postRes.statusText)
            throw error;
        };

        const data = await postRes.json();
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('loggedUser', data.email);
        sessionStorage.setItem('id', data._id);
        
        window.location = 'index.html';
    }
    
    catch(error){
    errorNotification.textContent = err.message;
}
}
}
}
registerUser();