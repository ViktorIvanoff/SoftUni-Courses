function solve(input) {
    // zzHe
    // ChangeAll|z|l
    // Insert|2|o
    // Move|3
    // Decode
    let message = input.shift();
    // •	Move {number of letters}
    // o	Moves the first n letters to the back of the string. 
    // •	Insert {index} {value}
    // o	Inserts the given value before the given index in the string.
    // •	ChangeAll {substring} {replacement} 
    // o	Changes all occurrences of the given substring with the replacement text.

    while (input[0] !== 'Decode') {

        let tokens = input.shift().split('|');
        let command = tokens[0];

        if (command === 'Move') {

            let index = Number(tokens[1]);
            let left = message.substring(0, index);
            let right = message.substring(index);
            message = right + left;

        } else if (command === 'Insert') {

            let index = Number(tokens[1]);
            let value = tokens[2];
            let left = message.substring(0, index);
            let right = message.substring(index);
            message = left + value + right;

        } else if (command === 'ChangeAll') {

            let substring = tokens[1];
            let replacement = tokens[2];

            message = message.split(substring).join(replacement);
        }
    }
    console.log(`The decrypted message is: ${message}`);
    // The decrypted message is: howareyou?
}