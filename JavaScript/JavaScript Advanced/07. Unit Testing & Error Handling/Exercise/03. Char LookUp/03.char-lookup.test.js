const { expect } = require('chai');
const { lookupChar } = require('./03.char-lookup');

describe('Char Lookup', () => {
//     •	lookupChar(string, index) - accepts a string and an integer (the index of the char we want to lookup) :
// o	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
// o	If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
// o	If both parameters have correct types and values - return the character at the specified index in the string.

// function lookupChar(string, index) {

//     if (typeof(string) !== 'string' || !Number.isInteger(index)) {
//         return undefined;
//     }

//     if (string.length <= index || index < 0) {
//         return "Incorrect index";
//     }

//     return string.charAt(index);
// }
    it('check if returns undefined with a array and string', () => {

        expect(lookupChar([24, 24], 'zero')).to.be.undefined;
    });

    it('check if returns undefined with two number params', () => {

        expect(lookupChar(24, 9)).to.be.undefined;
    });

    it('check if returns undefined with a number and an array', () => {

        expect(lookupChar(53, ['zero'])).to.be.undefined;
    });

    it('check if returns undefined with a number and an array', () => {

        expect(lookupChar('hero', {})).to.be.undefined;
    });

    it('check if returns undefined with no args passed', () => {

        expect(lookupChar()).to.be.undefined;
    });

    it('check if throws an error with a negative index', () => {

        expect(lookupChar('xerox', -4)).to.equal('Incorrect index');
    });

    it('check if returns undefined with a floating point number', () => {

        expect(lookupChar('xerox', 1.35)).to.be.undefined;
    });

    it('check if throws an error with an out of bound index', () => {

        expect(lookupChar('xerox', 7)).to.equal('Incorrect index');
    });

    
    it('check if function works properly', () => {
        expect(lookupChar('xerox', 1)).to.equal('e');
        expect(lookupChar('xerox', 3)).to.equal('o');
    });

    it('check if function works properly one more time', () => {
        expect(lookupChar('i', 0)).to.equal('i');
        expect(lookupChar('zeroxx', 5)).to.equal('x');
        expect(lookupChar('England', 0)).to.equal('E');

    });

});