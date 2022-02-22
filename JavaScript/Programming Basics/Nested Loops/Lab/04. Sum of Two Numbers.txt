function solve(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let currentSum = 0;
    let isFound = false;


    for (let i = start; i <= end; i++) {


        for (let j = start; j <= end; j++) {


            currentSum = i + j;

            combinations++;


            if (currentSum === magicNumber) {

                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);

                isFound = true;

                break;

            }

        }


        if (isFound) {

            break;

        }

    }

    if (currentSum !== magicNumber) {

        console.log(`${combinations} combinations - neither equals ${magicNumber}`);

    }

}
