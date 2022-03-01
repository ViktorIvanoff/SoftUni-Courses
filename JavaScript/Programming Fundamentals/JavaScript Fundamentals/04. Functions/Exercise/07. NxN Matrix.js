function printMatrix(n) {

    let matrix = initializeMatrix(n);
    matrix.forEach(row => console.log(row.join(' ')));
    
    function initializeMatrix(n) {

      let matrix = [];
      
      for (let row = 0; row < n; row++) {
        matrix[row] = [];

        for (let i = 0; i < n; i++) {
          matrix[row][i] = n;
        }
      }

      return matrix;

    }
  }
  