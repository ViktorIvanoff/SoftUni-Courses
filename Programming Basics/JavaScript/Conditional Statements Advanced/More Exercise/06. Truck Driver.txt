function solve(input) {

    let season = input[0];
    let kilometers = Number(input[1]);

    let salaryWithTax = 0;
    let salaryWithoutTax = 0;
    let seasonLength = 4;
    let money = 0;
    let totalMoney = 0;


    if (kilometers <= 5000) {

        switch (season) {

            case "Spring":
            case "Autumn":

                money = 0.75;
                salaryWithTax = kilometers * money;
                totalMoney = salaryWithTax * seasonLength;
                salaryWithoutTax = totalMoney - (totalMoney * 0.10);

                break;

            case "Summer":
                money = 0.90;
                salaryWithTax = kilometers * money;
                totalMoney = salaryWithTax * seasonLength;
                salaryWithoutTax = totalMoney - (totalMoney * 0.10);


                break;

            case "Winter":

                money = 1.05;
                salaryWithTax = kilometers * money;
                totalMoney = salaryWithTax * seasonLength;
                salaryWithoutTax = totalMoney - (totalMoney * 0.10);

                break;

        }

    } else if (kilometers > 5000 && kilometers <= 10000) {

        switch (season) {

            case "Spring":
            case "Autumn":
                money = 0.95;
                salaryWithTax = kilometers * money;
                totalMoney = salaryWithTax * seasonLength;
                salaryWithoutTax = totalMoney - (totalMoney * 0.10);

                break;

            case "Summer":

                money = 1.10
                salaryWithTax = kilometers * money;
                totalMoney = salaryWithTax * seasonLength;
                salaryWithoutTax = totalMoney - (totalMoney * 0.10);

                break;

            case "Winter":

                money = 1.25
                salaryWithTax = kilometers * money;
                totalMoney = salaryWithTax * seasonLength;
                salaryWithoutTax = totalMoney - (totalMoney * 0.10);

                break;

        }

    } else if (kilometers > 10000 && kilometers <= 20000) {

        switch (season) {

            case "Spring":
            case "Autumn":
            case "Summer":
            case "Winter":

                money = 1.45;
                salaryWithTax = kilometers * money;
                totalMoney = salaryWithTax * seasonLength;
                salaryWithoutTax = totalMoney - (totalMoney * 0.10);

                break;

        }

    }

    console.log(salaryWithoutTax.toFixed(2));
}