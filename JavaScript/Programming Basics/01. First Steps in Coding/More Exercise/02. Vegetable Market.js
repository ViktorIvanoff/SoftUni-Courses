function solve(veggiesPrice, fruitsPrice, totalVeggiesKg, totalFruitsKg) {

    veggiesPrice = Number(veggiesPrice);
    fruitsPrice = Number(fruitsPrice);
    totalVeggiesKg = Number(totalVeggiesKg);
    totalFruitsKg = Number(totalFruitsKg);
    let bgnToEurRate = 1.94;

    let totalVeggiesMoney = veggiesPrice * totalVeggiesKg;
    let totalFruitsMoney = fruitsPrice * totalFruitsKg;

    let totalMoney = totalVeggiesMoney + totalFruitsMoney;

    let totalMoneyEur = totalMoney / bgnToEurRate;

    console.log(totalMoneyEur.toFixed(2));

}