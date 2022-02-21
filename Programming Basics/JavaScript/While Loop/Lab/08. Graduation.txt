function solve(input) {

    let index = 1;
    let name = input[0];
    let repeat = 0;

    let gradeCounter = 1;
    let totalGrades = 0;

    while (index < input.length) {

        input[index] = Number(input[index]);

        totalGrades += Number(input[index]);


        if (input[index] >= 4.00 && gradeCounter < 12) {

            gradeCounter++;


        } else if (input[index] < 4) {

            repeat += 1;

            if (repeat == 2) {

                break;

            }
        }

        index++;

    }

    if (repeat < 2) {

        console.log(`${name} graduated. Average grade: ${(totalGrades / gradeCounter).toFixed(2)}`);

    } else {

        console.log(`${name} has been excluded at ${gradeCounter} grade`);
    }

}