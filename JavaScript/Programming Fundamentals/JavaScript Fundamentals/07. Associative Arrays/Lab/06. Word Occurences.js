function solve(input) {

    // ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]

    // sentence -> 3 times
    // Here -> 2 times
    // is -> 2 times
    // the -> 2 times
    // first -> 1 times
    // another -> 1 times
    // And -> 1 times
    // finally -> 1 times
    // third -> 1 times
    let words = {};

    for (let line of input) {

        let word = line.split(", ");

        if (!words.hasOwnProperty(word)) {
            words[word] = 1;
        } else {
            words[word] += 1;
        }
    }

    // Object.keys(words).
    //     sort((a, b) =>
    //         b[1] - a[1]
    //     ).
    //     forEach((word) => {
    //         console.log(`${word} -> ${words[word]} times`);
    //     });

    let sorted = Object.entries(words).
        sort((a, b) =>
            b[1] - a[1]
        );

    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }


}