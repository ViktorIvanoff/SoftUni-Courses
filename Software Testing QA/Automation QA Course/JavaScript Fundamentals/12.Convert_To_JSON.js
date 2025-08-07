function convertToJson(name, lastName, hairColor) {

    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let result = JSON.stringify(person);
    console.log(result);
}
convertToJson('George', 'Jones', 'Brown');