function solve(arr = []) {
    
    arr.sort((a, b) => a - b);
  
    let sorted = [];
    while (arr.length !== 0) {
      sorted.push(arr.pop());
      sorted.push(arr.shift());
    }
  
    console.log(sorted.join(' '));
  }
  