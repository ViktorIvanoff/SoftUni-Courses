function solve(words, template) {
    words = words.split(', ');

    while (words.length !== 0) {

      let word = words.shift();
      template = template.replace('*'.repeat(word.length), word);
      
    }
  
    console.log(template);

  }
  