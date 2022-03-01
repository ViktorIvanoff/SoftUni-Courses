function reversePolishNotation(instrutions = []) {

    let stack = [];
    if (instrutions.length === 0) {

      return 0;
    }
  
    for (let i = 0; i < instrutions.length; i++) {

      if (!isNaN(instrutions[i])) {

        stack.push(instrutions[i]);

      } else {
        let a = stack.pop();
        let b = stack.pop();
        
        switch (instrutions[i]) {

          case '+':   stack.push(Number(a) + Number(b));    break;
          case '-':   stack.push(Number(b) - Number(a));    break;
          case '*':   stack.push(Number(a) * Number(b));    break;
          case '/':   stack.push(Number(b) / Number(a));    break;
          case '^':   stack.push(Number(b) ** Number(a));   break;
        }
      }
    }
  
    if (stack.length > 1) {

      return "Error: too many operands!";
    } else if (isNaN(stack[0])) {
        
      return "Error: not enough operands!";
    } else {
      return stack[0];
    }
  }