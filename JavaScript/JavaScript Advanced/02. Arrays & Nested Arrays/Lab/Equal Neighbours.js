function solve(matrix) {
    // ['2', '3', '4', '7', '0'],
    // ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']
    let equalNeighbours = 0;
    // we check the rows 

    for (let row = 0; row < matrix.length; row++) { // we iterate until the lenght of the row

        for (let col = 0; col < matrix[row].length - 1; col++) {

            // we iterate until the matrix lenght - 1, so that we always catch the last element and we dont go outside the matrix

            let currentEl = matrix[row][col];
            let neighbourEl = matrix[row][col + 1];

            if (currentEl === neighbourEl) {
                equalNeighbours++;
            }
        }
    }

    // we check the cols

    let lengthOfFirstRow = matrix[0].length;

    for (let col = 0; col < lengthOfFirstRow; col++) {

        for (let row = 0; row < matrix.length - 1; row++) {

            let currentEl = matrix[row][col];
            let neighbourEl = matrix[row + 1][col];

            if (currentEl === neighbourEl) {
                equalNeighbours++;
            }
        }
    }

    console.log(equalNeighbours);
}