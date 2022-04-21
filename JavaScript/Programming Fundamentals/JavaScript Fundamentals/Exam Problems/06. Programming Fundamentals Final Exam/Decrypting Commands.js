function solve(input) {
    // ["ILikeSoftUni",

    // "Replace I We",
    // "Make Upper",
    // "Check SoftUni",
    // "Sum 1 4",
    // "Cut 1 4",

    // "Finish"]

    // WeLikeSoftUni
    // WELIKESOFTUNI
    // Message doesn't contain SoftUni
    // 293
    // WESOFTUNI

    let result = input.shift();

    while (input[0] !== 'Finish') {

        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if (command === 'Replace') {

            replace(tokens[1], tokens[2]);
            console.log(result);

        } else if (command === 'Make') {

            make(tokens[1]);
            console.log(result);

        } else if (command === 'Check') {

            check(tokens[1]);

        } else if (command === 'Sum') {

            sum(tokens[1], tokens[2]);

        } else if (command === 'Cut') {

            cut(tokens[1], tokens[2]);


        }
    }

    function replace(currentChar, newChar) {
        // replace {current} {new} replace all ocurrances of the current char with the new char, then print message

        let pattern = new RegExp(currentChar, 'g');
        result = result.replace(pattern, newChar);

        // WeLikeSoftUni
    }

    function cut(startIndex, endIndex) {
        // cut {startIndex} {endIndex} remove the substring from startIndex until the endIndex (BOTH INCLUSIVE), then print 
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        // WESOFTUNI = we need to cut 'LIKE'

        if (startIndex >= 0 && endIndex < result.length) {

            let firstHalf = result.substring(0, startIndex);
            let secondHalf = result.substring(endIndex + 1);
            result = firstHalf + secondHalf;
            console.log(result);

        } else {
            console.log('Invalid indices!');
        }
    }

    function make(arg) {
        // make {upper/lower} - replace ALL letters with upper/lower case and print 
        if (arg === 'Upper') {

            result = result.toUpperCase();

        } else if (arg === 'Lower') {

            result = result.toLowerCase();
        }
    }

    function check(string) {
        // check {string} = if message contains the given string, print 'Message contains ${string}', otherwise print 'Message doesn't contain ${string}'.
        if (result.includes(string)) {
            console.log(`Message contains ${string}`);
        } else {
            console.log(`Message doesn't contain ${string}`);
        }
        // Message doesn't contain SoftUni
    }


    function sum(startIndex, endIndex) {
        // sum {startIndex} {endIndex} = get substring from StartIndex to the endIndex (BOTH INCLUSIVE) and print the sum of the ASCII values of the substring.
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        // Sum 1 4
        // M essa ge doesn't contain SoftUni
        // let wordToCalculate = 'Mes';

        if (startIndex >= 0 && endIndex < result.length) {

            let substring = result.substring(startIndex, endIndex + 1);
            let total = 0;

            for (let char of substring) {
                total += char.charCodeAt();
            }
            // 77 + 101 + 115 + 115 + 97 != 293 z(sum of the ASCII codes of indices 0 up to 2 inclusive, not indices 1 to 4 inclusive)
            console.log(total);

        } else {

            console.log('Invalid indices!');

        }
        // 293
    }
    // If any of the given indexes are invalid, print 'Invalid indices!' (invalid index is when it is positive and less than the siez of the collection)
}
// solve(["ILikeSoftUni",
//     "Replace I We",
//     "Make Upper",
//     "Check SoftUni",
//     "Sum 1 4",
//     "Cut 1 4",
//     "Finish"]);

solve(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"
]);