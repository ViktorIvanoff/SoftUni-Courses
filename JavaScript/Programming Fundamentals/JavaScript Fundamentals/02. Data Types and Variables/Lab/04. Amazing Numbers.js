function solve(num) {

    let sum = 0;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
      sum += (+num[i]);
    }
  
    console.log(sum.toString().includes('9') ? `${num} Amazing? True` : `${num} Amazing? False`);
    
  }