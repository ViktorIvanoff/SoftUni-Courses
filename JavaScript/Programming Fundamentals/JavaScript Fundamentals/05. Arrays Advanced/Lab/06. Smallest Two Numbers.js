function solve(arr = []) {

    let sortedAscending = arr.sort((a, b) => a - b);
    
    console.log(sortedAscending.slice(0, 2).join(' '));
  }