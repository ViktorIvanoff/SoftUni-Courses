function solve(input) {

    let index = 0;

    let firstPlayerEggs = Number(input[index++]);
    let secondPlayerEggs = Number(input[index++]);
    let result = input[index++];


    while (result !== "End of battle") {


        if (result === "one") {

            secondPlayerEggs -= 1;


        } else if (result === "two") {

            firstPlayerEggs -= 1;

        }


        if (firstPlayerEggs <= 0) {

            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);

            break;

        } else if (secondPlayerEggs <= 0) {

            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);

            break;

        }

        result = input[index++];

    }

    if (result === "End of battle") {

        console.log(`Player one has ${firstPlayerEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);

    }
}