const { expect } = require('chai');
const { sum } = require('./04.sum-of-numbers');

describe('Sum checker', () => {
    it('works with an array of numbers', () => {
         expect(sum([5, 6])).to.equal(11);
    });

    it('works with negative numbers', () => {
         expect(sum([-5, 6, -4])).to.equal(-3);
    });

    it('works with just one number', () => {
         expect(sum([10])).to.equal(10);
    });
});


