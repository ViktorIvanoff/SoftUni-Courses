function solve(budget, extras, pricePerExtra) {

    budget = Number(budget);
    extras = Number(extras);
    pricePerExtra = Number(pricePerExtra);
 
    let decorePrice = budget * 0.1;
    let clothingPrice = extras * pricePerExtra;
 
    if (extras > 150) {
        clothingPrice = clothingPrice - (clothingPrice * 0.1);
    } 
 
 
    let total = decorePrice + clothingPrice;
 
    if (total > budget) {
     let needed = total - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${needed.toFixed(2)} leva more.`);
    } else  {
     let extraMoney = budget - total;
        console.log("Action!");
        console.log(`Wingard starts filming with ${extraMoney.toFixed(2)} leva left.`);
    }
 }