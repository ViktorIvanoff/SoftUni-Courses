function solve(input) {
    // 'Gold|Silver|Bronze|Medallion|Cup',
    // 'Loot Wood Gold Coins',
    // 'Loot Silver Pistol',
    // 'Drop 3',
    // 'Steal 3',
    // 'Yohoho!'

    //   output: 
    // Medallion, Cup, Gold
    // Average treasure gain: 5.40 pirate credits.
    let chest = input.shift().split("|");
    let average = 0;

    for (let line of input) {

        if (line === "Yohoho!") {
            break;
        }

        let [command, ...items] = line.split(" ");

        if (command === "Loot") {

            for (let item of items) {

                if (!chest.includes(item)) {
                    chest.unshift(item);
                }

            }

        } else if (command === "Drop") {

            let index = Number(items[0]);

            if (index !== -1) {
                let dropped = chest.splice(index, 1);
                chest.push(...dropped);
            }

        } else if (command === "Steal") {

            let count = Number(items[0]);
            let stolen = chest.slice(-count);
            chest.splice(-count);
            console.log(stolen.join(", "));

        }

    }

    average = chest.reduce((sum, chest) => sum + chest.length, 0) / chest.length;

    if (chest.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }

}