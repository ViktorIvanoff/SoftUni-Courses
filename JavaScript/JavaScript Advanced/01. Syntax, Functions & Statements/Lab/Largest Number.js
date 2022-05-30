function solve(firstNum, secondNum, thirdNum) {

    let maxNum = 0;

    if (firstNum > secondNum && firstNum > thirdNum) {
        maxNum = firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        maxNum = secondNum;
    } else {
        maxNum = thirdNum;
    }

    console.log(`The largest number is ${maxNum}.`);
}
solve(5, -3, 16);

solve(-3, -5, -22.5);