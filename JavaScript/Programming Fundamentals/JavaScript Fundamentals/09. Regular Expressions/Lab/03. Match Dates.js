function solve(input) {

    // Day: 13, Month: Jul, Year: 1928
    // Day: 10, Month: Nov, Year: 1934
    // Day: 25, Month: Dec, Year: 1937


    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let match = pattern.exec(input);

    while (match !== null) {

        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        match = pattern.exec(input);
    }

}