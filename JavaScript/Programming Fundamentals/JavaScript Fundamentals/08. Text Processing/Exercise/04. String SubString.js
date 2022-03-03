function solve(word, text) {
    
    word = word.toLowerCase();
    text = text.toLowerCase();
  
    console.log(text.split(" ").find(x => x === word) ? `${word}` : `${word} not found!`); 
  }
  