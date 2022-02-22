function solve(input) {

    let index = 0;
    let juryCount = Number(input[index++]);
    let counter = 0;
    let averageSum = 0;

    let presentations = input[index++];

    while (presentations !== "Finish") {

        let total = 0;

        for (let i = 0; i < juryCount; i++) {

            let currentGrade = Number(input[index++]);

            total += currentGrade;

        }

        let averageGrade = total / juryCount;

        console.log(`${presentations} - ${averageGrade.toFixed(2)}.`);

        counter++;

        averageSum += averageGrade;

        presentations = input[index++];


    }


    console.log(`Student's final assessment is ${(averageSum / counter).toFixed(2)}.`);


}