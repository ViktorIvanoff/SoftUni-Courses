function calculate(a, b, operator) {

    const cases = {
      'multiply' : (a, b) => a * b,
      'divide' : (a, b) => a / b,
      'add' : (a, b) => a + b,
      'subtract' : (a, b) => a - b,
    }
  
    return cases[operator](a, b);
  }
  
  console.log(calculate(5, 5, 'multiply'));
  console.log(calculate(40, 8, 'divide'));
  console.log(calculate(12, 19, 'add'));
  console.log(calculate(50, 13, 'subtract'));