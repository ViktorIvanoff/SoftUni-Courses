function solve(matrix) {
    // [  0col 1col  2col
    //     [3, 5, 7, 12],    0 row 
    //     [-1, 4, 33, 2],   1 row 
    //     [8, 3, 0, 4]      2 row 
    // ]

    let biggestNumber = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < matrix.length; row++) {
        // we iterate the rows

        for (let col = 0; col < matrix[row].length; col++) {

            // we iterate the cols 

            let currentNum = matrix[row][col];
            biggestNumber = Math.max(biggestNumber, currentNum);
        }
    }

    console.log(biggestNumber);
}