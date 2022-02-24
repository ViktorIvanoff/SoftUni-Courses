function solve(num1, num2, num3) {
    
    let biggestNumber = num1;
  
    if (num1 > num2 && num1 > num3) {
      biggestNumber = num1;
    }
    else if (num2 > num1 && num2 > num3) {
      biggestNumber = num2;
    }
    else if (num3 > num1 && num3 > num1) {
      biggestNumber = num3;
    }
  
    console.log(biggestNumber);
  }