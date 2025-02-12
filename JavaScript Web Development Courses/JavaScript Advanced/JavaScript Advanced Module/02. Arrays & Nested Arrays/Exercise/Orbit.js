function solve(tokens = []) {
    // we take the input
  let width = tokens[0];
  let height = tokens[1];
  let x = tokens[2];
  let y = tokens[3];

 // we create the matrix
 let matrix = [];

 for (let i = 0; i < width; i++) {
      matrix.push([]);
 }

 // we fill the matrix

  for (let i = 0; i < width; i++) {    // we create the width

    for (let j = 0; j < height; j++) {  // we create the height

      matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;   // formulae
    }
  }
  // we print the matrix
  matrix.forEach(row => console.log(row.join(' ')));
}