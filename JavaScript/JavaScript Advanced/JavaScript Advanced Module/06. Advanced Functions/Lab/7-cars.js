function solve(input) {
//     Write a closure that can create and modify objects. All created objects should be kept and be accessible by name. You should support the following functionality:

// •	create <name> - creates an object with the supplied <name>
// •	create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>

// •	set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.

// •	print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" - the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.

// The input will come as an array of strings - each string represents a command to be executed from your closure.

// For every print command - you should print on the console all properties of the object in the above-mentioned format.

    // create empty object for result
    const data = {};

    const commandProcessor = {

        create: (name, inherits, parentName) => {
// •	create <name> - creates an object with the supplied <name>
// •	create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>
            data[name] = inherits ? Object.create(data[parentName]) : {};

        },

        set: (name, key, value) => data[name][key] = value,
// •	set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.

        print: (name) => {
// •	print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" - the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.

            let entries = [];

            for (const key in data[name]) {

                entries.push(`${key}:${data[name][key]}`);

            }

           console.log(entries.join(','));
        }
    }


    // parse input
    input.forEach(x => {
        // 'create c2 inherit c1',
        const [command, name, key, value] = x.split(' ');
        // create commandProcessor object factory
        commandProcessor[command](name, key, value);

    });


// ['create c1',
// 'create c2 inherit c1',
// 'set c1 color red',
// 'set c2 model new',
// 'print c1',
// 'print c2']

// color:red
// model:new,color:red

}
solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);



