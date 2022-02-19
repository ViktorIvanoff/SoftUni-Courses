function solve(input) {

    let skumriaPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let palamudKgs = Number(input[2]);
    let safridKgs = Number(input[3]);
    let midiKgs = Number(input[4]);

    let palamudPrice = skumriaPrice * 0.60;
    let safridPrice = cacaPrice * 0.80;
    let midiPrice = 7.50;

    let palamud = palamudPrice + skumriaPrice;
    let palamudMoney = palamudKgs * palamud;
    let safridMoney = safridPrice + cacaPrice;
    let safridTotal = safridKgs * safridMoney;
    let midiMoney = midiKgs * midiPrice;

    let fishTotal = palamudMoney + safridTotal + midiMoney;

    console.log(fishTotal.toFixed(2));


}