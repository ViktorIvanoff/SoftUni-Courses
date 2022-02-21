function solve(input) {

    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let premierePrice = 12;
    let normalPrice = 7.50;
    let discountPrice = 5;
    let price = 0;

    let cinemaArea = rows * cols;

    if (projectionType === "Premiere") {
        price = (cinemaArea * premierePrice).toFixed(2);

    } else if (projectionType === "Normal") {
        price = (cinemaArea * normalPrice).toFixed(2);
    } else if (projectionType === "Discount") {
        price = (cinemaArea * discountPrice).toFixed(2);
    }

    console.log(price);


}