function solve(input) {

    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let mirrorWords = [];
    let matches = [...input.shift().matchAll(pattern)];

    for (let match of matches) {

        let firstWord = match[2];
        let secondWord = match[3];

        let secondReversed = secondWord.split('').reverse().join('');

        if (firstWord === secondReversed) {
            mirrorWords.push(firstWord + ' <=> ' + secondWord);
        }
    }

    if (matches.length <= 0) {

        console.log("No word pairs found!");
        console.log("No mirror words!");

    } else {

        console.log(`${matches.length} word pairs found!`);

        if (mirrorWords.length > 0) {

            console.log("The mirror words are:");
            console.log(`${mirrorWords.join(', ')}`);

        } else {

            console.log("No mirror words!");
        }
    }
    // •	If you find valid pairs print their count: "{valid pairs count} word pairs found!"
    // •	If there are no mirror words print: "No mirror words!"
    // •	If there are mirror words print:
    // "The mirror words are:
    // {wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, 

    // 5 word pairs found!
    // The mirror words are:
    // Part <=> traP, leveL <=> Level, sAw <=> wAs
}