function solve(matrix) {
    // Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.
    // The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
    // The output is a Boolean result indicating whether the matrix is magical or not.
  //   [ colIndex 0, colIndex 1, colIndex 2
   //   [4, 5, 6] rowIndex 0  ? 4 + 5 + 6 = 15 ?  // 4 => matrix[rowIndex][colIndex]
  //    [6, 5, 4] rowIndex 1  ? 6 + 5 + 4 = 15 ?
  //    [5, 5, 5]  rowIndex 2 ? 5 + 5 + 5 = 15  ?
  //             ] 
  let isMagical = true;
  // we check the rows 
  for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
  
      let sumFirstRow = matrix[rowIndex].reduce((el, sum) => sum += el, 0);
      let sumSecondRow = matrix[rowIndex + 1].reduce((el, sum) => sum + el, 0);
      
      // we check the cols
      let sumFirstCol = 0;
      let sumSecondCol = 0;
  
      for (let colIndex = 0; colIndex < matrix.length; colIndex++) {
  
        sumFirstCol += matrix[rowIndex][colIndex];
        sumSecondCol += matrix[rowIndex + 1][colIndex];
      }
  
      if (sumFirstRow != sumSecondRow || sumFirstCol != sumSecondCol) {
          isMagical = false;
      }
  
      return isMagical;
  }
    // true
    // false
    // true
  
}
