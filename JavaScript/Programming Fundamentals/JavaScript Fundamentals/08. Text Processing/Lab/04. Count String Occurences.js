function solve(text, wordToSearch) {

    let counter = 0;
    let searchWord = ` ${wordToSearch} `;

    let indexOfWordToSearch = text.indexOf(searchWord);

    while (indexOfWordToSearch !== -1) {
    
        counter++;
        indexOfWordToSearch = text.indexOf(searchWord, indexOfWordToSearch + 1);
    }

    if (text.startsWith(searchWord.trim())) {
        counter++;
    }

    if (text.endsWith(searchWord.trim())) {
        counter++;
    }


    console.log(counter);
}