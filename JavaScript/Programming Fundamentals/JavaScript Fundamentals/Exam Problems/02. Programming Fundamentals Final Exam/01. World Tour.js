function solve(input) {
    // Hawai::Cyprys-Greece
    // Add Stop:7:Romez
    // Remove Stop:11:16
    // Switch:Hawai:Bulgaria
    // Travel

    // Hawai::RomeCyprys-Greece
    // Hawai::Rome-Greece
    // Bulgaria::Rome-Greece
    // Ready for world tour! Planned stops: Bulgaria::Rome-Greece
    let actions = {

        'Add Stop': add,
        'Remove Stop': remove,
        'Switch': replace

    }

    let result = input.shift();

    while (input[0] !== 'Travel') {

        let tokens = input.shift().split(':');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2]);
        console.log(result);
    }

    console.log(`Ready for world tour! Planned stops: ${result}`);

    function add(index, string) {
        // Add Stop:7:Rome
        // Add Stop:{index}:{string} – insert the given string at that index only if the index is valid
        index = Number(index);

        if (validateIndex(index)) {
            let left = result.substring(0, index);
            let right = result.substring(index);
            result = left + string + right;
        }
    }

    // Switch:{old_string}:{new_string} – if the old string is in the initial string, replace it with the new one. (all occurrences)
    // Note: After each command print the current state of the string

    function remove(startIndex, endIndex) {
        // Remove Stop:{start_index}:{end_index} – remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
        // Remove Stop:11:16
        // Hawai::Rome-Greece
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);

        if (validateIndex(startIndex) && validateIndex(endIndex)) {
            // Hawai::RomeCyprys-Greece index 11 index 16
            let left = result.substring(0, startIndex);
            let right = result.substring(endIndex + 1);
            result = left + right;
        }
    }

    function replace(oldString, newString) {
        // Switch:{old_string}:{new_string} – if the old string is in the initial string, replace it with the new one. (all occurrences)

        let pattern = new RegExp(oldString, 'g');
        result = result.replace(pattern, newString);
    }

    function validateIndex(index) {
        return (index >= 0) && (index < result.length);
    }
}
