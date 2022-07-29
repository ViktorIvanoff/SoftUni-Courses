function solve(array) {
    
    let numbers = [];

    for (let i = 0; i < array.length; i++) {

        if (Number(array[i])) {

            numbers.push(Number(array[i]));
        } else {

            calculation(numbers, array[i]);
        }
    }



    if (numbers.length >= 2) {

        console.log('Error: too many operands!');
        
    } else if (numbers.length !== 0) {

        console.log(numbers.toString());
    }

    function calculation(numbers, operator) {

        if (numbers.length < 2) {
            console.log('Error: not enough operands!');
        }

        if (operator === '+') {

            numbers[numbers.length - 2] = numbers[numbers.length - 2] + numbers[numbers.length - 1];
            numbers.splice(-1, 1);

        } else if (operator === '-') {

            numbers[numbers.length - 2] = numbers[numbers.length - 2] - numbers[numbers.length - 1];
            numbers.splice(-1, 1);

        } else if (operator === '*') {

            numbers[numbers.length - 2] = numbers[numbers.length - 2] * numbers[numbers.length - 1];
            numbers.splice(-1, 1);

        } else if (operator === '/') {
            
            numbers[numbers.length - 2] = numbers[numbers.length - 2] / numbers[numbers.length - 1];
            numbers.splice(-1, 1);
        }
    }
}
// solve([3,
//     4,
//     '+']);

// solve([5,
//     3,
//     4,
//     '*',
//     '-']);

// solve([7,
//     33,
//     8,
//     '-']);

solve([15,
    '/']);