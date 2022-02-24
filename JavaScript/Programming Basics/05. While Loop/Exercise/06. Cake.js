function solve(input) {

    let index = 2;
    let w = Number(input[0]);
    let h = Number(input[1]);
    let cake = w * h;

    let eatedPieces = 0;

    while (input[index] !== "STOP") {

        eatedPieces += Number(input[index]);


        if (eatedPieces >= cake) {

            console.log(`No more cake left! You need ${eatedPieces - cake} pieces more.`);

            break;

        }

        index++;

    }


    if (input[index] === "STOP") {

        console.log(`${cake - eatedPieces} pieces are left.`);

    }

}
