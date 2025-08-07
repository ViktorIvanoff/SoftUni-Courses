
function wordTracker(input) { 
    let wordsToCount = input.shift().split(" ");

    const words = {};
    for (let word of wordsToCount) {
        words[word] = 0;
    }

    for (let word of input) {
        if(words.hasOwnProperty(word)) {
            words[word]++;
        }
    }

    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for(let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}
wordTracker([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);