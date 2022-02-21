function solve(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;
    let pricePeriodStudio = 0;
    let pricePeriodApartment = 0;

    switch (month) {

        case "May":
        case "October":

            pricePeriodStudio = nights * 50;
            pricePeriodApartment = nights * 65;

            if (nights > 7 && nights < 14) {

                pricePeriodStudio -= pricePeriodStudio * 0.05;

            } else if (nights > 14) {

                pricePeriodStudio -= pricePeriodStudio * 0.30;
                pricePeriodApartment -= pricePeriodApartment * 0.10;

            }

            break;

        case "June":
        case "September":

            pricePeriodStudio = nights * 75.20;
            pricePeriodApartment = nights * 68.70;

            if (nights > 14) {

                pricePeriodStudio -= pricePeriodStudio * 0.20;
                pricePeriodApartment -= pricePeriodApartment * 0.10;

            }

            break;

        case "July":
        case "August":

            pricePeriodStudio = nights * 76;
            pricePeriodApartment = nights * 77;

            if (nights > 14) {

                pricePeriodApartment -= pricePeriodApartment * 0.10;

            }
    }
    console.log(`Apartment: ${pricePeriodApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${pricePeriodStudio.toFixed(2)} lv.`);


}