function solve(input) {

// create objects to store juices and bottles
const juices = {};
const bottles = {};

    input.forEach((el) => {
        // 'Orange => 2000',
        let [juiceType, quantity] = el.split(' => ');
        quantity = Number(quantity);

        // check if we have the flavour
        if (!juices[juiceType]) {
            // if not -> set it
            juices[juiceType] = 0;
        }

        // else if we have it, just add the given qty from input
        juices[juiceType] += quantity;
        createBottle(juiceType);
    });

    // this is our juices object that contains the flavour and the qty in ml
    // {Kiwi: 4801, Pear: 8023, Watermelon: 10245}

    function createBottle(juiceType) {
        // first we check if we have more than 1000 ml in our juices obj,
        // so that we know if we have to make a bottle
        if(juices[juiceType] >= 1000) {
            // and check if you already have that juice in our bottles obj
            if (!bottles[juiceType]) {
                bottles[juiceType] = 0;
            }
                let numberOfBottles = Math.floor( juices[juiceType] / 1000 );
                bottles[juiceType] += numberOfBottles;
                juices[juiceType] -= (numberOfBottles * 1000);
            }
        }
    
        // [ [ 'Pear', 8 ], [ 'Watermelon', 10 ], [ 'Kiwi', 4 ] ]
            for (let [juice, bottle] of Object.entries(bottles)) {
                console.log(`${juice} => ${bottle}`);
            }
// Pear => 8
// Watermelon => 10
// Kiwi => 4
}
// solve(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']);

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);