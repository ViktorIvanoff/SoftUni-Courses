function solve(input) {

    let balls = Number(input[0]);
    let points = 0;

    let redBallScore = 0;
    let orangeBallScore = 0;
    let yellowBallScore = 0;
    let whiteBallScore = 0;
    let otherColorScore = 0;
    let pointsDividedByTwoCounter = 0;

    for (let i = 1; i <= balls; i++) {

        let currentColor = input[i];

        if (currentColor === "red") {

            redBallScore++;

            points += 5;

        } else if (currentColor === "orange") {

            orangeBallScore++;

            points += 10;

        } else if (currentColor === "yellow") {

            yellowBallScore++;

            points += 15;

        } else if (currentColor === "white") {

            whiteBallScore++;

            points += 20;

        } else if (currentColor === "black") {

            pointsDividedByTwoCounter++;

            points = points / 2;

        } else {

            otherColorScore++;

            points = points;

        }


    }

    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Points from red balls: ${redBallScore}`);
    console.log(`Points from orange balls: ${orangeBallScore}`);
    console.log(`Points from yellow balls: ${yellowBallScore}`);
    console.log(`Points from white balls: ${whiteBallScore}`);
    console.log(`Other colors picked: ${otherColorScore}`);
    console.log(`Divides from black balls: ${pointsDividedByTwoCounter}`);

}