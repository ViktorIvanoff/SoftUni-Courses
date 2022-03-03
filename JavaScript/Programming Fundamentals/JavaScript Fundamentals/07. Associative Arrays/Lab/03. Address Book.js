function solve(input) {
    //     'Tim:Doe Crossing',
    //  'Bill:Nelson Place',
    //  'Peter:Carlyle Ave',
    //  'Bill:Ornery Rd'

    // Bill -> Ornery Rd
    // Peter -> Carlyle Ave
    // Tim -> Doe Crossing

    let adressBook = {};

    for (let line of input) {

        let [name, address] = line.split(":");

        if (!adressBook.hasOwnProperty(name)) {
            adressBook[name] = address;

        } else {
            adressBook[name] = address;
        }
    }

    Object.entries(adressBook).
        sort((a, b) => a[0].localeCompare(b[0])).
        forEach((kvp) => {
            console.log(`${kvp[0]} -> ${kvp[1]}`);
        });

}