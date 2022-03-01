function printCharsInRange(a, b) {
    
    function printAscending(a, b) {
      let chars = [];
      for (let char = a + 1; char < b; char++) {
        chars.push(String.fromCharCode(char));
      }
      console.log(chars.join(' '));
    }
  
    a = a.charCodeAt(0);
    b = b.charCodeAt(0);
    a < b ? printAscending(a, b) : printAscending(b, a);

  }