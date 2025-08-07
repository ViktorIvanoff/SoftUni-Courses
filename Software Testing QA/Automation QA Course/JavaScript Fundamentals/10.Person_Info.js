function createPerson(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return person;
}

let person = createPerson("Peter", "Pan", "20");
