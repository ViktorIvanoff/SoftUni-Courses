function solve(input) {
    // You will be given several towns, with products and their price. You need to find the lowest price for every product and the town it is sold at for that price.
    // Input
    // The input comes as an array of strings. Each element will hold data about a town, product, and its price at that town. The town and product will be strings, the price will be a number. The input will come in the following format:
    // {townName} | {productName} | {productPrice}
    // Output
    // As output, you must print each product with its lowest price and the town at which the product is sold at that price. If two towns share the same lowest price, print the one that was entered first. 
    // The output, for every product, should be in the following format:
    // {productName} -> {productLowestPrice} ({townName})
    // The order of output in - order of entrance. See the examples for more info.
    let object = {};
    // ['Sample Town | Sample Product | 1000',
    // 'Sample Town | Orange | 2',
    // 'Sample Town | Peach | 1',
    // 'Sofia | Orange | 3',
    // 'Sofia | Peach | 2',
    // 'New York | Sample Product | 1000.1',
    // 'New York | Burger | 10'])

    for (const line of input) {
 // 'Sample Town | Sample Product | 1000',
    let tokens = line.split(' | ');
    let town = tokens[0];
    let product = tokens[1];
    let price = Number(tokens[2]);

    if (object[product] === undefined) {
        // if we dont have the product, we CREATE it 
        // key is the product, value is another object with key town and value - price
        object[product] = {
            town,
            price
        }
    } else {
        // if we already have the product, we need to only save the product with the lowest price ! 
        if (price < object[product].price) {
         // only if the current price is LOWER than the one that we have, we save the product  
            object[product] = {
                town,
                price
            }
        }
    }
    }

    // {
    //     'Sample Product': { town: 'Sample Town', price: 1000 },
    //     Orange: { town: 'Sample Town', price: 2 },
    //     Peach: { town: 'Sample Town', price: 1 },
    //     Burger: { town: 'New York', price: 10 }
    //   }

    let productNames = Object.keys(object);
   
   for (let i = 0; i < productNames.length; i++) {
        let product = productNames[i];
        console.log(`${product} -> ${object[product].price} (${object[product].town})`);
   }
    // Sample Product -> 1000 (Sample Town)
    // Orange -> 2 (Sample Town)
    // Peach -> 1 (Sample Town)
    // Burger -> 10 (New York)
}