function isPrime(n) {
    
    let isPrime = true;
  
    for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++)
    {
      if (n % i === 0) {
        isPrime = false;
        return isPrime;
      }
    }
    return isPrime;
  }