function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);

    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;

            if (fishers <= 6) {
                price -= price * 0.10;

            } else if (fishers >= 7 && fishers <= 11) {
                price -= price * 0.15;

            } else if (fishers > 12) {
                price -= price * 0.25;
            }

            if (fishers % 2 === 0 && season !== "Autumn") {
                price -= price * 0.05;
            }
            break;

        case "Summer":
            price = 4200;

            if (fishers <= 6) {
                price -= price * 0.10;

            } else if (fishers >= 7 && fishers <= 11) {

                price -= price * 0.15;
            } else if (fishers > 12) {
                price -= price * 0.25;
            }

            if (fishers % 2 === 0 && season !== "Autumn") {
                price -= price * 0.05;
            }

            break;

        case "Autumn":
            price = 4200;

            if (fishers <= 6) {
                price -= price * 0.10;

            } else if (fishers >= 7 && fishers <= 11) {
                price -= price * 0.15;

            } else if (fishers > 12) {
                price -= price * 0.25;
            }

            break;

        case "Winter":
            price = 2600;

            if (fishers <= 6) {
                price -= price * 0.10;

            } else if (fishers >= 7 && fishers <= 11) {
                price -= price * 0.15;

            } else if (fishers > 12) {
                price -= price * 0.25;
            }

            if (fishers % 2 === 0 && season !== "Autumn") {
                price -= price * 0.05;
            }


            break;
    }

    let money = Math.abs(budget - price).toFixed(2);

    if (budget >= price) {
        console.log(`Yes! You have ${money} leva left.`);
    } else if (budget < price) {
        console.log(`Not enough money! You need ${money} leva.`);
    }

}