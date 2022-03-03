function solve(input) {
    // "1 1 2 2 3 3 4 4 5 5", 
    // "1 0",
    // "-1 0",
    // "1 0", 
    // "1 0", 
    // "1 0", 
    // "end"

    let elements = input.shift().split(" ");
    let moves = 0;

    for (let i = 0; i < input.length; i++) {

        if (input[i] === "end" || elements.length === 0) {

            if (elements.length > 0) {

                console.log("Sorry you lose :(");
                console.log(`${elements.join(" ")}`);
            }
            break;
        }

        let [firstIndex, secondIndex] = input[i].split(" ");
        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        //     If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence you should add two matching elements in the following format "-{number of moves until now}a" at the middle of the sequence and print this message on the console:
        // "Invalid input! Adding additional elements to the board"

        if (firstIndex < 0 || firstIndex > elements.length - 1 || secondIndex < 0 || secondIndex > elements.length - 1) {

            elements.splice(elements.length / 2, 0, `-${moves + 1}a`, `-${moves + 1}a`);
            console.log("Invalid input! Adding additional elements to the board");
        }

        //         •	Every time the player hit two matching elements you should remove them from the sequence and print on the console the following message:
        // "Congrats! You have found matching elements - ${element}!"  input[INDEX] 

        else {

            if (elements[firstIndex] === elements[secondIndex]) {

                let element = elements[firstIndex];
                console.log(`Congrats! You have found matching elements - ${element}!`);
                elements.splice(firstIndex, 1);
                let indexOfSecondEl = elements.indexOf(element);
                elements.splice(indexOfSecondEl, 1);

            }

            else {
                console.log("Try again!");

            }
        }
        moves++;
    }

    if (elements.length === 0) {
        console.log(`You have won in ${moves} turns!`);
    }
}