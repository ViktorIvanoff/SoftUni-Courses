function solve(input) {

    let fruitType = input[0];
    let setSize = input[1];
    let orderedSets = Number(input[2]);

    let price = 0;

    switch (fruitType) {

        case "Watermelon":

            if (setSize === "small") {

                price = (2 * 56) * orderedSets;

            } else if (setSize === "big") {

                price = (5 * 28.70) * orderedSets;

            }

            if (price >= 400 && price <= 1000) {

                price -= price * 0.15;

            } else if (price > 1000) {

                price -= price / 2;

            }

            break;

        case "Mango":

            if (setSize === "small") {

                price = (2 * 36.66) * orderedSets;

            } else if (setSize === "big") {

                price = (5 * 19.60) * orderedSets;
            }

            if (price >= 400 && price <= 1000) {

                price -= price * 0.15;

            } else if (price > 1000) {

                price -= price / 2;

            }

            break;

        case "Pineapple":

            if (setSize === "small") {

                price = (2 * 42.10) * orderedSets;

            } else if (setSize === "big") {

                price = (5 * 24.80) * orderedSets;

            }

            if (price >= 400 && price <= 1000) {

                price -= price * 0.15;

            } else if (price > 1000) {

                price -= price / 2;

            }

            break;

        case "Raspberry":

            if (setSize === "small") {

                price = (2 * 20) * orderedSets;

            } else if (setSize === "big") {

                price = (5 * 15.20) * orderedSets;

            }

            if (price >= 400 && price <= 1000) {

                price -= price * 0.15;

            } else if (price > 1000) {

                price -= price / 2;

            }

            break;

    }

    console.log(`${price.toFixed(2)} lv.`);

}