function solve(text, word) {
    // A ***** sentence with some words

    while (text.includes(word)) {

        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text)
}