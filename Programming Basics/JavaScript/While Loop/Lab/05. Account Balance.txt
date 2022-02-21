function solve(input) {

    let index = 0;
    let sum = 0;
    let currentMoney = Number(input[index]);

    while (input[index] !== "NoMoreMoney") {

        currentMoney = Number(input[index]);

        if (currentMoney > 0) {

            sum += Number(input[index]);

            console.log(`Increase: ${currentMoney.toFixed(2)}`);

        } else {

            console.log("Invalid operation!");

            break;
        }

        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}