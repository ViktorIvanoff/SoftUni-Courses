function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const loadBtn = document.getElementById('btnLoad');
    const phoneBookElement = document.getElementById('phonebook');
    const personInfoElement = document.getElementById('person');
    const phoneInfoElement = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');

   loadBtn.addEventListener('click', loadContacts);
   createBtn.addEventListener('click', createContact);

   async function loadContacts(ev) {

    try{

    const response = await fetch(url);

    if(response.ok === false) {
        let error = await response.json();
        throw Error(error.message);
    }

    const contacts = await response.json();

    Object.values(contacts)
    .forEach((c) => {
        const li = document.createElement('li');
        li.textContent += `${c.person}: ${c.phone}`;
        li.id = c._id;
   
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteContact);
    
        li.appendChild(deleteBtn);
        phoneBookElement.appendChild(li);
    });
}
catch(error) {
    console.log(error);
}
   }

   async function createContact(ev) {
   
    let person = personInfoElement.value;
    let phone = phoneInfoElement.value;

    const contact = {
        person,
        phone
    }

    if(person == '' || phone == '') {
        alert('Fields can\'t be empty!');
    }

    if(isNaN(Number(phone))) {
        alert('Enter valid phone number!');
        phone = '';
        return;
    }

    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });

        person = '';
        phone = '';

        loadBtn.click();
   }

   async function deleteContact(ev) {
    let parent = ev.target.parentNode.id;
    
    const response = await fetch(`http://localhost:3030/jsonstore/phonebook/${parent}`, {
        method: 'delete'
    });

    loadBtn.click();
   }
}

attachEvents();