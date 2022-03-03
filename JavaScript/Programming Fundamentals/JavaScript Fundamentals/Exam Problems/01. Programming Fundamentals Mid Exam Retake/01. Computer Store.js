function solve(input) {
    // ['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
    let price = input.shift().split(" ");
    let priceWithoutTax = 0;
    let taxes = 0;
    let finalPrice = 0;

    while (price !== "special") {

        if (price == "special" || price == "regular") {

            break;
        } else {
            price = Number(price);
        }

        if (price < 0) {
            console.log("Invalid price!");
            price = input.shift();
            continue;
        }

        priceWithoutTax += price;
        taxes += price * 0.2;
        finalPrice = priceWithoutTax + taxes;

        price = input.shift();
    }

    if (price === "special") {
        finalPrice -= finalPrice * 0.1;

    }

    if (finalPrice > 0) {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);

    } else {
        console.log("Invalid order!");
    }
}