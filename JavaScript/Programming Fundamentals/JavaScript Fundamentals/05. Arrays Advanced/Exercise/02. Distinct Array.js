function solve(arr = []) {
    
    // x --> item in array
    // i --> index of item
    // a --> array reference, (in this case "arr")
    arr = arr.filter((x, i, a) => a.indexOf(x) === i);
  
    //---- With Set ----
    // arr = [...new Set(arr)];
  
    console.log(arr.join(' '));
  }
  