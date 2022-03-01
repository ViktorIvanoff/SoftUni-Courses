function solve(numbers = [], bombParameters = []) {

    let bombNumber = bombParameters[0];
    let bombPower = bombParameters[1];
  
    for (let i = 0; i < bombPower; i++) {

      for (let k = 0; k < numbers.length; k++) {

        if (numbers[k] === bombNumber) {
            
          if (k - 1 >= 0) {
            numbers.splice(k - 1, 1);
            k--;
          }
  
          if (k + 1 < numbers.length) {
            numbers.splice(k + 1, 1);
          }
        }
      }
    }
  
    numbers = numbers.filter(n => n !== bombNumber);
    console.log(numbers.reduce((acc, value) => acc + value, 0));
  }
  