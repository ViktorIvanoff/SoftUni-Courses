function solve(fruit, weightInGrams, pricePerKg) {

    let weightInKgs = weightInGrams / 1000;
    let money = weightInKgs * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKgs.toFixed(2)} kilograms ${fruit}.`);

    // I need $4 .50 to buy 2.50 kilograms orange.
}
