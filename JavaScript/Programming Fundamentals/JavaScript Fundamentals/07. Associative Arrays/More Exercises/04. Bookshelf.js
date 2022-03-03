function solve(input) {
    // '1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', 
    // '2 -> mystery', '3 -> sci-fi', 
    // 'Child of Silver: Bruce Rich, mystery', 
    // 'Hurting Secrets: Dustin Bolt, action', 
    // 'Future of Dawn: Aiden Rose, sci-fi', 
    // 'Lions and Rats: Gabe Roads, history', 
    // '2 -> romance', 
    // 'Effect of the Void: Shay B, romance', 
    // 'Losing Dreams: Gail Starr, sci-fi', 
    // 'Name of Earth: Jo Bell, sci-fi', 
    // 'Pilots of Stone: Brook Jay, history'

    let bookshelf = {};

    for (let line of input) {
        // 1 -> history

        if (line.includes(' -> ')) {
            createShelf(bookshelf, line);

        } else {
            // Death in Time: Criss Bell, mystery
            createBook(bookshelf, line);
        }
    }

    function createShelf(bookshelf, line) {
        // 1 -> history
        let [id, genre] = line.split(' -> ');

        if (bookshelf[id] === undefined) {

            bookshelf[id] = {
                genre,
                books: []
            }
        }
    }

    function createBook(bookshelf, line) {
        // Death in Time: Criss Bell, mystery
        // "{book title}: {book author}, {book genre}

        let [title, rest] = line.split(': ');
        let [author, genre] = rest.split(', ');

        let shelf = Object.entries(bookshelf).
            find(([id, b]) => b.genre === genre);

        if (shelf !== undefined) {

            shelf[1].books.push(

                {
                    title,
                    author
                }

            );
        }
    }

    let sortedShelves = Object.entries(bookshelf).
        sort(sortingShelves);

    function sortingShelves(a, b) {

        let countA = a[1].books.length;
        let countB = b[1].books.length;

        return countB - countA;
    }

    for (let [id, shelf] of sortedShelves) {

        console.log(`${id} ${shelf.genre}: ${shelf.books.length}`);

        let sortedBooks = shelf.books.sort((a, b) => a.title.localeCompare(b.title));

        for (let book of sortedBooks) {

            console.log(`--> ${book.title}: ${book.author}`);
        }
    }

    // 3 sci-fi: 3
    // --> Future of Dawn: Aiden Rose
    // --> Losing Dreams: Gail Starr
    // --> Name of Earth: Jo Bell
    // 1 history: 2
    // --> Lions and Rats: Gabe Roads
    // --> Pilots of Stone: Brook Jay
    // 2 mystery: 1
    // --> Child of Silver: Bruce Rich

    //     sort the shelfs by count of books in it in descending. For each shelf sort the books by title in ascending. Then print them in the following format
    // "{shelfOne id} {shelf genre}: {books count}
    // --> {bookOne title}: {bookOne author}
    // --> {bookTwo title}: {bookTwo author}
    // …
    // {shelfTwo id} {shelf genre}: {books count}

}