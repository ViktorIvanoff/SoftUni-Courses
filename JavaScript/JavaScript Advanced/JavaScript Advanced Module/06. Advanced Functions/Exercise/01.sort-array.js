function solve(numArr, criteria) {
    // Write a function that sorts an array with numeric values in ascending or descending order, depending on an argument that is passed to it. 
    // You will receive a numeric array and a string as arguments to the function in your code. 
    // •	If the second argument is asc, the array should be sorted in ascending order (smallest values first).
    // •	If it is desc, the array should be sorted in descending order (largest first).

    // The output should be the sorted array.

    if (criteria === 'asc') {

        numArr = numArr.sort((a, b) => a - b);
        return numArr;

    } else if (criteria === 'desc') {

        numArr = numArr.sort((a, b) => b - a);
        return numArr;
    }

    // [6, 7, 8, 14, 17]
    // [17, 14, 8, 7, 6]
}
solve([14, 7, 17, 6, 8], 'asc');

solve([14, 7, 17, 6, 8], 'desc');

