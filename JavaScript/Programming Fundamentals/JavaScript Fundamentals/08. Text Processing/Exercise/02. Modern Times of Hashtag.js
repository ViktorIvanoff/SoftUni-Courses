function solve(str) {
    
    let words = str.match(/#[A-Za-z]+/g).map(x => x.replace('#', ''));
    words.forEach(x => console.log(x));

  }