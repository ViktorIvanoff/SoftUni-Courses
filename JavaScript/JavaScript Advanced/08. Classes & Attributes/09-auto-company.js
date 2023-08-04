function solve(input) {
        // key    // value 
    //  object : { key: value }
    //  ['Audi | Q7 | 1000']
    //  {       : {       }  }

    // "{carBrand} | {carModel} | {producedCars}"
    //        'BMW | X5         | 1000'
    const cars = {};

    input.forEach((el) => {
        let [brand, model, quantity] = el.split(' | ');
        quantity = Number(quantity);

        if(!cars[brand]) {
            cars[brand] = {};
        }

        if(!cars[brand][model]) {
            cars[brand][model] = 0;
        }

        cars[brand][model] += quantity;
    })

    // {
    //     Audi: { Q7: 1000, Q6: 100 },
    //     BMW: { X5: 1000, X6: 100 },
    //     Citroen: { C4: 145, C5: 10 },
    //     Volga: { 'GAZ-24': 1000000 },
    //     Lada: { Niva: 1000000, Jigula: 1000000 }
    //   }

        for (let brand in cars) {
            console.log(brand);
            
            for (let [model, quantity] of Object.entries(cars[brand])) {
                console.log(`###${model} -> ${quantity}`);
            }
        }

    // Audi
    // ###Q7 -> 1000
    // ###Q6 -> 100
    // BMW
    // ###X5 -> 1000
    // ###X6 -> 100
    // Citroen
    // ###C4 -> 145
    // ###C5 -> 10
    // Volga
    // ###GAZ-24 -> 1000000
    // Lada
    // ###Niva -> 1000000
    // ###Jigula -> 1000000
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);