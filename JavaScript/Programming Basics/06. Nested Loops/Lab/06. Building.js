function solve(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);


    for (let i = floors; i > 0; i--) {

        let result = " ";

        for (let j = 0; j < rooms; j++) {

            let letter;

            if (i === floors) {

                letter = "L";

            } else {

                if (i % 2 === 0) {

                    letter = "O";

                } else if (i % 2 !== 0) {

                    letter = "A";

                }

            }

            result += `${letter}${i}${j} `;

        }

        console.log(`${result}`);
    }

}