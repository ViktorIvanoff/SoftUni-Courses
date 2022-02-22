function solve(input) {

    let index = 1;
    let capacity = Number(input[0]);
    let baggage = Number(input[index]);
    let suitcaseCounter = 0;

    while (input[index] !== "End") {

        baggage = Number(input[index]);

        if (index % 3 === 0) {

            baggage += baggage * 0.10;
        }

        if (capacity - baggage < 0) {

            break;

        }

        capacity -= baggage;
        suitcaseCounter++;

        index++;

    }

    if (input[index] === "End") {

        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);

    } else {

        console.log("No more space!");
        console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);

    }
}
