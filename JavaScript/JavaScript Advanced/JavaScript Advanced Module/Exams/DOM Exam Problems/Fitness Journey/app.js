window.addEventListener('load', solve);

function solve() {

const input = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    contactNumber: document.getElementById('contact-number'),
    classType: document.getElementById('class-type'),
    classTime: document.getElementById('class-time')
}

const lists = {
    classInfo: document.querySelector('.class-info'),
    confirmClass: document.querySelector('.confirm-class')
}

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', onNext);

function onNext(event) {
    event.preventDefault();
    // read input
    const client = input.name.value;
    const email = input.email.value;
    const contactNumber = input.contactNumber.value;
    const classType = input.classType.value;
    const classTime = input.classTime.value;

    //validate input
    if (client == '' || email == '' || contactNumber == '' || classType == '' || classTime == '') {
        return;
    }
    // transfer input fields into classInfo
    const liInfo = document.createElement('li');
    liInfo.className = 'info-item';
    liInfo.innerHTML = `
    <article class="personal-info">
    <p>${client}</p>
    <p>${email}</p>
    <p>${contactNumber}</p>
    <p>${classType}</p>
    <p>${classTime}</p>
    </article>
    <button class="edit-btn">Edit</button>
    <button class="continue-btn">Continue</button>`;
    // add edit and cancel btns

    lists.classInfo.appendChild(liInfo);
    
      // clear input fields
      input.name.value = '';
      input.email.value = '';
      input.contactNumber.value = '';
      input.classType.value = '';
      input.classTime.value = '';
      // disable next btn
      nextBtn.disabled = true;

    const editBtn = liInfo.querySelector('.edit-btn');
    const continueBtn = liInfo.querySelector('.continue-btn');

    lists.classInfo.appendChild(editBtn);
    lists.classInfo.appendChild(continueBtn);

    editBtn.addEventListener('click', onEdit);
    continueBtn.addEventListener('click', onContinue);

    function onEdit() {
        input.name.value = client;
        input.email.value = email;
        input.contactNumber.value = contactNumber;
        input.classType.value = classType;
        input.classTime.value = classTime;

        lists.classInfo.removeChild(liInfo);
        editBtn.remove();
        continueBtn.remove();
        nextBtn.disabled = false;
    }

    function onContinue() {
        lists.classInfo.removeChild(liInfo);
        editBtn.remove();
        continueBtn.remove();

        const li = document.createElement('li');
        li.className = 'continue-info';
        li.innerHTML = `
        <article class="personal-info">
        <p>${client}</p>
        <p>${email}</p>
        <p>${contactNumber}</p>
        <p>${classType}</p>
        <p>${classTime}</p>
        </article>
        <button class="cancel-btn">Cancel</button>
        <button class="confirm-btn">Confirm</button>`;
        // add edit and cancel btns
        const cancelBtn = li.querySelector('.cancel-btn');
        const confirmBtn = li.querySelector('.confirm-btn');

        lists.confirmClass.appendChild(li);
        lists.confirmClass.appendChild(cancelBtn);
        lists.confirmClass.appendChild(confirmBtn);

        cancelBtn.addEventListener('click', onCancel);
        confirmBtn.addEventListener('click', onConfirm);

        function onCancel() {
            lists.confirmClass.removeChild(li);
            cancelBtn.remove();
            confirmBtn.remove();
            nextBtn.disabled = false;
        }

        function onConfirm() {
            const body = document.getElementById('body');
            const divElement = document.getElementById('main');
            divElement.remove();
        //    •	When the "Confirm" button is clicked, the <div> element with id="main" must be removed, from the body and  you must add <h1> element with id="thank-you" and text "Thank you for scheduling your appointment, we look forward to seeing you!" and  <button> with id="done-btn" and text "Done".
           let thanks = document.createElement('h1');
           thanks.setAttribute("id", "thank-you");
           thanks.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";

           let doneBtn = document.createElement('button');
           doneBtn.setAttribute("id", "done-btn");
           doneBtn.textContent = "Done";

           body.appendChild(thanks);
           body.appendChild(doneBtn);

           doneBtn.addEventListener("click", onDone);

            function onDone() {

                location.reload();
           
                }
        }
    }
}
}















