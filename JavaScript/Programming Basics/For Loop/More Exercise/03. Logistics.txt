function solve(input) {

    let cargoCount = Number(input[0]);
    let index = 1;
    let microbusPrice = 200;
    let truckPrice = 175;
    let trainPrice = 120;

    let totalTonage = 0;
    let averageTonPrice = 0;

    let microbusTonage = 0;
    let truckTonage = 0;
    let trainTonage = 0;

    let microbusPercent = 0;
    let truckPercent = 0;
    let trainPercent = 0;

    for (let i = 1; i <= cargoCount; i++) {

        totalTonage += Number(input[i]);

        let currentTonage = Number(input[i]);

        if (currentTonage <= 3) {

            microbusTonage += currentTonage;

        } else if (currentTonage >= 4 && currentTonage <= 11) {
            truckTonage += currentTonage;

        } else if (currentTonage >= 12) {

            trainTonage += currentTonage;
        }

        index++;

    }

    averageTonPrice = ((microbusTonage * microbusPrice) + (truckTonage * truckPrice) + (trainTonage * trainPrice)) / totalTonage;
    microbusPercent = (microbusTonage / totalTonage) * 100;
    truckPercent = (truckTonage / totalTonage) * 100;
    trainPercent = (trainTonage / totalTonage) * 100;

    console.log(averageTonPrice.toFixed(2));
    console.log(`${(microbusPercent).toFixed(2)}%`);
    console.log(`${(truckPercent).toFixed(2)}%`);
    console.log(`${(trainPercent).toFixed(2)}%`);
}
