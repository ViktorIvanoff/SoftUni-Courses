function carWash(tokens = []) {
    
    let cleanPercentage = 0;
  
    const modificators = {
      'soap': cleanPercentage => cleanPercentage += 10,
      'water': cleanPercentage => cleanPercentage *= 1.20,
      'vacuum cleaner': cleanPercentage => cleanPercentage *= 1.25,
      'mud': cleanPercentage => cleanPercentage *= 0.90,
    }
  
    while (tokens.length !== 0) {
      cleanPercentage = modificators[tokens.shift()](cleanPercentage);
    }
  
    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`);

  }