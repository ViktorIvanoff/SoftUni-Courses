function arrayManipulator(input) {

    //'23 -2 321 87 42 90 -123', 'swap 1 3','swap 3 6','swap 1 0',
    // 'multiply 1 2','multiply 2 1','decrease','end'
    let array = input.shift().split(' ').map(Number);
    let inputLine = input.shift();

    while (inputLine !== "end") {

        let tokens = inputLine.split(' ');
        let command = tokens[0];
        let first = +tokens[1];
        let second = +tokens[2];

        let sum = 0;

        if (command === "swap") {

            [array[first], array[second]] = [array[second], array[first]];

        } else if (command === "multiply") {

            sum = (array[first] * array[second]);
            array.splice(first, 1, sum);

        } else if (command === "decrease") {

            array.map(function (element) {
                return element - 1;
            });
        }

        inputLine = input.shift();
    }
    return array.join(', ');
}
console.log(arrayManipulator(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']));