function solve(input) {
    // "15", "0 0 0 0 0" => first rotation => 4 0 0 0  && passengers -= 4
    // First state - 4 0 0 0 -> 11 people left
    // Second state – 4 4 0 0 -> 7 people left
    // Third state – 4 4 4 0 -> 3 people left

    let people = Number(input.shift());
    let cabin = input.shift().split(" ");

    for (let i = 0; i < cabin.length; i++) {

        if (Number(cabin[i]) < 4) {

            if (people >= 4 - cabin[i]) {

                people -= 4 - cabin[i];
                cabin[i] = 4;

            } else if (people < 4 - cabin[i]) {

                cabin[i] = Number(cabin[i]);
                cabin[i] += people;
                people = 0;

            }
        }
    }


    let isFull = true;

    for (let i = 0; i < cabin.length; i++) {

        if (cabin[i] < 4) {

            isFull = false;
            break;
        }
    }

    if (people === 0 && !isFull) {

        console.log("The lift has empty spots!");

    } else if (people > 0 && isFull) {

        console.log(`There isn't enough space! ${people} people in a queue!`);
    }

    console.log(`${cabin.join(" ")}`);
}