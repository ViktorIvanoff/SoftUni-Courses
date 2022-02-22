function solve(input) {

    let index = 1;
    let target = Number(input[0]);

    let cashMoney = 0;
    let cardMoney = 0;
    let sum = 0;

    let action = 0;
    let cashPaymentCounter = 0;
    let cardPaymentCounter = 0;

    let current = input[index];

    while (index < input.length) {

        if (current === "End") {

            console.log("Failed to collect required money for charity.");

            break;

        }

        action += 1;

        current = Number(input[index]);


        if (action % 2 !== 0) {

            if (current > 100) {

                console.log("Error in transaction!");

            } else {

                console.log("Product sold!");

                cashMoney += current;

                sum += current;

                cashPaymentCounter++;

            }

        }

        else {

            if (current < 10) {

                console.log("Error in transaction!");

            } else {

                console.log("Product sold!");

                cardMoney += current;

                sum += current;

                cardPaymentCounter++;

            }

        }


        if (sum >= target) {

            console.log(`Average CS: ${(cashMoney / cashPaymentCounter).toFixed(2)}`);
            console.log(`Average CC: ${(cardMoney / cardPaymentCounter).toFixed(2)}`);

            break;

        }

        index++;

        current = input[index];

    }

}