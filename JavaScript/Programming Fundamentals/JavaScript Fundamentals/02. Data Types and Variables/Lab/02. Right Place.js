function solve(str, char, result) {
    
    let res = str.replace('_', char);
    console.log(res === result ? 'Matched' : 'Not Matched');
  }