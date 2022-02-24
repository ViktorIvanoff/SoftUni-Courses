function solve(arr = []) {

    let rotations = +arr.pop();
  
    while (rotations-- > 0) {
        
      let popped = arr.pop();
      arr.unshift(popped);
    }
  
    console.log(arr.join(' '));
  }