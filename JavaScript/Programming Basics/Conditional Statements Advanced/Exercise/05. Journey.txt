function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let cost = 0;

    if (budget <= 100) {

        switch (season) {

            case "summer":
                cost = budget * 0.30;

                console.log("Somewhere in Bulgaria");
                console.log(`Camp - ${cost.toFixed(2)}`);

                break;

            case "winter":
                cost = budget * 0.70;

                console.log("Somewhere in Bulgaria");
                console.log(`Hotel - ${cost.toFixed(2)}`);

                break;
        }

    } else if (budget <= 1000) {

        switch (season) {

            case "summer":
                cost = budget * 0.40;

                console.log("Somewhere in Balkans");
                console.log(`Camp - ${cost.toFixed(2)}`);

                break;

            case "winter":
                cost = budget * 0.80;

                console.log("Somewhere in Balkans");
                console.log(`Hotel - ${cost.toFixed(2)}`);
                break;
        }

    } else if (budget > 1000) {

        switch (season) {

            case "summer":
            case "winter":

                cost = budget * 0.90;

                console.log("Somewhere in Europe");
                console.log(`Hotel - ${cost.toFixed(2)}`);

                break;

        }
    }


}