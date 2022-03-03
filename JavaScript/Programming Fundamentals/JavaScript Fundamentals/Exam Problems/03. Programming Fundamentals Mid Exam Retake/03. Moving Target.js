function solve(input) {
    // '52 74 23 44 96 110',
    // 'Shoot 5 10',
    // 'Shoot 1 80',
    // 'Strike 2 1',
    // 'Add 22 3',
    // 'End'

    let targets = input.shift().split(" ").map(Number);

    for (let inputLine of input) {

        if (inputLine === "End") {
            break;
        }

        let [command, index, value] = inputLine.split(" ");

        index = Number(index);
        value = Number(value);

        if (command === "Shoot") {

            if (targets.includes(targets[index])) {

                if (index >= 0 && index < targets.length) {

                    targets[index] -= value;

                }

                if (targets[index] <= 0) {

                    targets.splice(index, 1);

                }
            }

        } else if (command === "Add") {

            if (index >= 0 && index < targets.length) {

                targets.splice(index, 0, value);

            } else {
                console.log("Invalid placement!");
            }

        } else if (command === "Strike") {

            let radiusRange = 1 + (value * 2);
            let radiusStart = index - value;
            let radiusEnd = index + value;

            if (radiusStart >= 0 && radiusEnd < targets.length) {

                targets.splice(radiusStart, radiusRange);
            }

            else {

                console.log("Strike missed!");

            }
        }
    }

    console.log(`${targets.join("|")}`);
}