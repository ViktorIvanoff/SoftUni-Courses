function solve(matrix) {
  // [
  //         [4, 6, 3, 0],  ==== rowIndex 0
  //         [2, 1, -2],    ==== rowIndex 1
  //         [-5, 17],      ==== rowIndex 2
  //         [7, 3, 9, 12]  ===== rowIndex 3
  //     ]

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {  // we iterate the matrix through the row Indexes 
            
    let row = matrix[rowIndex];   // we save the current row in the 'row' variable

    for (let colIndex = 0; colIndex < row.length; colIndex++) {   // we iterate the cols until the row length

         console.log(row[colIndex]);    // we print all elements accessing with 'row[colIndex]'

    }
  }


}
solve([
  [4, 6, 3, 0],
  [2, 1, -2],
  [-5, 17],
  [7, 3, 9, 12],
]);
// solve(['5', '10']);
