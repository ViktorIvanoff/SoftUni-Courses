function solve(input) {

    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trackType = input[2];

    let taxJuniors = 0;
    let taxSeniors = 0;
    let totalTax = 0;
    let razhodi = 0;
    let finalSum = 0;

    switch (trackType) {
        case "trail":
            taxJuniors = 5.50;
            taxSeniors = 7;
            totalTax = (taxJuniors * juniors) + (taxSeniors * seniors);

            razhodi = totalTax * 0.05;
            finalSum = (totalTax - razhodi).toFixed(2);

            break;

        case "cross-country":
            taxJuniors = 8;
            taxSeniors = 9.50;
            totalTax = (taxJuniors * juniors) + (taxSeniors * seniors);

            if ((juniors + seniors) >= 50) {
                totalTax -= totalTax * 0.25;
            }

            razhodi = totalTax * 0.05;
            finalSum = (totalTax - razhodi).toFixed(2);

            break;

        case "downhill":

            taxJuniors = 12.25;
            taxSeniors = 13.75;
            totalTax = (taxJuniors * juniors) + (taxSeniors * seniors);

            razhodi = totalTax * 0.05;
            finalSum = (totalTax - razhodi).toFixed(2);

            break;

        case "road":

            taxJuniors = 20;
            taxSeniors = 21.5;
            totalTax = (taxJuniors * juniors) + (taxSeniors * seniors);

            razhodi = totalTax * 0.05;
            finalSum = (totalTax - razhodi).toFixed(2);

            break;

    }

    console.log(finalSum);

}
