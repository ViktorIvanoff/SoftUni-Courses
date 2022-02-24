function sumDigits(number) {

    let sum = 0;
    number = number.toString().split('');
    number.forEach(digit => sum += Number(digit));
    return sum;

  }