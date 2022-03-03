function solve(input) {
    // 134softsf5ftuni2020rockz42

    // Slice>>>3>>>7
    // Contains>>>-rock
    // Contains>>>-uni-
    // Contains>>>-rocks
    // Flip>>>Upper>>>2>>>8
    // Flip>>>Lower>>>5>>>11

    // Generate
    
//     134sf5ftuni2020rockz42
// Substring not found!
// Substring not found!
// Substring not found!
// 134SF5FTuni2020rockz42
// 134SF5ftuni2020rockz42
// Your activation key is: 134SF5ftuni2020rockz42

    let activationKey = input.shift();

    while (input[0] !== 'Generate') {

        let line = input.shift();
        let tokens = line.split('>>>');
        let command = tokens[0];
        // [ 'Slice', '2', '6' ]
        // [ 'Flip', 'Upper', '3', '14' ]
        // [ 'Flip', 'Lower', '5', '7' ]
        // [ 'Contains', 'def' ]
        // [ 'Contains', 'deF' 

        if (command === 'Contains') {

            let substring = tokens[1];

            if (activationKey.includes(substring)) {

                console.log(`${activationKey} contains ${substring}`);

            } else {
                console.log('Substring not found!');
            }

        } else if (command === 'Flip') {
            // Flip>>>Upper>>>3>>>14

            let portion = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);

            if (portion === 'Upper') {

                let toBeReplaced = activationKey.substring(startIndex, endIndex);
                let upperReplacement = toBeReplaced.toUpperCase();
                activationKey = activationKey.replace(toBeReplaced, upperReplacement);
                console.log(activationKey);

            } else {

                let toBeReplaced = activationKey.substring(startIndex, endIndex);
                let lowerReplacement = toBeReplaced.toLowerCase();
                activationKey = activationKey.replace(toBeReplaced, lowerReplacement);
                console.log(activationKey);

            }

        } else if (command === 'Slice') {

            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            let substring = activationKey.substring(startIndex, endIndex);
            activationKey = activationKey.replace(substring, '');
            console.log(activationKey);

        }
    }

    console.log(`Your activation key is: ${activationKey}`);

}