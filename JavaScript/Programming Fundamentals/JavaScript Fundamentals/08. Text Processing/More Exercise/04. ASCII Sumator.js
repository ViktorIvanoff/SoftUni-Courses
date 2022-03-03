function solve(arr = []) {
    
    let sum = 0;
    arr[0] < arr[1] ? [...arr[2]].forEach(x => (x > arr[0] && x < arr[1]) ? sum += x.charCodeAt(0) : sum += 0) :
                      [...arr[2]].forEach(x => (x > arr[1] && x < arr[0]) ? sum += x.charCodeAt(0) : sum += 0);
  
    console.log(sum);
  }