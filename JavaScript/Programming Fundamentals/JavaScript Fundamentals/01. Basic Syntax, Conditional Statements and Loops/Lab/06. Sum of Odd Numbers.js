function solve(nums) {
    
    let odd = 1;
    let sum = 0;
    while (nums != 0) {
      console.log(odd);
      sum += odd;
      odd += 2;
      nums--;
    }
  
    console.log(`Sum: ${sum}`);
  }