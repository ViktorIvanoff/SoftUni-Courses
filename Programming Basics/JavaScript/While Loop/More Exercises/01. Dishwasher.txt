function solve(input) {

    let index = 1;
    let bottles = Number(input[0]);
    let detergent = 750 * bottles;

    let charged = 0;
    let result = 0;

    let totalPlates = 0;
    let totalPots = 0;


    while (input[index] !== "End") {

        let currentDishCount = Number(input[index]);

        if (index % 3 === 0) {

            charged += currentDishCount * 15;

            totalPots += currentDishCount;

        } else {

            charged += currentDishCount * 5;

            totalPlates += currentDishCount;

        }

        result = detergent - charged;

        if (charged > detergent) {

            console.log(`Not enough detergent, ${Math.abs(result)} ml. more necessary!`);

            break;

        }

        index++;

    }

        if (input[index] === "End") {

        console.log("Detergent was enough!");
        console.log(`${totalPlates} dishes and ${totalPots} pots were washed.`);
        console.log(`Leftover detergent ${result} ml.`);

    }

}