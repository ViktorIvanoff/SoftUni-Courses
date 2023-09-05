describe('Book Selection tests', () => {
    // isGenreSuitable(genre, age) {

    //     if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
    //       return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    //     } else {
    //       return `Those books are suitable`;
    //     }
    //   },

//     isGenreSuitable (genre, age) - A function that accepts two parameters: string and number.
// o	If the value of the string genre is equal to "Thriller" or "Horror" and the value of age is less or equal to 12, 
// return: `Books with ${genre} genre are not suitable for kids at ${age} age`
// o	Otherwise, if the above conditions are not met, return the following message:
//       `Those books are suitable`
// o	There is no need for validation for the input, you will always be given string and number.

    describe('isGenreSuitable', () => {

        it('happy path', () => {
            // age is more than 12 and genre is thriller or horror
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('aa', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('aa', 10)).to.equal('Those books are suitable');
        });

        it('age not suitable for genre', () => {
            // age is less than or equal 12 and genre is thriller or horror
            expect(bookSelection.isGenreSuitable('Thriller', 8)).to.equal('Books with Thriller genre are not suitable for kids at 8 age');
            expect(bookSelection.isGenreSuitable('Horror', 8)).to.equal('Books with Horror genre are not suitable for kids at 8 age');
        });

        it('age not suitable for genre, edge case', () => {
            // age is less than or equal 12 and genre is thriller or horror
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
        });

    });

    describe('isItAffordable', () => {
// •	isItAffordable (price, budget) - A function that accepts two parameters: number and number.
// o	You need to calculate if you can afford buying the book by subtracting the price of the book from your budget.
// o	If the result is lower than 0, return: 
// "You don't have enough money"
// o	Otherwise, if the above conditions are not met, return the following message:
// `Book bought. You have ${result}$ left`
// o	You need to validate the input, if the price and budget are not a number, throw an error: "Invalid input".
        it('happy path', () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal('Book bought. You have 1$ left')
        });

        it('happy path, edge case', () => {
            expect(bookSelection.isItAffordable(1, 1)).to.equal('Book bought. You have 0$ left')
        });

        it('not enough money case', () => {
            expect(bookSelection.isItAffordable(1, 0)).to.equal('You don\'t have enough money');
        });
    
        it('invalid input', () => {
            expect( () => bookSelection.isItAffordable(1, '0')).to.throw();
            expect( () => bookSelection.isItAffordable('1', 0)).to.throw();
            expect( () => bookSelection.isItAffordable('1', '0')).to.throw();
        });

    });

    describe('suitableTitles', () => {
// •	suitableTitles (books, wantedGenre) - A function that accepts an array and string.
// o	The books array will store the titles and the genre of its books ([{ title: "The Da Vinci Code", genre: "Thriller" }, ...])
// o	You must add the title of the book that its genre is equal to the wantedGenre.
// o	Finally, return the changed array of book titles.
// o	There is a need for validation for the input, an array and string may not always be valid. In case of submitted invalid parameters, throw an error "Invalid input":
// 	If passed books parameter is not an array.
// 	If the wantedGenre is not a string.

        it('happy path, single match', () => {

            expect(bookSelection.suitableTitles([{
                    title: 'aa',
                    genre: 'a'
            }], 'a')).to.deep.equal(['aa']);
        });

        it('happy path, two matches', () => {

            expect(bookSelection.suitableTitles([{
                    title: 'aa',
                    genre: 'a'
            },
            {
                title: 'aa',
                genre: 'a'
        }
     ], 'a')).to.deep.equal(['aa', 'aa']);
        });

        it('no matches', () => {

            expect(bookSelection.suitableTitles([{
                    title: 'bb',
                    genre: 'b'
            }], 'a')).to.deep.equal([]);
        });

        it('invalid input', () => {

            expect( () => bookSelection.suitableTitles('string', 'title')).to.throw();
            expect( () => bookSelection.suitableTitles('string', [])).to.throw();
            expect( () => bookSelection.suitableTitles([], 7)).to.throw();
        })

    });

});