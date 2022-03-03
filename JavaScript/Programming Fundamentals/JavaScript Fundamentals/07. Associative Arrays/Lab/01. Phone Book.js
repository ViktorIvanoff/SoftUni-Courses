function solve(input) {

    // Tim -> 0876566344
    // Peter -> 0877547887
    // Bill -> 0896543112

    let phoneBook = {};

    for (let line of input) {

        let [name, phoneNumber] = line.split(" ");

        if (!phoneBook.hasOwnProperty(name)) {
            phoneBook[name] = phoneNumber;
        }

        phoneBook[name] = phoneNumber;
    }

    Object.keys(phoneBook).map((name) => {
        console.log(`${name} -> ${phoneBook[name]}`);
    }).join("\n");

}