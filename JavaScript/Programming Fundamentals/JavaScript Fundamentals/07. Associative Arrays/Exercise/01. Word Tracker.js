function solve(arr = []) {
    
    let words = {};
  
    for (let word of arr.shift().split(' ')) {
      words[word] = 0;
    }
  
    for (let word of arr) {
      if (words.hasOwnProperty(word)) {
        words[word]++;
      }
    }
  
    words = Object.entries(words).sort((a, b) => b[1] - a[1]).reduce((prev, current) => { prev[current[0]] = current[1]; return prev; }, {});
    // words = Object.fromEntries(Object.entries(words).sort((a, b) => b[1] - a[1])); 2nd WAY
  
    for (const word in words) {
      console.log(`${word} - ${words[word]}`);
    }
  }