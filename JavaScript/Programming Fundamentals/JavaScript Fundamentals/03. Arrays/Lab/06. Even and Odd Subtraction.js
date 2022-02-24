function solve(arr) {

    let evenSum = 0;
    let oddSum = 0;
  
    for (let num of arr) {
        
      num -= 0; // ASCII hack
      num % 2 === 0 ? evenSum += num : oddSum += num;
    }
  
    console.log(evenSum - oddSum);
  }