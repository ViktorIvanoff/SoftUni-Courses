window.addEventListener('load', solve);

function solve() {

    const input = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count')
    };

    const lists = {
        ticketInfoList: document.querySelector('.ticket-info-list'),
        confirmTicket: document.querySelector('.confirm-ticket'),
        divElement: document.getElementById('main')
    }

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);

    function onNext(event) {
        event.preventDefault();

        //read input
        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const peopleCount = input.peopleCount.value;
        const fromDate = input.fromDate.value;
        const daysCount = input.daysCount.value;

        // validate input
        if(firstName == '' || lastName == '' || peopleCount == '' || fromDate == '' || daysCount == '') {
            return;
        }

        // transfer input into ticketinfo List
        const li = document.createElement('li');
        li.className = 'ticket';
        li.innerHTML = `
        <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${fromDate}</p>
        <p>For ${daysCount} days</p>
        <p>For ${peopleCount} people</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>
        `;

        // create Edit and Cont btns and enable them
        const editBtn = li.querySelector('.edit-btn');
        editBtn.disabled = false;
        editBtn.addEventListener('click', onEdit);

        const continueBtn = li.querySelector('.continue-btn');
        continueBtn.disabled = false;
        continueBtn.addEventListener('click', onContinue);

        lists.ticketInfoList.appendChild(li);

        // clear input fields
        input.firstName.value = '';
        input.lastName.value = '';
        input.peopleCount.value = '';
        input.fromDate.value = '';
        input.daysCount.value = '';

        // disable nextBtn
        nextBtn.disabled = true;

        function onEdit() {
            // put back info from input fields to first page
            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.peopleCount.value = peopleCount;
            input.fromDate.value = fromDate;
            input.daysCount.value = daysCount;

            // enable nextbtn
            nextBtn.disabled = false;
            // remove li from ticketinfo List
            li.remove();
        }

        function onContinue() {
            //transfer info from ticketinfo List to Confirm ticket list
        const contentLi = document.createElement('li');
        contentLi.className = 'ticket-content';
        contentLi.innerHTML = `
        <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${fromDate}</p>
        <p>For ${daysCount} days</p>
        <p>For ${peopleCount} people</p>
        </article>
        <button class="confirm-btn">Confirm</button>
        <button class="cancel-btn">Cancel</button>
        `;

            // add confirm and cancel btns
            const confirmBtn = contentLi.querySelector('.confirm-btn');
            confirmBtn.addEventListener('click', onConfirm);
    
            const cancelBtn = contentLi.querySelector('.cancel-btn');
            cancelBtn.addEventListener('click', onCancel);
            // delete edit and cont btns
            lists.confirmTicket.appendChild(contentLi);

            li.remove();
            editBtn.remove();
            continueBtn.remove();
        }

        function onCancel() {
            // remove li from confirm list
            lists.confirmTicket.removeChild(contentLi);
            // enable next btn
            nextBtn.disabled = false;
        }

        function onConfirm() {
            // remove div 'main' element from body
            // •	When the "Confirm" button is clicked, the <div> element with id="main" must be removed, from the body and  you must add <h1> element with id="thank-you" and text "Thank you, have a nice day! " and  <button> with id="back-btn" and text "Back ".
            lists.divElement.remove();
            const h1Element = document.createElement('h1');
            h1Element.id = "thank-you";
            h1Element.textContent += "Thank you, have a nice day!";
           
            const backButton = document.createElement('button');
            backButton.id = "back-btn";
            backButton.textContent += "Back";
            body.appendChild(backButton);
            body.appendChild(h1Element);

            backButton.addEventListener('click', onBack);

            function onBack() {
                location.reload();
            }
        }
    }
}


    
    
