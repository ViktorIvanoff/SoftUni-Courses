function solve(num) {
    let sum = 0;
    let isSame = true;
    let numAsStr = num.toString();

    let firstChar = numAsStr[0];

    for (let i = 0; i < numAsStr.length; i++) {
        let currentChar = Number(numAsStr[i]);

        sum += currentChar;

        if (firstChar != currentChar) {
            isSame = false;
        } else {
            isSame = true;
        }
    }

    console.log(isSame);
    console.log(sum);
}
