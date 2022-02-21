function solve(input) {

    let index = 0;
    let steps = 0;
    let goal = 10000;


    while (steps < goal) {

        let inputLine = input[index++];

        if (inputLine === "Going home") {

            steps += Number(input[index++]);

            break;

        }

        steps += Number(inputLine);
   
    }

    if (steps >= goal) {

        console.log("Goal reached! Good job!");
        console.log(`${steps - goal} steps over the goal!`);

    } else {

        console.log(`${goal - steps} more steps to reach goal.`);

    }


}