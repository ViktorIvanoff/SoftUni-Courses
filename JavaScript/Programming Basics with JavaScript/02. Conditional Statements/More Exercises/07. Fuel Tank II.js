function solve(input) {

    let fuelType = input[0];
    let fuelQuantity = Number(input[1]);
    let cardOrNoCard = input[2];

    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;

    let cost = 0;


    switch (fuelType) {
        case "Gas":
            if (cardOrNoCard === "Yes") {
                if (fuelQuantity > 25) {

                    gasPrice = gasPrice - 0.08;
                    cost = (gasPrice * fuelQuantity) - (gasPrice * fuelQuantity) * 0.1;
                }
            } else if (cardOrNoCard === "No") {
                if (fuelQuantity > 20 && fuelQuantity <= 25) {

                    gasPrice = gasPrice;
                    cost = (gasPrice * fuelQuantity) - (gasPrice * fuelQuantity) * 0.08;
                }
            }

            break;

        case "Gasoline":
            if (cardOrNoCard === "Yes") {
                if (fuelQuantity > 25) {

                    gasolinePrice = gasolinePrice - 0.18;
                    cost = (gasolinePrice * fuelQuantity) - (gasolinePrice * fuelQuantity) * 0.1;
                }

            } else if (cardOrNoCard === "No") {
                if (fuelQuantity > 20 && fuelQuantity <= 25) {

                    gasolinePrice = gasolinePrice;
                    cost = (gasolinePrice * fuelQuantity) - (gasolinePrice * fuelQuantity) * 0.08;

                }
            }

            break;

        case "Diesel":

            if (cardOrNoCard === "Yes") {
                if (fuelQuantity > 25) {

                    dieselPrice = dieselPrice - 0.12;
                    cost = (dieselPrice * fuelQuantity) - (dieselPrice * fuelQuantity) * 0.1;
                }

            } else if (cardOrNoCard === "No") {
                if (fuelQuantity < 20) {

                    dieselPrice = dieselPrice;
                    cost = dieselPrice * fuelQuantity;

                }
            }
            break;
    }

console.log(`${cost.toFixed(2)} lv.`);
}
