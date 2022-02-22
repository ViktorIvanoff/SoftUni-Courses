function solve(input) {

    let index = 1;
    let favouriteBook = input[0];
    let bookCounter = 0;

    while (input[index] !== "No More Books") {

        let currentBook = input[index];

        if (currentBook === favouriteBook) {

            console.log(`You checked ${bookCounter} books and found it.`);

            break;

        }

        bookCounter++;
        index++;

    }

    if (input[index] === "No More Books") {

        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);

    }

}