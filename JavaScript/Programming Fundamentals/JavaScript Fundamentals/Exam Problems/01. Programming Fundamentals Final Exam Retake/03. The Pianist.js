function solve(input) {
    // '3',
    // 'Fur Elise|Beethoven|A Minor',
    // 'Moonlight Sonata|Beethoven|C# Minor',
    // 'Clair de Lune|Debussy|C# Minor',

    // 'Add|Sonata No.2|Chopin|B Minor',
    // 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    // 'Add|Fur Elise|Beethoven|C# Minor',
    // 'Remove|Clair de Lune',
    // 'ChangeKey|Moonlight Sonata|C# Major',

    // 'Stop'
    let songs = {};
    let pieces = Number(input.shift());

    // Fur Elise|Beethoven|A Minor'
    // {piece}|{composer}|{key}

    for (let i = 0; i < pieces; i++) {

        let [name, composer, key] = input.shift().split('|');

        if (!songs.hasOwnProperty(name)) {

            songs[name] = {
                composer,
                key
            }
        }
    }

    // {
    //     'Fur Elise': { composer: 'Beethoven', key: 'A Minor' },
    //     'Moonlight Sonata': { composer: 'Beethoven', key: 'C# Minor' },
    //     'Clair de Lune': { composer: 'Debussy', key: 'C# Minor' }
    //   }

    //      Add|Sonata No.2|Chopin|B Minor',
    // 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    // 'Add|Fur Elise|Beethoven|C# Minor',
    // 'Remove|Clair de Lune',
    // 'ChangeKey|Moonlight Sonata|C# Major',

    for (let line of input) {

        if (line === 'Stop') {
            break;
        }

        let tokens = line.split('|');
        let command = tokens[0];

        if (command === 'Add') {
            // •	Add|{piece}|{composer}|{key} 
            // Add|Sonata No.2|Chopin|B Minor',
            // o	You need to add the given piece with the information about it to the other pieces
            // o	If the piece is already in the collection, print:
            // "{piece} is already in the collection!"
            // o	If the piece is not in the collection, print: 
            // "{piece} by {composer} in {key} added to the collection!"
            let name = tokens[1];
            let composer = tokens[2];
            let key = tokens[3];

            if (songs[name] === undefined) {

                songs[name] = {
                    composer,
                    key
                }

                console.log(`${name} by ${composer} in ${key} added to the collection!`);

            } else {

                console.log(`${name} is already in the collection!`);
            }

        } else if (command === 'Remove') {
            // •	Remove|{piece}
            // o	If the piece is in the collection, remove it and print:
            // "Successfully removed {piece}!"
            // o	If the piece is not in the collection, print:
            // "Invalid operation! {piece} does not exist in the collection."
            let name = tokens[1];

            if (songs[name] !== undefined) {

                delete songs[name];

                console.log(`Successfully removed ${name}!`);

            } else {

                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {
            // •	ChangeKey|{piece}|{new key}
            // o	If the piece is in the collection, change its key with the given one and print:
            // "Changed the key of {piece} to {new key}!"
            // o	If the piece is not in the collection, print:
            // "Invalid operation! {piece} does not exist in the collection."
            let name = tokens[1];
            let newKey = tokens[2];

            if (songs[name] !== undefined) {

                songs[name].key = newKey;

                console.log(`Changed the key of ${name} to ${newKey}!`);

            } else {

                console.log(`Invalid operation! ${name} does not exist in the collection.`);

            }
        }
    }

    let sorted = Object.entries(songs)
        .sort(sortingSongs);

    function sortingSongs(a, b) {

        let nameA = a[0];
        let nameB = b[0];

        let composerA = a[1].composer;
        let composerB = b[1].composer;

        return nameA.localeCompare(nameB) || composerA.localeCompare(composerB);

    }
    // [
    //     [ 'Fur Elise', { composer: 'Beethoven', key: 'A Minor' } ],
    //     [ 'Moonlight Sonata', { composer: 'Beethoven', key: 'C# Major' } ],
    //     [ 'Sonata No.2', { composer: 'Chopin', key: 'B Minor' } ],
    //     [ 'Hungarian Rhapsody No.2', { composer: 'Liszt', key: 'C# Minor' } ]
    //   ]

    for (let [key, value] of sorted) {

        console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`);

    }

    // Spring by Vivaldi in E Major added to the collection!
    // Successfully removed The Marriage of Figaro!
    // Invalid operation! Turkish March does not exist in the collection.
    // Changed the key of Spring to C Major!
    // Nocturne by Chopin in C# Minor added to the collection!
    // Eine kleine Nachtmusik -> Composer: Mozart, Key: G Major
    // Hungarian Dance No.5 -> Composer: Brahms, Key: G Minor
    // La Campanella -> Composer: Liszt, Key: G# Minor
    // Nocturne -> Composer: Chopin, Key: C# Minor
    // Spring -> Composer: Vivaldi, Key: C Major
    
}