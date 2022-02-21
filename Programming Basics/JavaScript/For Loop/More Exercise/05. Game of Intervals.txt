function solve(input) {

    let index = 1;
    let moves = Number(input[0]);

    let result = 0;
    let numFrom0To9 = 0;
    let numFrom10To19 = 0;
    let numFrom20To29 = 0;
    let numFrom30To39 = 0;
    let numFrom40To50 = 0;
    let invalidNums = 0;

    let numFrom0To9Percent = 0;
    let numFrom10To19Percent = 0;
    let numFrom20To29Percent = 0;
    let numFrom30To39Percent = 0;
    let numFrom40To50Percent = 0;
    let invalidNumsPercent = 0;

    for (let i = 1; i <= moves; i++) {

        let currentNum = Number(input[i]);


        if (currentNum < 0 || currentNum > 50) {

            result = result / 2;
            invalidNums++;

        }

        if (currentNum >= 0 && currentNum <= 9) {

            result += currentNum * 0.2;
            numFrom0To9++;

        } else if (currentNum >= 10 && currentNum <= 19) {

            result += currentNum * 0.3;
            numFrom10To19++;

        } else if (currentNum >= 20 && currentNum <= 29) {

            result += currentNum * 0.4;
            numFrom20To29++;

        } else if (currentNum >= 30 && currentNum <= 39) {

            result += 50;
            numFrom30To39++;

        } else if (currentNum >= 40 && currentNum <= 50) {

            result += 100;
            numFrom40To50++;

        }

    }

    numFrom0To9Percent = (numFrom0To9 / moves) * 100;
    numFrom10To19Percent = (numFrom10To19 / moves) * 100;
    numFrom20To29Percent = (numFrom20To29 / moves) * 100;
    numFrom30To39Percent = (numFrom30To39 / moves) * 100;
    numFrom40To50Percent = (numFrom40To50 / moves) * 100;
    invalidNumsPercent = (invalidNums / moves) * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${numFrom0To9Percent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${numFrom10To19Percent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${numFrom20To29Percent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${numFrom30To39Percent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${numFrom40To50Percent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumsPercent.toFixed(2)}%`);


}