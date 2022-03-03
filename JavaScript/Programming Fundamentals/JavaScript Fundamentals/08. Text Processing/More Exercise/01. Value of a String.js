function solve(arr = []) {

    let [letters, casing] = arr;
    let totalSum = 0;
  
    switch (casing) {
      case 'LOWERCASE':
          
        letters = letters.match(/[a-z]/g);
        break;
      case 'UPPERCASE':
        letters = letters.match(/[A-Z]/g);
        break;
  
      default:
        break;
    }
  
    letters.forEach(x => totalSum += x.charCodeAt(0));
    console.log(`The total sum is: ${totalSum}`);
  }
  