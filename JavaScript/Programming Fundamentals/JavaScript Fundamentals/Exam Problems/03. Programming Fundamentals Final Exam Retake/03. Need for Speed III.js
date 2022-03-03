function solve(input) {
    // ['3',

    // 'Audi A6|38000|62',   car | mileage | fuel 
    // 'Mercedes CLS|11000|35',
    // 'Volkswagen Passat CC|45678|5',

    // 'Drive : Audi A6 : 543 : 47',   // command, 
    // 'Drive : Mercedes CLS : 94 : 11',
    // 'Drive : Volkswagen Passat CC : 69 : 8',
    // 'Refuel : Audi A6 : 50',
    // 'Revert : Mercedes CLS : 500',
    // 'Revert : Audi A6 : 30000',

    // 'Stop'
    let cars = Number(input.shift());
    let garage = {};

    for (let i = 0; i < cars; i++) {

        let [model, mileage, fuel] = input.shift().split('|');
        // 'Audi A6|38000|62',   car | mileage | fuel 
        garage[model] = {

            mileage: Number(mileage),
            fuel: Number(fuel)
        }
    }
    // {
    //     'Audi A6': { mileage: '38000', fuel: '62' },
    //     'Mercedes CLS': { mileage: '11000', fuel: '35' },
    //     'Volkswagen Passat CC': { mileage: '45678', fuel: '5' }
    //   }

    for (let line of input) {

        if (line === 'Stop') {
            break;
        }
        // Drive : Audi A6 : 543 : 47',   // command, 
        let tokens = line.split(' : ');
        let command = tokens[0];

        if (command === 'Drive') {

            let model = tokens[1];
            let distance = Number(tokens[2]);
            let fuelToDrive = Number(tokens[3]);

            if (garage[model].fuel >= fuelToDrive) {
                // o	If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel and print: 
                // "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
                garage[model].mileage += distance;

                garage[model].fuel -= fuelToDrive;

                // Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
                console.log(`${model} driven for ${distance} kilometers. ${fuelToDrive} liters of fuel consumed.`);

                if (garage[model].mileage >= 100000) {
                    // o	You like driving new cars only, so if the mileage of a car reaches 100 000 km, remove it from the collection(s). Print:
                    console.log(`Time to sell the ${model}!`);
                    delete garage[model];
                }

            } else {
                // o	You need to drive the given distance and you will need the given fuel to do that. If the car doesn`t have enough fuel print:
                console.log("Not enough fuel to make that ride");
            }

        } else if (command === 'Refuel') {
            // 'Refuel : Audi A6 : 50',
            let model = tokens[1];
            let fuelToAdd = Number(tokens[2]);

            let previousFuel = garage[model].fuel;

            garage[model].fuel += fuelToAdd;   // we refill the tank

            let tankCapacity = 75;

            if (garage[model].fuel > tankCapacity) {  // if we overfill the tank

                garage[model].fuel = tankCapacity;

                console.log(`${model} refueled with ${tankCapacity - previousFuel} liters`);

            } else {
                
                console.log(`${model} refueled with ${fuelToAdd} liters`);
            }

        } else if (command === 'Revert') {
            // 'Revert : Audi A6 : 30000'
            // •	Revert : {car} : {kilometers}
            let model = tokens[1];
            let kilometers = Number(tokens[2]);

            garage[model].mileage -= kilometers;

            let maxMileage = 10000;

            if (garage[model].mileage < maxMileage) {
                garage[model].mileage = maxMileage;

            } else {

                console.log(`${model} mileage decreased by ${kilometers} kilometers`);
            }

            // o	Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
            // "{car} mileage decreased by {amount reverted} kilometers"
            // o	If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
            // DO NOT print anything.
        }
    }

    //     Upon receiving the "Stop" command you need to print all cars in your possession, sorted by their mileage in decscending order, then by their name in ascending order, in the following format:
    // "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."

    // [
    //     [ 'Audi A6', { mileage: 10000, fuel: 65 } ],
    //     [ 'Mercedes CLS', { mileage: 10594, fuel: 24 } ],
    //     [ 'Volkswagen Passat CC', { mileage: 45678, fuel: 5 } ]
    //   ]
    let sorted = Object.entries(garage)
        .sort(sortingCars);

    function sortingCars(a, b) {

        let mileageA = a[1].mileage;
        let mileageB = b[1].mileage;

        return (mileageB - mileageA) || a[0].localeCompare(b[0]);
    }

    for (let [car, mileage] of sorted) {

        console.log(`${car} -> Mileage: ${mileage.mileage} kms, Fuel in the tank: ${mileage.fuel} lt.`);
    }
    //     Not enough fuel to make that ride
    // Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
    // Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
    // Time to sell the Aston Martin Valkryie!
    // Lamborghini Veneno refueled with 1 liters
    // Bugatti Veyron mileage decreased by 2000 kilometers
    // Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.
    // Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
    // Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.

}