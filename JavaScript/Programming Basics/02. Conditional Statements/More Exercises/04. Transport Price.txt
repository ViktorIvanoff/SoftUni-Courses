function solve(input) {

    let distance = Number(input[0]);
    let timeOfDay = input[1];
    let taxiStart = 0.70;
    let taxiDayFare = 0.79;
    let taxiNightFare = 0.90;

    let busDayNightFare = 0.09;
    let trainDayNightFare = 0.06;
    let price = 0;

    if (distance >= 100) {
        price = distance * trainDayNightFare;

    } else if (distance >= 20 && distance < 100) {

        price = distance * busDayNightFare;
    }
    else if (distance < 20) {

        if (timeOfDay === "day") {

            price = taxiStart + (distance * taxiDayFare);

        } else if (timeOfDay === "night") {
            price = taxiStart + (distance * taxiNightFare);
        }
    }

    console.log(price.toFixed(2));

}