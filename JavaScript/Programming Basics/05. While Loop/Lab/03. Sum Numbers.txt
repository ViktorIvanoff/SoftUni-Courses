function solve(input) {

    let index = 1;
    let num = Number(input[0]);
    let sum = 0;

    while (sum < num) {

        let currentNum = Number(input[index]);

        sum += currentNum;

        index++;

    }

    console.log(sum);

}