function solve(num1, num2, num3) {
    
    let sum = num1 + num2 + num3;
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    //---- SHORTER VERSION ----
    //sum += (sum % 1 === 0) ? ' - Integer' : ' - Float';
    
    console.log(sum);
  }