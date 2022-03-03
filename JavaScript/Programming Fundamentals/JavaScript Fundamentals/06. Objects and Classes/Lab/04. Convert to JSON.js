function solve(name, lastName, hairColor) {

    let result = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let objAsJson = JSON.stringify(result);
    console.log(objAsJson);

}