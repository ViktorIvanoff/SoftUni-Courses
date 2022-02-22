function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let place = 0;
    let destination = 0;

    if (budget <= 1000) {
        place = "Camp";

        switch (season) {

            case "Summer":

                destination = "Alaska";
                price = budget * 0.65;

                break;

            case "Winter":

                destination = "Morocco";
                price = budget * 0.45;

                break
        }

    } else if (budget > 1000 && budget <= 3000) {

        place = "Hut";

        switch (season) {

            case "Summer":

                destination = "Alaska";
                price = budget * 0.80;

                break;

            case "Winter":

                destination = "Morocco";
                price = budget * 0.60;

                break;
        }

    } else if (budget > 3000) {

        place = "Hotel";

        switch (season) {

            case "Summer":

                destination = "Alaska";
                price = budget * 0.90;

                break;

            case "Winter":

                destination = "Morocco";
                price = budget * 0.90;

                break;

        }
    }
    console.log(`${destination} - ${place} - ${price.toFixed(2)}`);

    }