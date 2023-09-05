const { expect } = require('chai');
const { createCalculator } = require('./07.add-subtract');

// •	Return a module (object), containing the functions add(), subtract() and get() as properties
// •	Keep an internal sum that can’t be modified from the outside
// •	The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
// •	The function get() returns the value of the internal sum

describe('Calculator', () => {

    // function createCalculator() {
    //     let value = 0;
    
    //     return {
    //         add: function(num) { value += Number(num); },
    //         subtract: function(num) { value -= Number(num); },
    //         get: function() { return value; }
    //     }
    
    // }

    it('the methods of the calculator are functions', () => {
        let calc = createCalculator();
        expect(typeof calc.add).to.equal('function');
        expect(typeof calc.get).to.equal('function');
        expect(typeof calc.subtract).to.equal('function');
    });


    it('the calculator doesnt work with params that are not numbers', () => {
        let calc = createCalculator();
        expect(calc.add('z')).to.be.undefined;
        expect(calc.subtract([1, 'a'])).to.be.undefined;

    });


    it('the add function works properly', () => {
        let calc = createCalculator()
        calc.add('5')
        expect(calc.get()).to.equal(5);   
    });

    it('the value cant be modified from outside', () => {
        let calc = createCalculator()
        expect(calc.value += 4).to.be.NaN;
    });


    it('the return value of the calculator is an object', () => {
        let calc = createCalculator();
        expect(typeof calc).to.equal('object');
    });

    it('check if calculator value cant be accessed', () => {
        let calc = createCalculator();
        expect(calc.value).to.be.undefined;
    })
});