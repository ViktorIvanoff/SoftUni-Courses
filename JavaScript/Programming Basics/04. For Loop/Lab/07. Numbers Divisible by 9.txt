function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let sum = 0;
    let numString = ' ';

    for (let i = num1; i <= num2; i++) {

        if (i % 9 === 0) {
            sum += i;

        }
    }
    console.log(`The sum: ${sum}`);

    for (let j = num1; j <= num2; j++) {

        if (j % 9 == 0) {
            console.log(j);
        }
    }

}