function solve(input) {

    let eggs = Number(input[0]);

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let max = 0;
    let maxColour = " ";


    for (let i = 1; i <= eggs; i++) {

        let currentColour = input[i];


        if (currentColour === "orange") {

            orange++;

        } else if (currentColour === "blue") {

            blue++;

        } else if (currentColour === "red") {

            red++;

        } else if (currentColour === "green") {

            green++;

        }

    }

    max = orange;
    maxColour = "orange";

    if (red > max) {

        max = red;

        maxColour = "red";

    }

    if (green > max) {

        max = green;

        maxColour = "green";

    }

    if (blue > max) {

        max = blue;

        maxColour = "blue";

    }


    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${max} -> ${maxColour}`);

}