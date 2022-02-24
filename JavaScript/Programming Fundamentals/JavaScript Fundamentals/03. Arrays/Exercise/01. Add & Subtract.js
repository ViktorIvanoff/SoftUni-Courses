function solve(arr = []) {
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let oldSum = arr.reduce(reducer);
  
    for (let i = 0; i < arr.length; i++) {
      arr[i] % 2 === 0 ? arr[i] += i : arr[i] -= i;
    }
    console.log(arr);
    console.log(oldSum);
    console.log(arr.reduce(reducer));
  }