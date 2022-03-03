function solve([input]) {

    let coolEmojis = [];
    let threshold = 1;

    let digits = input.match(/\d/g).map(Number);

    for (let digit of digits) {
        threshold *= digit;
    }

    let emojis = input.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g);

    if (digits !== null) {
        // calculate coolness

        for (let emoji of emojis) {
            let coolness = 0;
            let slicedEmojis = emoji.slice(2, -2);

            for (let char of slicedEmojis) {
                coolness += char.charCodeAt(0);
            }

            if (coolness >= threshold) {
                coolEmojis.push(emoji);
            }
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojis ? emojis.length : 0} emojis found in the text. The cool ones are:`);

    for (let emoji of coolEmojis) {
        console.log(emoji);
    }

}