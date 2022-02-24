function solve(a, b, c) {
    
    let s = (a + b + c) / 2.0;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
  }