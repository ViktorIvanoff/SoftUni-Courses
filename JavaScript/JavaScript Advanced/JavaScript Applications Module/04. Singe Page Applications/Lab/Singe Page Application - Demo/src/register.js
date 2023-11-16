import { checkUserNav } from "./util.js";
import { showHome } from "./home.js";

const section = document.getElementById('registerView');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.remove();

export function showRegister() {
    document.querySelector('main').replaceChildren(section);
}

async function onSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('repass').trim();

    try{
        if(email == '' || password == '') {
            throw new Error('All fields are required!');
        }

        if(password != repass) {
            throw new Error('Passwords dont match!');
        }

        const res = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( {email, password} )
        });

        if(res.ok == false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();

        const userData = {
            'email': data.email,
            'accessToken': data.accessToken,
            'id': data._id
        }

        sessionStorage.setItem('userData', JSON.stringify(userData));
        checkUserNav();
        showHome();
    }
    catch(err) {
        alert(err.message);
    }
}