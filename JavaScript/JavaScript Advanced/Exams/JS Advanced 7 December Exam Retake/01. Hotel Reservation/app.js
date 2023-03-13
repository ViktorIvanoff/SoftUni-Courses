window.addEventListener('load', solve);

function solve() {
    // •	First Name, Last Name, Check-in date, Check-out date and Number of guests are non-empty strings and Check-in date is before Check-out date. If any of them is empty, the program should not do anything.

    // get all elements
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const checkInDateElement = document.getElementById('date-in');
    const checkOutDateElement = document.getElementById('date-out');
    const numberOfGuestsElement = document.getElementById('people-count');

    const nextButtonElement = document.getElementById('next-btn');
    const infoListElement = document.querySelector('.info-list');
    const confirmListElement = document.querySelector('.confirm-list');
    const verification = document.getElementById('verification');
//         •	On clicking the ["Next"] button the information from the input fields is listed in the "Reservation info" section. For the input fields a list item is added to the "info-list" unordered list. 
// •	The text format and order for the list item should be the same as on the picture below.  
// •	When the button is clicked, the input fields must be cleared and the ["Next"] button must be disabled. At the same time the "Edit" and the "Continue" buttons must be enabled. 
// The HTML structure looks like this:  

// add event listener to btn
nextButtonElement.addEventListener('click', showNext);

function showNext(ev) {
    // put prevent default
   ev.preventDefault();

   // check if strings are empty, if they are, program shouldnt do anything, as per condition
   if (firstNameElement.value == '' ||
        lastNameElement.value == '' ||
        checkInDateElement.value == '' ||
        checkOutDateElement.value == '' ||
        numberOfGuestsElement.value == '' ||
        new Date(checkInDateElement.value) >= new Date(checkOutDateElement.value)) {
            return;
        }

        const liElement = document.createElement('li');
        liElement.setAttribute('class', 'reservation-content');

        // article
        let article = document.createElement('article');
        // h3
        let h3 = document.createElement('h3');
        h3.textContent += `Name: ${firstNameElement.value} ${lastNameElement.value}`;
        article.appendChild(h3);

        // p
        let p = document.createElement('p');
        p.textContent += `From date: ${checkInDateElement.value}`;
        article.appendChild(p);

        //p2
        let p2 = document.createElement('p');
        p2.textContent += `To date: ${checkOutDateElement.value}`;
        article.appendChild(p2);

        //p3
        let p3 = document.createElement('p');
        p3.textContent += `For ${numberOfGuestsElement.value} people`;
        article.appendChild(p3);

        liElement.appendChild(article);

        // create edit and continue buttons 
        let editButton = document.createElement('button');
        editButton.setAttribute('class', 'edit-btn');
        editButton.textContent = 'Edit';

        let continueBtn = document.createElement('buton');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        liElement.appendChild(editButton);
        liElement.appendChild(continueBtn);

        infoListElement.appendChild(liElement);

        // save all input fields in variables and clear them
        let editFirstName = firstNameElement.value;
        let editLastName = lastNameElement.value;
        let editCheckIn = checkInDateElement.value;
        let editCheckOut = checkOutDateElement.value;
        let editNumGuests = numberOfGuestsElement.value;

        firstNameElement.value = '';
        lastNameElement.value = '';
        checkInDateElement.value = '';
        checkOutDateElement.value = '';
        numberOfGuestsElement.value = '';

        // disable nextBtn
        nextButtonElement.disabled = true;

        // add event listener to edit btn
        editButton.addEventListener('click', edit);

        function edit(ev) {
            // exchange their values
            firstNameElement.value = editFirstName;
            lastNameElement.value = editLastName;
            checkInDateElement.value = editCheckIn;
            checkOutDateElement.value = editCheckOut;
            numberOfGuestsElement.value = editNumGuests;

            nextButtonElement.disabled = false;

            // clear ul info list
            liElement.remove();
            article.remove();
            p.remove();
            p2.remove();
            p3.remove();

        }

        continueBtn.addEventListener('click', onContinue);

        function onContinue(ev) {

            
        }







        }
}

    
    













   
