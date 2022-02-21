function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let classType = 0;
    let carType = 0;
    let carPrice = 0;

    if (budget <= 100) {

        classType = "Economy class";

        switch (season) {

            case "Summer":

                carType = "Cabrio";

                carPrice = budget * 0.35;

                break;

            case "Winter":

                carType = "Jeep";

                carPrice = budget * 0.65;

                break;
        }


    } else if (budget > 100 && budget < 500) {

        classType = "Compact class";

        switch (season) {

            case "Summer":

                carType = "Cabrio";

                carPrice = budget * 0.45;

                break;

            case "Winter":

                carType = "Jeep";

                carPrice = budget * 0.80;

                break;
        }

    } else if (budget > 500) {

        classType = "Luxury class";

        switch (season) {

            case "Summer":
            case "Winter":

                carType = "Jeep";

                carPrice = budget * 0.90;

                break;

        }

    }
    console.log(`${classType}`);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);

}
