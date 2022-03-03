function solve(text) {
    
    text = [...text].reduce((acc, value) => value === acc.charAt(acc.length - 1) ? acc + '' : acc + value);
    console.log(text);
  }