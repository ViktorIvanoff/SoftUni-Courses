function isPerfectNumber(number) {

  let divisors = getDivisors(number);
  
  divisors.pop();
  
  let sum = divisors.reduce((accumulator, currentValue) => accumulator + currentValue)
  
  console.log(sum === number ? 'We have a perfect number!' : "It's not so perfect.");
  
  function getDivisors(number) {
  
    let divisors = [];
    
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }

    return divisors;
  }
}
