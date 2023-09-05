function solve(input) {

    let result = " ";
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);


    for (let i = startNum; i <= endNum; i++) {

        let oddSum = 0;
        let evenSum = 0;

        let numToStr = i.toString();

        for (let j = 0; j < numToStr.length; j++) {

            let digit = Number(numToStr[j]);


            if (j % 2 === 0) {

                evenSum += digit;

            } else if (j % 2 !== 0) {

                oddSum += digit;

            }

        }

        if (evenSum === oddSum) {

            result += i + " ";

        }

    }


    console.log(result);

}