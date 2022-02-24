function solve(arr = []) {

    let nthElements = [];
    let step = +arr.pop();
  
    for (let i = 0; i < arr.length; i += step) {
        
      nthElements.push(arr[i]);
    }
  
    console.log(nthElements.join(' '));
  }