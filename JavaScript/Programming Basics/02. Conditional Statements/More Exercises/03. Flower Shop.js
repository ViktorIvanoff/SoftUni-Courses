function solve(magnolias,zumbules,roses,cactuses,giftPrice) {

    let priceMagnolias = Number(3.25);
    let priceZumbules = Number(4);
    let priceRoses = Number(3.5);
    let priceCactuses = Number(8);
    
    let totalMoney = magnolias * priceMagnolias + zumbules * priceZumbules + roses * priceRoses + cactuses * priceCactuses;
    let taxes = 5 * totalMoney / 100;
    let totalMoneyTaxFree = totalMoney - taxes;
    
    if (giftPrice > totalMoneyTaxFree) {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - totalMoneyTaxFree)} leva.`);
    } else if (totalMoneyTaxFree > giftPrice) {
       console.log(`She is left with ${Math.floor(totalMoneyTaxFree - giftPrice)} leva.`);
    }
    
    }