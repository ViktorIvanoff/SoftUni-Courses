function solve(input) {

    let armies = {};

    for (let line of input) {

        if (line.includes("arrives")) {
            // Rick Burr arrives'
            let [leader, arrives] = line.split(" arrives");

            if (!armies.hasOwnProperty(leader)) {

                armies[leader] = {};
            }

        } else if (line.includes(":")) {
            // Fergus: Wexamp, 30245'

            let [leader, armyArgs] = line.split(": ");
            let [armyName, armyCount] = armyArgs.split(", ");
            armyCount = Number(armyCount);

            if (armies.hasOwnProperty(leader)) {

                if (!armies[leader][armyName]) {

                    armies[leader][armyName] = 0;
                }

                armies[leader][armyName] += armyCount;
            }

        } else if (line.includes("+")) {
            // Juard + 1350

            let [armyName, armyCount] = line.split(" + ");
            armyCount = Number(armyCount);

            for (let leader in armies) {

                if (armies[leader].hasOwnProperty(armyName)) {
                    armies[leader][armyName] += armyCount;
                }
            }

        } else if (line.includes("defeated")) {
            // Rick Burr defeated'
            let [leader, defeated] = line.split(" defeated");

            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
            }
        }
    }

    // Porter: 58507
    // >>> Legion - 55302
    // >>> Retix - 3205
    // Findlay: 39040
    // >>> Britox - 39040

    // sort the leaders by total army count in descending. Then each army should be sorted by count in descending.

    // [
    //     
    // [ 'Findlay', { Britox: 39040 } ], = a 
    //     [ 'Porter', { Legion: 55302, Retix: 3205 } ] = b 
    //   ]
    let sortedLeaders = Object.entries(armies).sort(sortingArmies);

    for (let [leader, army] of sortedLeaders) {

        let sumOfArmies = (obj) =>
            Object.values(army).reduce((a, b) => a + b, 0);

        console.log(`${leader}: ${sumOfArmies(army)}`);

        let sortedArmies = Object.entries(army).sort((a, b) => b[1] - a[1]);

        for (let army of sortedArmies) {

            console.log(`>>> ${army[0]} - ${army[1]}`);

        }
    }

    function sortingArmies(a, b) {

        let [armyNameA, armyCountA] = a;
        let [armyNameB, armyCountB] = b;

        let sumOfCountOfArmiesA = (obj) =>
            Object.values(armyCountA).reduce((a, b) => a + b, 0);


        let sumOfCountOfArmiesB = (obj) =>
            Object.values(armyCountB).reduce((a, b) => a + b, 0);

        return sumOfCountOfArmiesB(armyCountB) - sumOfCountOfArmiesA(armyCountA);

    }
}