function solve(text) {

    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];
    let travelPoints = 0;

    let match = pattern.exec(text);

    while (match !== null) {

        let country = match[2];
        travelPoints += country.length;

        destinations.push(country);

        match = pattern.exec(text);
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

    // Destinations:
    // Travel Points: 0

}