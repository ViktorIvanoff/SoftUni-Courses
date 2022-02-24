function solve(input) {

    let n = Number(input[0]);

    let output = ' ';

    for (let currentNum = 1111; currentNum < 9999; currentNum++) {

        let currentNumAsText = currentNum.toString();

        let firstDigit = Number(currentNumAsText[0]);
        let secondDigit = Number(currentNumAsText[1]);
        let thirdDigit = Number(currentNumAsText[2]);
        let fourthDigit = Number(currentNumAsText[3]);

        let firstIsMagic = n % firstDigit === 0;
        let secondIsMagic = n % secondDigit === 0;
        let thirdIsMagic = n % thirdDigit === 0;
        let fourthIsMagic = n % fourthDigit === 0;

        if (firstIsMagic && secondIsMagic && thirdIsMagic && fourthIsMagic) {
            output += currentNum + ' ';
        }
    }
    console.log(output);

}