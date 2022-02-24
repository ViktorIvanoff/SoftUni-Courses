function greeningExpenses(sqMetres) {

    let priceOneSqM = Number(7.61);
    let discount = Number(0.18);
   
    let greeningYard = (sqMetres * priceOneSqM);
    let discountGreeningYard = (discount * sqMetres * priceOneSqM);
   
    let result = (sqMetres * priceOneSqM)-(discount * sqMetres * priceOneSqM);
   
   console.log(`The final price is: ${result} lv.`);
   console.log(`The discount is: ${discountGreeningYard} lv.`);
     
   }