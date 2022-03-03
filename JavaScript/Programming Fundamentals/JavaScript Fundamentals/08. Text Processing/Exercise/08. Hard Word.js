function solve(arr = []) {

    let sentence = arr[0];
    let words = arr[1];
  
    while (words.length !== 0) {

      let word = words.shift();
  
      for (let i = 0; i < sentence.length; i++) {

        let startIndex = -1;
        let counter = 0;
  
        if (sentence[i] === '_') {
          counter++;
          startIndex = i;

          while (sentence[++i] === '_') {
            counter++;
          }
  
          if (counter === word.length) {
              
            sentence = sentence.substring(0, startIndex) + word + sentence.substring(startIndex + word.length);
            i = 0;
          }
        }
      }
    }
  
    console.log(sentence);
  }