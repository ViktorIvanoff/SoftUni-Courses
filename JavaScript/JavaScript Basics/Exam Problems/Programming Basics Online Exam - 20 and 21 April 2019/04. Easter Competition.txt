function solve(input) {

    let index = 0;
    let kozunaci = Number(input[index++]);
    let result = 0;
    let winner = " ";
    let max = Number.MIN_SAFE_INTEGER;


    for (let i = 1; i <= kozunaci; i++) {

        let name = input[index++];

        let command = input[index++];

        while (command !== "Stop") {

            let currentGrade = Number(command);

            result += currentGrade;

            command = input[index++];

        }

        console.log(`${name} has ${result} points.`);

        if (result > max) {

            max = result;

            winner = name;

            console.log(`${name} is the new number 1!`);

        }

        result = 0;

    }

    console.log(`${winner} won competition with ${max} points!`);


}