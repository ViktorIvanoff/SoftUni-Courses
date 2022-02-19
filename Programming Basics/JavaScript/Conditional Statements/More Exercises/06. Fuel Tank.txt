function solve(input) {

    let fuelType = input[0];
    let litres = Number(input[1]);

    if (fuelType !== "Diesel" && fuelType !== "Gasoline" && fuelType !== "Gas") {
        console.log("Invalid fuel!");
    }

    if (litres >= 25) {
        switch (fuelType) {
            case "Diesel":
                console.log(`You have enough diesel.`);
                break;
            case "Gasoline":
                console.log(`You have enough gasoline.`);
                break;
            case "Gas":
                console.log(`You have enough gas.`);
                break;
        }

    } else if (litres < 25) {
        switch (fuelType) {
            case "Diesel":
                console.log(`Fill your tank with diesel!`);
                break;
            case "Gasoline":
                console.log(`Fill your tank with gasoline!`);
                break;
            case "Gas":
                console.log(`Fill your tank with gas!`);
                break;
        }
    }
}