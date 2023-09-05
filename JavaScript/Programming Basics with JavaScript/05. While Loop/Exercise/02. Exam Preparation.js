function solve(input) {

    let index = 1;
    let maxPoorGrades = Number(input[0]);
    let unsatisfyingGrades = 0;

    let currentProblem = input[index];
    let averageGrade = 0;
    let problemsCount = 0;
    let lastProblem = undefined;
    let total = 0;

    while (input[index] !== "Enough") {

        let currentGrade = Number(input[++index]);

        total += Number(input[index]);

        problemsCount++;

        if (currentGrade <= 4) {

            unsatisfyingGrades++;

        }

        if (unsatisfyingGrades === maxPoorGrades) {

            console.log(`You need a break, ${unsatisfyingGrades} poor grades.`);

            break;

        }

        lastProblem = currentProblem;

        index++;

        currentProblem = input[index];
    }


    averageGrade = total / problemsCount;

    if (input[index] === "Enough") {

        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblem}`);

    }


}