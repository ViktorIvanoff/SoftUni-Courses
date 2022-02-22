function solve(input) {

    let index = 0;
    let command = input[index++];


    while (command !== "End") {

        let budget = Number(input[index++]);

        let savedSum = 0;

        for (let i = index; i < budget; i++) {

            let currentSum = Number(input[index++]);

            savedSum += currentSum;

            if (savedSum >= budget) {

                console.log(`Going to ${command}!`);

                break;

            } else {


            }
        }

        command = input[index++];
    }

}