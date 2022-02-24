function poundsToDollars(pounds) {

    const exchangeRate = 1.31;
    let dollars = pounds * exchangeRate;
    return dollars.toFixed(3);
    
  }