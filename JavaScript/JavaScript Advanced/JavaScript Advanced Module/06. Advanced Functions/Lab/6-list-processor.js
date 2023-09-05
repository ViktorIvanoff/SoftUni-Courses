function solve(input) {
// Using a closure, create an inner object to process list commands. The commands supported should be the following:
// •	add <string> - adds the following string in an inner collection.
// •	remove <string> - removes all occurrences of the supplied <string> from the inner collection.
// •	print - prints all elements of the inner collection joined by ",".

// The input will come as an array of strings - each string represents a command to be executed from the command execution engine.

// For every print command - you should print on the console the inner collection joined by ",".
    let list = [];

    function add(str) {

        list.push(str);
    }

    function remove(str) {

        list = list.filter(x => x !== str);

    }

    function print() {

        console.log(list.join(','));

    }


    for (let el of input) {

        [command, word] = el.split(' ');

        if (command === 'add') {

            add(word);

        } else if (command === 'remove') {

            remove(word);

        } else if (command === 'print') {

            print();
        }
    }

}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

// solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);






