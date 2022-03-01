function modifyNumber(number) {

    let numbers = [];
    number.toString().split('').forEach(digit => numbers.push(+digit));
  
    const average = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
    let avg = average(numbers);
    
    while (avg < 5) {
      numbers.push(9);
      avg = average(numbers);
    }
  
    console.log(numbers.join(''));
    
  }
  