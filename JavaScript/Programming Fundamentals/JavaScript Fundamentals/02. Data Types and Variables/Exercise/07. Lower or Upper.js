function solve(character) {
    
    let casing = undefined;
    let charCode = character.charCodeAt(0);
  
    if (charCode >= 97 && charCode <= 122) {
      casing = 'lower-case';
    } else if (charCode >= 65 && charCode <= 90) {
      casing = 'upper-case';
    }
    
    console.log(casing);
  }