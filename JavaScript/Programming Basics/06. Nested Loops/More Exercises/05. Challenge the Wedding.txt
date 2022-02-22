function solve(input) {

    let male = Number(input[0]);
    let female = Number(input[1]);
    let maxTables = Number(input[2]);
    let counter = 0;
    let couples = " ";
    let isFound = false;

    for (let i = 1; i <= male; i++) {

        for (let j = 1; j <= female; j++) {

            counter++;

            couples += `(${i} <-> ${j}) `;

            if (counter === maxTables) {

                isFound = true;

                break;

            }
        }

        if (isFound) {

            break;

        }
    }

    console.log(couples);

}