function solve(input) {
    // 100, 10, 10, 10, 1, 2, 3, 73, 10

    let wonBattles = 0;
    let energy = input.shift();
    let command = input.shift();

    while (energy >= 0) {

        if (command === "End of battle") {
            break;

        } else {

            command = Number(command);
        }


        if (energy >= command) {

            energy -= command;
            wonBattles++;

        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            return;
        }

        if (wonBattles % 3 === 0) {
            energy += wonBattles;
        }

        command = input.shift();
    }

    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);

}