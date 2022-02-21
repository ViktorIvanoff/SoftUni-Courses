function solve(input) {

    let index = 2;
    let name = input[0];
    let password = input[1];
    let inputPassword = input[index];

    while (true) {

        inputPassword = input[index];

        if (inputPassword === password) {

            console.log(`Welcome ${name}!`);

            break;
        }

        index++;

    }

}