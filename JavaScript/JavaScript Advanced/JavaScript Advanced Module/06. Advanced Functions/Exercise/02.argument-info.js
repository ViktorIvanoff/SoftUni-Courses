function solve(...arguments) {
//     Write a function that displays information about the arguments which are passed to it (type and value) and a summary about the number of each type in the following format: 
//     `{argument type}: {argument value}`
//     Print each argument description on a new line. At the end print a tally with counts for each type in descending order, each on a new line in the following format:
//     `{type} = {count}`
//     If two types have the same count, use order of appearance. 
//     Do NOT print anything for types that do not appear in the list of arguments.
    
//     Print on the console the type and value of each argument passed into your function
    const data = {};

    arguments.forEach( (line) => {
        
        let type = typeof line;
        console.log(`${type}: ${line}`);

        if (data[type] === undefined) {
            data[type] = 0;
        }

        data[type]++;
    });

    // sorting keys descending
    let keys = Object.keys(data);
    keys.sort((a, b) => keys[b] - keys[a]);

    keys.forEach( (key) => {
        console.log(`${key} = ${data[key]}`);
    });

// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1
}
solve('cat', 42, function () { console.log('Hello world!'); });


