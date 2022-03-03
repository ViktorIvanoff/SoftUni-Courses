function solve(text = []) {

    text = text[0].split('|');
  
    let letters = '';
    let lettersMatch = text[0].matchAll(/([#$%*&])(?<capLetters>[A-Z]+)(\1)/);

    for (let match of lettersMatch) {

      letters = match.groups['capLetters'];
    }
  
    for (let i = 0; i < letters.length; i++) {

      let asciiPattern = new RegExp(letters[i].charCodeAt(0) + ':(?<length>[0-9][0-9])');
      let asciiMatches = text[1].matchAll(asciiPattern);
  
      for (let asciiMatch of asciiMatches) {

        let length = +asciiMatch.groups['length'];
        let wordPattern = '(?<=\\s|^)' + letters[i] + '[^\\s]{' + length + '}(?=\\s|$)';
        wordPattern = new RegExp(wordPattern, 'gm');
  
        let wordMatch = text[2].match(wordPattern);
        console.log(wordMatch[0]);
        
      }
    }
  }
  