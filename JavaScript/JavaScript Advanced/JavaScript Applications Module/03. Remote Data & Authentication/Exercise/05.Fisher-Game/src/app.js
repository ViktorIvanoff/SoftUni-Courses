function app() {
// get logged user's data and get btns
const accessToken = sessionStorage.getItem('accessToken');
const loggedUserEmail = sessionStorage.getItem('loggedUser');
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');
const logoutBtn = document.getElementById('logout');
const logoutUrl = 'http://localhost:3030/users/logout';


// if user logged in, display username in span
if(loggedUserEmail) {
    document.querySelector('span').textContent = loggedUserEmail;
} else {
    document.querySelector('span').textContent = "guest";
}

// hide/show btns depending if user logged in or not 
if(accessToken) {
    // if user is logged in, hide login and register btns
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';
    logoutBtn.style.display = 'inline';
} else {
    // if user not logged in, show login and register btns
    loginBtn.style.display = 'inline';
    registerBtn.style.display = 'inline';
    logoutBtn.style.display = 'none';
}

logoutBtn.addEventListener('click', onLogout);

async function onLogout() {

        await fetch(logoutUrl, {
        method: 'GET',
        headers: {
            'X-Authorization': accessToken
        }
    });

    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('loggedUserEmail');
    sessionStorage.removeItem('id');
    window.location = 'index.html';
}

}
app();