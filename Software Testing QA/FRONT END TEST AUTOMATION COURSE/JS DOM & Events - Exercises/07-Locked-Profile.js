function lockedProfile() {
    //take all btns, conv to array
    let buttoneElements = Array.from(document.querySelectorAll('div button'));

    //take all locked radio elements through profile class
    let lockElements = document.querySelectorAll('.profile input[type="radio"]');
    console.log(lockElements)
    //add event listener to all buttons with for loop
    for (let btn of buttoneElements) {
        btn.addEventListener('click', show);
    }

    function show(e) {

        //take the children of the parent element of ev.target and conv to array
        let divChildren = Array.from(e.target.parentElement.children);
        //take the locked ones from them
        let locked = divChildren[2].checked;
        // if unlocked = 
        if (locked == false) {
            let hiddenFieldsElement = e.target.previousElementSibling;
            if (e.target.textContent == 'Show more') {
                hiddenFieldsElement.style.display = 'inline';
                e.target.textContent = 'Hide it'
            } else {
                hiddenFieldsElement.style.display = '';
                e.target.textContent = 'Show more'
            }
        }
    }
}