import { showHome } from "./home.js";

export function checkUserNav() {
    //with this func we check if the user is logged in
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    //if users data is diff from null, meaning ITS THERE
    if(userData != null) {
        document.getElementById('welcomeUser').textContent = `Welcome, ${userData.email}!`;
        //we show the logout btn
        document.getElementById('userNav').style.display = 'inline-block';
        // and we hide the login/register btns
        document.getElementById('guestNav').style.display = 'none';
    } else {
        document.getElementById('guestNav').style.display = 'inline-block';
        document.getElementById('userNav').style.display = 'none';
    }
}

export function onLogout() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'X-Authorization': userData.accessToken
        }
    });
    //clear sessionStorage
    sessionStorage.removeItem('userData');
    checkUserNav();
    showHome();

}