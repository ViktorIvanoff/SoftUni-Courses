function isMagicSquare(matrix) {

    let sum = 0;
    matrix[0].forEach(x => sum += x);
  
    //---- CHECKING ROWS ----
    for (let row = 0; row < matrix.length; row++) {
              let comparingSum = 0;
      for (let i = 0; i < matrix[row].length; i++) {
          
        comparingSum += matrix[row][i];
      }
  
      if (sum !== comparingSum) {
        return false;
      }
    }
  
    //---- CHECKING COLS ----
    for (let i = 0; i < matrix.length; i++) {

      let comparingSum = 0;
      for (let col = 0; col < matrix[i].length; col++) {

        comparingSum += matrix[col][i];
      }
  
      if (sum !== comparingSum) {
        return false;
      }
    }
    return true;
}
