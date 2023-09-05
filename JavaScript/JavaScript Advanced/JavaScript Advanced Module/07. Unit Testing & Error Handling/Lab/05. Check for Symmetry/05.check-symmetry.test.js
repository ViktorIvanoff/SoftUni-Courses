// Your tests will be supplied with a function named 'isSymmetric()'. It should meet the following requirements:

// •	Take an array as an argument
// •	Return false for any input that isn’t of the correct type
// •	Return true if the input array is symmetric
// •	Otherwise, return false

const { expect } = require('chai');
const { isSymmetric } = require('./05.check-symmetry.js');

describe('Symmetry Checker', () => {

    // always first we test the 'happy path' - all the easy cases
    it('works with symmetric numeric array', () => {

        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('return false for non-symmetric numeric array', () => {

        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

       // than we test the 'unhappy path'

    it('works with symmetric odd-length array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('works with symmetric string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    
    it('returns false for string param', () => {
        expect(isSymmetric('bas')).to.be.false;
    });

});


