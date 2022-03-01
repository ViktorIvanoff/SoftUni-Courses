function solve(n, k) {
    
    let sequence = [1];
  
    while (sequence.length !== n) {
      let next = 0;
  
      for (let i = sequence.length - 1, times = k; i > -1 && times > 0; i--, times--) {
        next += sequence[i];
      }
  
      sequence[sequence.length] = next;
    }
    
    console.log(sequence.join(' '));

  }