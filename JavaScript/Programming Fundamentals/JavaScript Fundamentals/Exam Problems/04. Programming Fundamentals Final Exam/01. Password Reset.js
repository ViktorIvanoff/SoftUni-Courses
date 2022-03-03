function solve(input) {
    // 'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
    //     'TakeOdd',
    //     'Cut 15 3',
    //     'Substitute :: -',
    //     'Substitute | ^',
    //     'Done'

    // icecream::hot::summer
    // icecream::hot::mer
    // icecream-hot-mer
    // Nothing to replace!
    // Your password is: icecream-hot-mer

    let password = input.shift();

    while (input[0] !== 'Done') {

        let line = input.shift(' ');
        let [command, ...tokens] = line.split(' ');

        if (command === 'TakeOdd') {

            password = [...password].
                filter((el, index) => index % 2 !== 0).
                join('');

            console.log(password);

        } else if (command === 'Cut') {
            let index = Number(tokens[0]);
            let length = Number(tokens[1]);

            let substring = password.substring(index, index + length);
            password = password.replace(substring, '');
            console.log(password);

        } else if (command === 'Substitute') {

            let substring = tokens[0];
            let substitute = tokens[1];

            if (password.includes(substring)) {

                password = password.replace(new RegExp(`${substring}`, 'g'), substitute);
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }

    }
    console.log(`Your password is: ${password}`);
}