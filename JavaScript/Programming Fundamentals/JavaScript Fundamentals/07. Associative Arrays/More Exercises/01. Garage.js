function solve(input) {

    // Garage № 1
    // --- color - blue, fuel type - diesel
    // --- color - red, manufacture - Audi
    // Garage № 2
    // --- fuel type - petrol
    // Garage № 4
    // --- color - dark blue, fuel type - diesel, manufacture - Fiat

    let garages = {};

    for (let line of input) {
        // '1 - color: blue, fuel type: diesel', 

        let [garage, carInfo] = line.split(" - ");

        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = [];

        }
        garages[garage].push(carInfo);

    }

    // {
    //     '1': [ 'color: blue, fuel type: diesel', 'color: red, manufacture: Audi' ],
    //     '2': [ 'fuel type: petrol' ],
    //     '4': [ 'color: dark blue, fuel type: diesel, manufacture: Fiat' ]
    //   }

    // [
    //     [
    //       '1',
    //       [
    //         'color: blue, fuel type: diesel',
    //         'color: red, manufacture: Audi'
    //       ]
    //     ],
    //     [ '2', [ 'fuel type: petrol' ] ],
    //     [ '4', [ 'color: dark blue, fuel type: diesel, manufacture: Fiat' ] ]
    //   ]

    let sorted = Object.entries(garages).
    sort((a,b) => 
            a[1] - b[1]
    );

    let output = '';

        for (let [garage, cars] of sorted) {

            output += `Garage № ${garage}\n`;

            for (let car of cars) {

                car = car.replace(/: /g, ' - ');

                output += `--- ${car}\n`;
            }
        }

    // Garage № 1
    // --- color - blue, fuel type - diesel
    // --- color - red, manufacture - Audi
    // Garage № 2
    // --- fuel type - petrol
    // Garage № 4
    // --- color - dark blue, fuel type - diesel, manufacture - Fiat

        console.log(output);
}