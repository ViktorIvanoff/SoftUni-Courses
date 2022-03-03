function solve(input) {

    // Nassau||95000||1000
    // San Juan||930000||1250
    // Campeche||270000||690
    // Port Royal||320000||1000
    // Port Royal||100000||2000

    // Sail

    // Prosper=>Port Royal=>200
    // Plunder=>Nassau=>94000=>750
    // Plunder=>Nassau=>1000=>150
    // Plunder=>Campeche=>150000=>690

    // End

    // output:

    // Gold added cannot be a negative number!
    // Nassau plundered! 750 gold stolen, 94000 citizens killed.
    // Nassau plundered! 150 gold stolen, 1000 citizens killed.
    // Nassau has been wiped off the map!
    // Campeche plundered! 690 gold stolen, 150000 citizens killed.
    // Campeche has been wiped off the map!
    // Ahoy, Captain! There are 2 wealthy settlements to go to:
    // Port Royal -> Population: 420000 citizens, Gold: 3000 kg
    // San Juan -> Population: 930000 citizens, Gold: 1250 kg
    let cities = {};

    while (input[0] !== "Sail") {

        // Nassau||95000||1000

        let [city, population, gold] = input.shift().split("||");

        if (cities[city] === undefined) {

            cities[city] = {

                population: Number(population),
                gold: Number(gold)

            }

        } else {
            cities[city].population += Number(population);
            cities[city].gold += Number(gold);
        }

    }

    input.shift();  // remove "Sail"

    let commands = input.shift().split("=>");

    while (commands[0] !== "End") {
        // Prosper=>Port Royal=>200

        if (commands[0] === "Plunder") {

            let city = commands[1];
            let populationKilled = Number(commands[2]);
            let goldStolen = Number(commands[3]);

            cities[city].population -= Number(populationKilled);
            cities[city].gold -= Number(goldStolen);

            console.log(`${city} plundered! ${goldStolen} gold stolen, ${populationKilled} citizens killed.`);

            if (cities[city].population === 0 || cities[city].gold === 0) {

                delete cities[city];
                console.log(`${city} has been wiped off the map!`);

            }

        } else if (commands[0] === "Prosper") {

            let city = commands[1];
            let goldAdded = Number(commands[2]);

            if (goldAdded > 0) {

                cities[city].gold += goldAdded;

                console.log(`${goldAdded} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);

            } else {
                console.log("Gold added cannot be a negative number!");
            }

        }

        commands = input.shift().split("=>");
    }


    if (Object.keys(cities).length > 0) {

        let sorted = Object.entries(cities)
            .sort((a, b) =>
                b[1].gold - a[1].gold ||
                a[0].localeCompare(b[0])
            );

        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);

        for (let [key, value] of sorted) {

            console.log(`${key} -> Population: ${value.population} citizens, Gold: ${value.gold} kg`);
        }

    } else {

        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");

    }

}