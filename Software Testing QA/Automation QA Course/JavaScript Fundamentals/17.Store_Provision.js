function solve(currStock, ordered) {

    let obj = {};
for (let i = 0; i < currStock.length; i+=2) {
    let product = currStock[i];
    let quantity = Number(currStock[i+1]);

    if(!obj.hasOwnProperty(product)) {
        obj[product] = quantity;
    } else {
    obj[product] += quantity;
    }
}

for(let i = 0; i < ordered.length; i+=2) {
    let product = ordered[i];
    let quantity = Number(ordered[i+1]);

    if(!obj.hasOwnProperty(product)) {
        obj[product] = quantity;
    } else {
    obj[product] += quantity;
    }
}

for(let product in obj) {
    console.log(`${product} -> ${obj[product]}`);
}

}
solve(
[
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]
);
