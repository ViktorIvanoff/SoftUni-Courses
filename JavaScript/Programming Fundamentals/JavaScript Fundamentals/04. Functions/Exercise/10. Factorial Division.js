function factorialDivision(a, b) {

    let factA = Factorial(a);
    let factB = Factorial(b);
    let division = (factA / factB).toFixed(2);
    console.log(division);
  
    function Factorial(number) {
      return number === 1 ? 1 : number * Factorial(number - 1);
      
    }
  }