function solve(input) {
    // '3',
    // 'Arnoldii<->4',
    // 'Woodii<->7',
    // 'Welwitschia<->2',

    // 'Rate: Woodii - 10',
    // 'Rate: Welwitschia - 7',
    // 'Rate: Arnoldii - 3',
    // 'Rate: Woodii - 5',
    // 'Update: Woodii - 5',
    // 'Reset: Arnoldii',

    // 'Exhibition'
    let actions = {

        'Rate': rate,
        'Update': update,
        'Reset': reset

    }

    let catalog = {};
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        // 'Arnoldii<->4',

        let [plant, rarity] = input.shift().split('<->');
        rarity = Number(rarity);

        catalog[plant] = {
            rarity,
            ratings: [],
            avgRating: 0
        }
    }

    //     After that until you receive the command "Exhibition" you will be given some of these commands:
    // Note: If any of the command is invalid, print "error"

    while (input[0] !== 'Exhibition') {

        let [command, args] = input.shift().split(': ');
        let action = actions[command];
        action(args);
    }

    function rate(line) {
        // Rate: {plant} - {rating} – add the given rating to the plant (store all ratings)
        // 'Rate: Woodii - 10',
        let [plant, rating] = line.split(' - ');
        rating = Number(rating);

        if (catalog[plant] !== undefined) {

            catalog[plant].ratings.push(rating);

            let total = 0;

            for (let rating of catalog[plant].ratings) {
                total += rating;
            }

            catalog[plant].avgRating = total / catalog[plant].ratings.length;

        } else {
            console.log('error');
        }
    }


    function update(line) {
        // 'Update: Woodii - 5',
        // Update: {plant} - {new_rarity} – update the rarity of the plant with the new one

        let [plant, newRarity] = line.split(' - ');
        newRarity = Number(newRarity);

        if (catalog[plant] !== undefined) {

            catalog[plant].rarity = newRarity;

        } else {
            console.log('error');
        }
    }


    function reset(plant) {
        // Reset: Arnoldii',
        // Reset: {plant} – remove all the ratings of the given plant

        if (catalog[plant] !== undefined) {

            catalog[plant].ratings.length = 0;
            catalog[plant].avgRating = 0;

        } else {
            console.log('error');
        }
    }

    // The plants should be sorted by rarity descending, then by average rating descending

    let sorted = Object.entries(catalog)
        .sort(sortingPlants);

    function sortingPlants(a, b) {

        let rarityA = a[1].rarity;
        let rarityB = b[1].rarity;

        let avgRatingA = a[1].avgRating;
        let avgRatingB = b[1].avgRating;

        return (rarityB - rarityA) || (avgRatingB - avgRatingA);
    }


    console.log("Plants for the exhibition:");

    for (let [name, plant] of sorted) {

        console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
    }
    // [
    //     [ 'Woodii', { rarity: 5, ratings: [Array], avgRating: 7.5 } ],
    //     [ 'Arnoldii', { rarity: 4, ratings: [], avgRating: 0 } ],
    //     [ 'Welwitschia', { rarity: 2, ratings: [Array], avgRating: 7 } ]
    //   ]

    // Plants for the exhibition:
    // - Woodii; Rarity: 5; Rating: 7.50
    // - Arnoldii; Rarity: 4; Rating: 0.00
    // - Welwitschia; Rarity: 2; Rating: 7.00

}