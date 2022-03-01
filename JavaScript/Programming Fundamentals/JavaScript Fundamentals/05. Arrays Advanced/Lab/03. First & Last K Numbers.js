function printFirstAndLastKNumbers(arr = []) {
    
    let k = arr.shift();
    let slice1 = arr.slice(0, k);
    let slice2 = arr.slice(arr.length - k, arr.length);
    console.log(slice1.join(' '));
    console.log(slice2.join(' '));

  }
  