function solve(baggageOver20Price, baggageWeight, daysLeft, countOfBags) {

    baggageOver20Price = Number(baggageOver20Price);
    baggageWeight = Number(baggageWeight);
    daysLeft = Number(daysLeft);
    countOfBags = Number(countOfBags);

    let tax = 0;

    let totalPrice = 0;

    if (baggageWeight < 10) {

        tax = baggageOver20Price * 0.20;

    } else if (baggageWeight >= 10 && baggageWeight <= 20) {

        tax = baggageOver20Price / 2;

    } else if (baggageWeight > 20) {

        tax = baggageOver20Price;

    }


    if (daysLeft < 7) {

        totalPrice = tax + (tax * 0.40);

    } else if (daysLeft >= 7 && daysLeft <= 30) {

        totalPrice = tax + (tax * 0.15);

    } else if (daysLeft > 30) {

        totalPrice = tax + (tax * 0.10);

    }

    let toPay = totalPrice * countOfBags;

    console.log(`The total price of bags is: ${toPay.toFixed(2)} lv.`);

}