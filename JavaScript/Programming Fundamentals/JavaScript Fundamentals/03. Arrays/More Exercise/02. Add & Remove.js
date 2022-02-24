function solve(arr = []) {

    let numbers = [];
    let increment = 0;
  
    for (let command of arr) {
        
      switch (command) {
        case 'add':
          increment++;
          numbers.push(increment);
          break;
        case 'remove':
          increment++;
          numbers.pop(numbers[numbers.length - 1]);
          break;
      }
    }
  
    console.log(numbers.length === 0 ? 'Empty' : numbers.join(' '));
  }