function solve(input) {

    let counter = 0;
    let result = " ";
    let array = [];

    let firstLetter = input[0].charCodeAt(0);
    let secondLetter = input[1].charCodeAt(0);
    let skipped = input[2];


    for (let i = firstLetter; i <= secondLetter; i++) {

        for (let j = firstLetter; j <= secondLetter; j++) {

            for (let k = firstLetter; k <= secondLetter; k++) {

                let first = String.fromCharCode(i);

                let second = String.fromCharCode(j);

                let third = String.fromCharCode(k);

                if (first !== skipped && second !== skipped && third !== skipped) {

                    counter++;

                    result += (first + second + third) + " ";

                    array.push(first + second + third);

                }
            }

        }

    }

    array.push(counter);

    console.log(array.join(' '));

}