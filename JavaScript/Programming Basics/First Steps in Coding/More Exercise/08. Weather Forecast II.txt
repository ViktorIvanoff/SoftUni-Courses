function solve(input) {

    let grades = Number(input[0]);

    if (grades >= 26.00 && grades <= 35.00) {
        console.log("Hot");

    } else if (grades >= 20.1 && grades <= 25.9) {
        console.log("Warm");

    } else if (grades >= 15.00 && grades <= 20.00) {
        console.log("Mild");

    } else if (grades >= 12.00 & grades <= 14.9) {
        console.log("Cool");

    } else if (grades >= 5.00 && grades <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }


}