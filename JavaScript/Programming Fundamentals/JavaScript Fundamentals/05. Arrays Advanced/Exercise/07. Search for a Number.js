function solve(arr = [], parameters = []) {
    
    let numbers = arr.slice(0, parameters[0]);
    numbers.splice(0, parameters[1]);
    let count = numbers.filter(x => x === parameters[2]).length;
  
    console.log(`Number ${parameters[2]} occurs ${count} times.`);
  }