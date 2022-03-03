function solve(input) {
    // '12>13>11>20>66', - pirate ship
    // '12>22>33>44>55>32>18', - warship
    // '70',

    // 'Fire 2 11',
    // 'Fire 8 100',
    // 'Defend 3 6 11',
    // 'Defend 0 3 5',
    // 'Repair 1 33',
    // 'Status',
    // 'Retire'
    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number)
    let maxHealth = Number(input.shift());
    let pirateShipSum = 0;
    let warshipSum = 0;
    let isDead = false;

    for (let line of input) {

        if (line === "Retire") {
            break;
        }

        let [command, firstArg, secondArg, thirdArg] = line.split(" ");

        if (command === "Fire") {

            firstArg = Number(firstArg);
            secondArg = Number(secondArg);

            if (firstArg >= 0 && firstArg < warShip.length) {
                warShip[firstArg] -= secondArg;
            }

            if (warShip[firstArg] <= 0) {
                isDead = true;
                console.log("You won! The enemy ship has sunken.");
                return;
            }

        } else if (command === "Defend") {

            firstArg = Number(firstArg);
            secondArg = Number(secondArg);
            thirdArg = Number(thirdArg);

            if ((firstArg >= 0 && firstArg < pirateShip.length) && (secondArg >= 0 && secondArg < pirateShip.length)) {

                for (let i = firstArg; i <= secondArg; i++) {

                    pirateShip[i] -= thirdArg;

                    if (pirateShip[i] <= 0) {
                        isDead = true;
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }

        } else if (command === "Repair") {

            firstArg = Number(firstArg);
            secondArg = Number(secondArg);

            if (firstArg >= 0 && firstArg < pirateShip.length) {

                pirateShip[firstArg] += secondArg;

                if (pirateShip[firstArg] > maxHealth) {
                    pirateShip[firstArg] = maxHealth;
                }
            }

        } else if (command === "Status") {
            let forRepair = 0;

            for (let i = 0; i < pirateShip.length; i++) {

                if (pirateShip[i] < (maxHealth * 0.20)) {
                    forRepair++;
                }
            }
            console.log(`${forRepair} sections need repair.`);
        }
    }

    if (!isDead) {

        pirateShipSum = pirateShip.reduce((sum, a) => sum += a);
        warshipSum = warShip.reduce((sum, a) => sum += a);

        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }

}
