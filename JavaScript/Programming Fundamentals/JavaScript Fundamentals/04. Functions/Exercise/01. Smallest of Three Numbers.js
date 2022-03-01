function smallestNumber(a, b, c) {

    let smallestNumber = 0;
  
    if (a <= b && a <= c) {
      smallestNumber = a;
    } else if (b <= a && b <= c) {
      smallestNumber = b;
    } else {
      smallestNumber = c;
    }
  
    return smallestNumber;
    
  }
