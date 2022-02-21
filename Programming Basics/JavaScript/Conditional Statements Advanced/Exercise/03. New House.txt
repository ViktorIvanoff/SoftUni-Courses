function solve(input) {

    let flowerType = input[0];
    let flowerCounter = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (flowerType) {

        case "Roses":
            price = flowerCounter * 5;

            if (flowerCounter > 80) {
                price = price * 0.9;
            }

            break;

        case "Dahlias":
            price = flowerCounter * 3.80;

            if (flowerCounter > 90) {
                price = price * 0.85;
            }
            break;

        case "Tulips":
            price = flowerCounter * 2.80;

            if (flowerCounter > 80) {
                price = price * 0.85;
            }
            break;

        case "Narcissus":
            price = flowerCounter * 3;

            if (flowerCounter < 120) {
                price = price * 1.15;
            }
            break;

        case "Gladiolus":
            price = flowerCounter * 2.50;

            if (flowerCounter < 80) {
                price = price * 1.20;
            }
            break;
    }

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerCounter} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`);

    } else if (budget < price) {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }


}