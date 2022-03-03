function solve(text) {
    let result = [];
    let totalCalories = 0;

    let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;
    // (#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1

    let match = pattern.exec(text);

    while (match !== null) {

        let item = match[2];
        let expiryDate = match[3];
        let calories = Number(match[4]);

        totalCalories += calories;

        result.push(`Item: ${item}, Best before: ${expiryDate}, Nutrition: ${calories}`);

        match = pattern.exec(text);
    }

    let days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    for (let item of result) {

        console.log(item);
    }
    // You have food to last you for: 2 days!
    // Item: Bread, Best before: 19/03/21, Nutrition: 4000
    // Item: Apples, Best before: 08/10/20, Nutrition: 200
    // Item: Carrots, Best before: 06/08/20, Nutrition: 500
}