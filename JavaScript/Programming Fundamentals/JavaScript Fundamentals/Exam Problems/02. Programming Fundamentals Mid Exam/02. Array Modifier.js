function solve(input) {
    // '23 -2 321 87 42 90 -123',
    // 'swap 1 3',
    // 'swap 3 6',
    // 'swap 1 0',
    // 'multiply 1 2',
    // 'multiply 2 1',
    // 'decrease',
    // 'end'

    let elements = input.shift().split(" ").map(Number);

    for (let inputLine of input) {

        if (inputLine === "end") {
            break;
        }

        let [command, firstIndex, secondIndex] = inputLine.split(" ");

        switch (command) {

            case "swap":

                firstIndex = Number(firstIndex);
                secondIndex = Number(secondIndex);

                let temp = elements[firstIndex];
                elements[firstIndex] = elements[secondIndex];
                elements[secondIndex] = temp;

                break;

            case "multiply":
                firstIndex = Number(firstIndex);
                secondIndex = Number(secondIndex);

                elements[firstIndex] *= elements[secondIndex];

                break;

            case "decrease":

                elements = elements.map((el) => el - 1);

                break;
        }
    }

    console.log(`${elements.join(", ")}`);
}