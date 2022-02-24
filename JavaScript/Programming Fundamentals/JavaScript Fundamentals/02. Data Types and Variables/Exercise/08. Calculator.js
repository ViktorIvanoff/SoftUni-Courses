function solve(num1, op, num2) {

    const cases = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };
  
    return cases[op](num1, num2).toFixed(2);
}