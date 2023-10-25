async function students() {
    try {

    const url = 'http://localhost:3030/jsonstore/collections/students';
    const table = document.querySelector('#results tbody');
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', addStudent);

    // get students data and render it 
    const response = await fetch(url);
    const students = await response.json();
        Object.values(students)
        .forEach((s) => {
            // <tbody> 
                //create t row
                // create tdata
            // </tbody>
            const firstName = s.firstName;
            const lastName = s.lastName;
            const facultyNumber = s.facultyNumber;
            const grade = Number(s.grade);

            const tr = document.createElement('tr');

            const firstNameCell = tr.insertCell(0);
            firstNameCell.innerHTML = firstName;

            const lastNameCell = tr.insertCell(1);
            lastNameCell.innerHTML = lastName;

            const facultyNumberCell = tr.insertCell(2);
            facultyNumberCell.innerHTML = facultyNumber;

            const gradeCell = tr.insertCell(3);
            gradeCell.innerHTML = grade;

            table.appendChild(tr);
        })  
    }
    catch(error) {
        console.log(error);
    }
    
    function addStudent(ev) {

        ev.preventDefault();
        const firstNameElement = document.querySelector('[name="firstName"]');
        const lastNameElement = document.querySelector('[name="lastName"]');
        const facultyNumberElement = document.querySelector('[name="facultyNumber"]');
        const gradeElement = document.querySelector('[name="grade"]');

        // required attribute for input fields

        // const inputsArray = Array.from(document.querySelectorAll('.inputs input'));
        // inputsArray.map( i => {
        //     i.setAttribute('required', 'required')
        // });

        //validation for non-emptry strings and grade to be a number
        if(firstNameElement.value == '' || lastNameElement.value == '' || facultyNumberElement.value == '' || gradeElement.value == '') {
            alert('Fields cannot be empty!');
            return;
        }

        if(isNaN(Number(gradeElement.value)) && isNaN(Number(facultyNumberElement.value))) {
            alert('Value must be a number!');
            gradeElement.value = '';
            facultyNumberElement.value = '';
            return;
        }
        // take data from input fields and render into table

        const student = {
            firstName: firstNameElement.value,
            lastName: lastNameElement.value,
            facultyNumber: Number(facultyNumberElement.value),
            grade: Number(gradeElement.value)
        };

        postStudent(student);

        const table = document.querySelector('#results tbody');
        const tr = document.createElement('tr');

        const firstNameCell = tr.insertCell(0);
        firstNameCell.innerHTML = firstNameElement.value;

        const lastNameCell = tr.insertCell(1);
        lastNameCell.innerHTML = lastNameElement.value;

        const facultyNumberCell = tr.insertCell(2);
        facultyNumberCell.innerHTML = facultyNumberElement.value;

        const gradeCell = tr.insertCell(3);
        gradeCell.innerHTML = gradeElement.value;

        table.appendChild(tr);

        //clear input fields
        firstNameElement.value = '';
        lastNameElement.value = '';
        facultyNumberElement.value = '';
        gradeElement.value = '';
    }

    async function postStudent(student) {
        const url = 'http://localhost:3030/jsonstore/collections/students';
        const postResponse = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        });
    }
}
students();