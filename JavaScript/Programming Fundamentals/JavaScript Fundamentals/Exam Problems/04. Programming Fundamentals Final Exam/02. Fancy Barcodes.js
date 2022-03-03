function solve(input) {
    // Product group: 00
    // Product group: 0
    // Product group: 46
    input.shift();
    let pattern = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/;

    for (let inputLine of input) {

        if (pattern.test(inputLine)) {

            let tokens = pattern.exec(inputLine);
            let barcode = tokens[2];
            let numbers = [...barcode]
                .filter(symbol => /\d/g.test(symbol))
                .join('');

            let productGroup = numbers === '' ? '00' : numbers;

            console.log(`Product group: ${productGroup}`);

        } else {

            console.log("Invalid barcode");
        }

    }

}