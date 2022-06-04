function solve(firstNum, secondNum, str) {
    let result = '';

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    if (str === '+') {
        result += firstNum + secondNum;
    } else if (str === '-') {
        result += firstNum - secondNum;
    } else if (str === '*') {
        result += firstNum * secondNum;
    } else if (str === '/') {
        result += firstNum / secondNum;
    } else if (str === '%') {
        result += firstNum % secondNum;
    } else if (str === '**') {
        result += firstNum ** secondNum;
    }

    console.log(result);

}
solve(5, 6, '+');

solve(3, 5.5, '*');