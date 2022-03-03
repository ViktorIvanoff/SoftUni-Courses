function solve(input) {

    input = input.split(' ').filter(x => x);
    let totalSum = 0;
  
    for (let [...string] of input) {
        
      let precedingLetter = string.shift();
      let followingLetter = string.pop();
      let sum = Number(string.join(''));
  
      (/[A-Z]/.test(precedingLetter)) ? sum /= precedingLetter.charCodeAt(0) - 64 : sum *= precedingLetter.charCodeAt(0) - 96;
      (/[A-Z]/.test(followingLetter)) ? sum -= followingLetter.charCodeAt(0) - 64 : sum += followingLetter.charCodeAt(0) - 96;
  
      totalSum += sum;
    }
  
    console.log(totalSum.toFixed(2));
  }