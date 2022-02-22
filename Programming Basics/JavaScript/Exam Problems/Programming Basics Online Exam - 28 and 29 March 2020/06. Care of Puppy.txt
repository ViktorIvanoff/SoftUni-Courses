function solve(input) {

    let index = 1;
    let foodKgs = Number(input[0]);
    let foodEatenGrms = Number(input[index]);
    let foodGrms = foodKgs * 1000;
    let total = 0;

    while (input[index] !== "Adopted") {

        if (input[index] === "Adopted") {

            break;

        }

        foodEatenGrms = Number(input[index]);

        total += Number(input[index]);

        index++;

    }

    if (total <= foodGrms) {

        console.log(`Food is enough! Leftovers: ${foodGrms - total} grams.`);

    } else if (total > foodGrms) {

        console.log(`Food is not enough. You need ${total - foodGrms} grams more.`);

    }

}
