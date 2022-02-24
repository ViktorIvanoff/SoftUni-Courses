function solve(n) {

    let firstLetterCode = 'a'.charCodeAt(0);
  
    for (let c1 = 0; c1 < n; c1++) {

      for (let c2 = 0; c2 < n; c2++) {

        for (let c3 = 0; c3 < n; c3++) {
            
          console.log(String.fromCharCode(firstLetterCode + c1, firstLetterCode + c2, firstLetterCode + c3));
        }
      }
    }
  }