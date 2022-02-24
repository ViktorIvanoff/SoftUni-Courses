function solve(arr = [], rotations) {

    while (rotations-- !== 0) {
        
      let firstElement = arr.shift();
      arr.push(firstElement);
    }
  
    console.log(arr.join(' '));
  }