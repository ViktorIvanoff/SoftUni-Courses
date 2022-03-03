function solve(input) {
    // 'heVVodar!gniV',

    // 'ChangeAll:|:V:|:l',
    // 'Reverse:|:!gnil',
    // 'InsertSpace:|:5',

    // 'Reveal'

    // hellodar!gnil
    // hellodarling!
    // hello darling!
    // You have a new text message: hello darling!
    let actions = {

        'ChangeAll': changeAll,
        'Reverse': reverse,
        'InsertSpace': insertSpace
    }

    let message = input.shift();

    while (input[0] !== 'Reveal') {

        let tokens = input.shift().split(':|:');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2]);

    }


    function insertSpace(index) {
        // •	InsertSpace:|:{index}
        // o	Inserts a single empty space at the given index. The given index will always be valid.
        index = Number(index);

        if (index >= 0 && index < message.length) {
            // hellodarling!
            let left = message.substring(0, index);
            let right = message.substring(index);
            message = left + ' ' + right;
            console.log(message);
        }
    }

    function reverse(substring) {
        // •	Reverse:|:{substring}
        // o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
        // o	If not, print "error". 
        // o	This operation should replace only the first occurrence of the given substring if there are more than one such occurrences.
        // hellodarling!

        if (message.includes(substring)) {

            message = message.replace(substring, '');
            let reversed = substring.split('').reverse().join('');
            message = message.concat(reversed);
            console.log(message);
        } else {
            console.log('error');
        }
    }


    function changeAll(substring, replacement) {
        // •	ChangeAll:|:{substring}:|:{replacement} 
        // o	Changes all occurrences of the given substring with the replacement text.
        // 'ChangeAll:|:V:|:l',
        // hellodar!gnil
        let pattern = new RegExp(substring, 'g');
        message = message.replace(pattern, replacement);
        console.log(message);
    }

    console.log(`You have a new text message: ${message}`);

}