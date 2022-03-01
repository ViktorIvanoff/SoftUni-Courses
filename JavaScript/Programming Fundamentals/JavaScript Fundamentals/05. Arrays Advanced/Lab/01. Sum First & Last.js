function sumFirstAndLast(arr = []) {

    arr = arr.map(x => +x);
    return arr.shift() + arr.pop();
    
  }