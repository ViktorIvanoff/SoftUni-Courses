function solve(input) {

    // Ivan Ivanov Test Testov

    let pattern = /\b[A-Z][a-z]+ [A-Z]+[a-z]+\b/g;
    let match = pattern.exec(input);
    let result = [];

    while (match !== null) {

        result.push(match);
        match = pattern.exec(input);
    }

    console.log(result.join(' '));

}