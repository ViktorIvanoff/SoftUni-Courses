function solve(matrix) {


    for (let row = 0; row < matrix.length; row++) {

        matrix[row] = matrix[row].split(' ').map(x => +x);
    }

    console.log(matrix)









}
solve([
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

// solve([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']
// ]);