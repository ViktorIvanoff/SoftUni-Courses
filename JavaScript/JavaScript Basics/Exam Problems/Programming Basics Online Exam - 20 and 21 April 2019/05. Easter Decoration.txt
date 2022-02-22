function solve(input) {

    let index = 0;
    let customers = Number(input[index++]);

    let totalSum = 0;
    let price = 0;
    let sum = 0;
    let basketPrice = 1.50;
    let wreathPrice = 3.80;
    let chocolateBunnyPrice = 7;

    for (let i = 1; i <= customers; i++) {

        let basket = 0;
        let chocolateBunny = 0;
        let wreath = 0;
        let totalItems = 0;

        let item = input[index++];

        while (item !== "Finish") {

            if (item === "basket") {

                sum += 1.50;

                basket++;

            } else if (item === "wreath") {

                sum += 3.80;

                wreath++;

            } else if (item === "chocolate bunny") {

                sum += 7;

                chocolateBunny++;

            }

            item = input[index++];
        }

        totalItems = basket + wreath + chocolateBunny;

        price = basket * basketPrice + wreath * wreathPrice + chocolateBunny * chocolateBunnyPrice;

        if (totalItems % 2 === 0) {

            price -= price * 0.20;

        }

        console.log(`You purchased ${totalItems} items for ${price.toFixed(2)} leva.`);

        totalSum += price;
    }


    console.log(`Average bill per client is: ${(totalSum / customers).toFixed(2)} leva.`);
}