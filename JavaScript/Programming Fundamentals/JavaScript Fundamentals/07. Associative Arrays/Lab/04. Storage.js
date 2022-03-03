function solve(input) {

    // tomatoes -> 10
    // coffee -> 45
    // olives -> 100

    let products = {};

    for (let line of input) {

        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (!products.hasOwnProperty(product)) {
            products[product] = quantity;
        } else {
            products[product] += quantity
        }
    }

    Object.keys(products).forEach((product) => {
        console.log(`${product} -> ${products[product]}`);
    });

}