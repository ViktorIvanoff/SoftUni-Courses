function solve(input) {
    // ['Add->Grocery->Dried-fruit,Nuts,Lemons',
    // 'Add->Market->Nuts,Juice',
    // 'Important->Market->Snack',
    // 'Remove->Market',
    // 'Go shopping']

    let stores = {};
    let importantStores = [];

    for (let line of input) {

        if (line === 'Go Shopping') {
            break;
        }

        let [command, storeName, itemsList] = line.split('->');

        if (command === 'Add') {

            let items = itemsList.split(',');

            if (!stores.hasOwnProperty(storeName)) {

                stores[storeName] = [];
            }

            for (let item of items) {

                let alreadyAdded = false;

                for (let store in stores) {

                    if (stores[store].includes(item)) {
                        alreadyAdded = true;
                        break;
                    }
                }

                if (!alreadyAdded) {
                    stores[storeName].push(item);
                }
            }

        } else if (command === 'Important') {

            let item = itemsList;

            let alreadyAdded = false;

            for (let store in stores) {

                if (stores[store].includes(item)) {
                    alreadyAdded = true;
                    break;
                }
            }

            if (!alreadyAdded) {

                if (!stores.hasOwnProperty(storeName)) {
                    stores[storeName] = [];
                }

                stores[storeName].unshift(item);
                importantStores.push(storeName);
            }

        } else if (command === 'Remove') {

            if (!importantStores.includes(storeName) && stores.hasOwnProperty(storeName)) {
                delete stores[storeName];
            }
        }
    }

    let sorted = Object.entries(stores).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    for (let [storeName, items] of sorted) {

        console.log(storeName + ':');

        for (let item of items) {

            console.log(' - ' + item);
        }
    }
    
    // Grocery:
    //  - Dried-fruit
    //  - Nuts
    //  - Lemons
    // Market:
    //  - Snack
    //  - Juice
}
solve(['Add->Grocery->Dried-fruit,Nuts,Lemons',
    'Add->Market->Nuts,Juice',
    'Important->Market->Snack',
    'Remove->Market',
    'Go shopping']);

// solve(['Add->Peak->Batteries,Umbrella',
//     'Add->Groceries->Water,Juice,Food',
//     'Add->Peak->Tent',
//     'Important->Groceries->Batteries',
//     'Remove->Store',
//     'Go Shopping']);

// solve(["Add->Peak->Batteries,Umbrella",
//     "Add->Groceries->Water,Juice,Food",
//     "Add->Peak->Water",
//     "Go Shopping"]);

