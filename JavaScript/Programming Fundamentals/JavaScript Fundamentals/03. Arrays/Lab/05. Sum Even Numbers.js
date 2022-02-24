function sumEvenNumbers(arr) {
    
    let sum = 0;
    for (let num of arr) {
      num -= 0; // ASCII hack
      if (num % 2 === 0) {
        sum += num;
      }
    }
  
    console.log(sum);
  }
  