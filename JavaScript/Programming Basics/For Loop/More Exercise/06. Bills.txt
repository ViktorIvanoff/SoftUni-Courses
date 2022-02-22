function solve(input) {

    let index = 1;
    let months = Number(input[0]);

    let waterBill = 20;
    let internetBill = 15;
    let electricityTotal = 0;
    let waterTotal = 0;
    let internetTotal = 0;
    let otherTotal = 0;
    let average = 0;

    for (let i = 1; i <= months; i++) {

        input[i] = Number(input[i]);

        electricityTotal += Number(input[i]);
        waterTotal = months * waterBill;
        internetTotal = months * internetBill;

        otherTotal += (35 + input[i]) * 1.2;

        index++;
    }

    average = (electricityTotal + waterTotal + internetTotal + otherTotal) / months;

    console.log(`Electricity: ${electricityTotal.toFixed(2)} lv`);
    console.log(`Water: ${waterTotal.toFixed(2)} lv`);
    console.log(`Internet: ${internetTotal.toFixed(2)} lv`);
    console.log(`Other: ${otherTotal.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}