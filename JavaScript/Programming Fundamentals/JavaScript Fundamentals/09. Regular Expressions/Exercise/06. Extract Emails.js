function solve(input = []) {

    let matches = input[0].match(/(?<=\s)[A-Za-z0-9]+[_.-]*[A-Za-z0-9]+@[A-Za-z]+-*[A-Za-z]+(?:\.[A-Za-z]+-*[A-Za-z])+/g);

    if (matches !== null) {
      matches.forEach(x => console.log(x));
    }
    
  }