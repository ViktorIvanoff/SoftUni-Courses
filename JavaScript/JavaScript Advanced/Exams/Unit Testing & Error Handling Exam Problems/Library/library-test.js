const { expect } = require('chai');
const { library } = require('./library');

// •	calcPriceOfBook (nameOfBook, year) - A function that accepts a string and a number:
// o	The function calculates the price of the book depending on the year of publication
// o	The standard price of the book is 20 BGN
// o	If the year of publication is less than or equal to 1980, there is a 50% percent discount from the standard price
// o	The function calculated price of the book and return: `Price of {nameOfBook} is {price}`
// o	You need to validate the input, if nameOfBook is not a string, or the year is not an integer number, throw an error: "Invalid input"

// •	findBook (booksArr, desiredBook)- A function that accepts an array and string:
// o	The array includes all available books in the library (["Troy", "Life Style", "Torronto", etc.])
// o	If the length of the booksArr array is zero, throw an error in the following format: "No books currently available"
// o	The function checks whether the submitted string desiredBook is present in the array booksArr.
// o	If present in the array, the function return: "We found the book you want."
// o	Otherwise the function return: "The book you are looking for is not here!"
// o	There is no need for validation for the input, you will always be given an array and string

// •	arrangeTheBooks (countBooks) - A function accept a number:
// o	You need to validate the input, if the countBooks is not an integer number, or is a negative number, throw an error: "Invalid input"
// o	The library has 5 shelves, each shelf can hold 8 books. Distribute the books on the shelves
// o	If all the books are arranged on the shelves, return: "Great job, the books are arranged."
// o	Otherwise, if no space has been reached, return: "Insufficient space, more shelves need to be purchased."

describe('Library Tests', () => {
    describe('calcPriceOfBook tests', () => {
        // calcPriceOfBook(nameOfBook, year) {

        //     let price = 20;
      
        //     if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
        //         throw new Error("Invalid input");
      
        //     } else if (year <= 1980) {
      
        //         let total = price - (price * 0.5);
        //         return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
      
        //     }
      
        //     return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
        it('invalid input', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('1', '1')).to.throw('Invalid input');
        });

        it('year is less than or equal to 1980', () => {
            expect(library.calcPriceOfBook('Book of Life', 1979)).to.equal(`Price of Book of Life is 10.00`);
            expect(library.calcPriceOfBook('Book of Life', 1980)).to.equal(`Price of Book of Life is 10.00`);
        });

        it('year is greater than 1980', () => {
            expect(library.calcPriceOfBook('Book of Life', 1981)).to.equal(`Price of Book of Life is 20.00`);
        });
    });

    describe('findBook tests', () => {
        // findBook: function(booksArr, desiredBook) {

        //     if (booksArr.length == 0) {
      
        //         throw new Error("No books currently available");
      
        //     } else if (booksArr.find(e => e == desiredBook)) {
      
        //         return "We found the book you want.";
      
        //     } else {
      
        //         return "The book you are looking for is not here!";
        //     }
      
        // },

        it('array length is 0', () => {
            expect(() => library.findBook([], 'Book of Life')).to.throw('No books currently available');
        });

        it('should find the book if desired book is the second argument', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto')).to.equal('We found the book you want.');
        });

        it('shouldn\'t find the book if desired book is not the second argument', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Book of Life')).to.equal('The book you are looking for is not here!');
        });

    });

    describe('arrangeTheBooks tests', () => {
        // arrangeTheBooks(countBooks) {

        //     const countShelves = 5;
        //     const availableSpace = countShelves * 8;
      
        //     if (!Number.isInteger(countBooks) || countBooks < 0) {
      
        //         throw new Error("Invalid input");
      
        //     } else if (availableSpace >= countBooks) {
      
        //         return "Great job, the books are arranged.";
      
        //     } else {
        //         return "Insufficient space, more shelves need to be purchased.";
        //     }
        // }
        it('invalid arguments', () => {
            expect(() => library.arrangeTheBooks('string')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });

        it('works when available space is more than count of books', () => {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        });

        it('works when available space is equal to count of books', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        
        it(' doesn\'t work when available space is less than count of books', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});