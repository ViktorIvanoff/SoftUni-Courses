function solve(input) {

    // +359 2 222 2222, +359-2-222-2222

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let match = pattern.exec(input);
    let result = [];

    while (match !== null) {

        result.push(match[0]);

        match = pattern.exec(input);
    }

    console.log(result.join(', '));

}