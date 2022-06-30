function solve(input) {
    // '5 3 12 3 1', // sum of mainDiagonal = 5 + 4 + 3 + 2 + 1 = 15
    // '11 4 23 2 5',
    // '101 12 3 21 10',
    // '1 4 5 2 2',
    // '5 22 33 11 1'  // sum of secondaryDiagonal = 1 + 2 + 3 + 4 + 5 = 15 
  
    // 1. we create the matrix, so that we can push the array of strings into it
    let matrix = [];
  
    // 2. we parse the input (array of strings) into a matrix of numbers
  
    while (input.length !== 0) {
      matrix.push(input.shift().split(' ').map(Number));
    }
    // 3. we find the 2 diagonal sums
  
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
  
    for (let i = 0; i < matrix.length; i++) {
  
     primaryDiagonalSum += matrix[i][i];  // first diagonal sum = 15 -> rows
     secondaryDiagonalSum += matrix[i][matrix.length - i - 1];  // second diagonal sum = 15 
     // cols
    }
    
    // 4. we check if the 2 diagonalSums are equal 
  
    if (primaryDiagonalSum === secondaryDiagonalSum) {
      // if they are, we need to set every element that is NOT part of the main diagonals to one of the two sums
  
        // first we check the rows
        for (let i = 0; i < matrix.length; i++) {
        // than we check the cols
        for (let j = 0; j < matrix.length; j++) {
         // and we set every element that is NOT part of the main diagonals to one of the two sums
            if ((j !== matrix.length - 1 - i) && (j !== i)) {
                       // first diagonal     // second diagonal
                matrix[i][j] = primaryDiagonalSum;
            }
        }
  
        }
    }
    // in the end we print the matrix
  
      for (let i = 0; i < matrix.length; i++) {
  
          console.log(matrix[i].join(' '));
      }
    // 5 15 15 15 1
    // 15 4 15 2 15
    // 15 15 3 15 15
    // 15 4 15 2 15
    // 5 15 15 15 1
  
  }