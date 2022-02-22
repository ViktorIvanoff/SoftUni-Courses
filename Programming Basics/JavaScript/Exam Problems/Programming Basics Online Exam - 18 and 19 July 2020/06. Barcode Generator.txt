function solve(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    let output = "";

    let startAsStr = start.toString();
    let endAsStr = end.toString();

    let firstDigitStart = Number(startAsStr[0]);
    let secondDigitStart = Number(startAsStr[1]);
    let thirdDigitStart = Number(startAsStr[2]);
    let fourthDigitStart = Number(startAsStr[3]);

    let firstDigitEnd = Number(endAsStr[0]);
    let secondDigitEnd = Number(endAsStr[1]);
    let thirdDigitEnd = Number(endAsStr[2]);
    let fourthDigitEnd = Number(endAsStr[3]);

    for (let i = firstDigitStart; i <= firstDigitEnd; i++) {


        for (let j = secondDigitStart; j <= secondDigitEnd; j++) {


            for (let k = thirdDigitStart; k <= thirdDigitEnd; k++) {


                for (let l = fourthDigitStart; l <= fourthDigitEnd; l++) {

                    if (i % 2 !== 0) {

                        if (j % 2 !== 0) {

                            if (k % 2 !== 0) {

                                if (l % 2 !== 0) {

                                    output += `${i}${j}${k}${l} `;

                                }
                            }
                        }
                    }


                }
            }
        }

    }

    console.log(output);

}