function solve(str) {

    let regex = /(\w+)/g;
    let matches = str.match(regex);
    matches = matches.map(word => word.toUpperCase());
    console.log(matches.join(', '));
  
    // HI, HOW, ARE, YOU
    // HELLO
  }
  