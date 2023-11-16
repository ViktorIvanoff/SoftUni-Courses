import { showAbout } from "./about.js";
import { showCatalog } from "./catalog.js";
import { showCreate } from "./create.js";
import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { checkUserNav, onLogout } from "./util.js";

//get nav and add event listener to ENTIRE nav, instead of each separate button -> its easier
document.querySelector('nav').addEventListener('click', onNavigate);
document.getElementById('logoutBtn').addEventListener('click', onLogout);

checkUserNav();
showHome();

//assoc array for diff sections - for easy identification of pressed btn
const sections = {
    'homeBtn': showHome,
    'catalogBtn': showCatalog,
    'aboutBtn': showAbout,
    'loginBtn': showLogin,
    'registerBtn': showRegister,
    'createBtn': showCreate
}

function onNavigate(ev) {

    //check if a button is clicked
    if(ev.target.tagName == 'A') {
        const view = sections[ev.target.id];

        if(typeof view == 'function') {
        ev.preventDefault();
        view();
        }
    }
}

