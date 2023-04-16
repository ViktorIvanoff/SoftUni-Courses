const { expect } = require('chai');
const { mathEnforcer } = require('./04.math-enforcer');

// •	addFive(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, add 5 to it, and return the result.
// •	subtractTen(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, subtract 10 from it, and return the result.
// •	sum(num1, num2) - A function that accepts two parameters:
// o	If any of the 2 parameters is NOT a number, the function should return undefined.
// o	If both parameters are numbers, the function should return their sum. 

// let mathEnforcer = {

//     addFive: function (num) {

//         if (typeof(num) !== 'number') {
//             return undefined;
//         }

//         return num + 5;
//     },

//     s

//     sum: function (num1, num2) {

//         if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
//             return undefined;
//         }

//         return num1 + num2;
//     }
// };

describe('Math Enforcer function tests', () => {

    describe('addFive function tests', () => {

        it('should return undefined with a string', () => {
            expect(mathEnforcer.addFive('somestring')).to.be.undefined;
        });

        it('should return undefined with an object', () => {
            expect(mathEnforcer.addFive({ name: 'Peter' })).to.be.undefined;
        });

        it('should return undefined with an array', () => {
            expect(mathEnforcer.addFive([ 'ponne', 9004 ])).to.be.undefined;
        });

        it('should return undefined with an undefined', () => {
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        });

        it('check if addFive sums properly', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it('check if addFive works with a negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('check if addFive works with a floating point number', () => {
            expect(mathEnforcer.addFive(1.9)).closeTo(6.9, 0.01);
        });

        it('check if addFive works with a negative floating point number', () => {
            expect(mathEnforcer.addFive(-1.9)).closeTo(3.1, 0.01);
        });
    });

    describe('subtractTen function tests', () => {
        // subtractTen: function (num) {

            //         if (typeof(num) !== 'number') {
            //             return undefined;
            //         }
            
            //         return num - 10;
            //     },
            it('should return undefined with a string', () => {
                expect(mathEnforcer.subtractTen('somestring')).to.be.undefined;
            });
    
            it('should return undefined with an object', () => {
                expect(mathEnforcer.subtractTen({ name: 'Peter' })).to.be.undefined;
            });
    
            it('should return undefined with an array', () => {
                expect(mathEnforcer.subtractTen([ 'ponne', 9004 ])).to.be.undefined;
            });
    
            it('should return undefined with an undefined', () => {
                expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            });

            it('check if subtractTen subtracts properly', () => {
                expect(mathEnforcer.subtractTen(5)).to.equal(-5); // 5 - 10 = -5
            });
    
            it('check if subtractTen works with a negative number', () => {
                expect(mathEnforcer.subtractTen(-5)).to.equal(-15); // -5 -10 = -15
            });
    
            it('check if subtractTen works with a floating point number', () => {
                expect(mathEnforcer.subtractTen(1.9)).closeTo(-8.1, 0.01); // 1.9 - 10 = -8.1
            });
    
                                                // .closeTo(actual, expected)
            it('check if subtractTen works with a negative floating point number', () => {
                expect(mathEnforcer.subtractTen(-1.9)).closeTo(-11.9, 0.01); // -1.9 - 10 = -11.9
            });
                                              // .closeTo(actual, expected)
    });

    describe('sum function tests', () => {
        // sum: function (num1, num2) {

            //         if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            //             return undefined;
            //         }
            
            //         return num1 + num2;
            //     }
    //     });
    // })

            it('should return undefined with a two strings', () => {
                expect(mathEnforcer.sum('somestring', 'zzzzz')).to.be.undefined;
            });
    
            it('should return undefined with two objects', () => {
                expect(mathEnforcer.sum({ name: 'Peter' }, { })).to.be.undefined;
            });
    
            it('should return undefined with two arrays', () => {
                expect(mathEnforcer.sum([ 'ponne', 9004 ], [ 10 ])).to.be.undefined;
            });
    
            it('should return undefined with an invalid first param and valid second param', () => {
                expect(mathEnforcer.sum(undefined, 5)).to.be.undefined;
            });

            it('should return undefined with an valid first param and invalid second param', () => {
                expect(mathEnforcer.sum(5, 'foe')).to.be.undefined;
            });

            it('check if sum function sums properly', () => {
                expect(mathEnforcer.sum(5, 6)).to.equal(11); 
            });
    
            it('check if sums negative numbers', () => {
                expect(mathEnforcer.sum(-5, -16)).to.equal(-21);
            });
    
            it('check if sum function sums floating point numbers', () => {
                expect(mathEnforcer.sum(2.7, 3.4)).closeTo(6.1, 0.01); // 1.9 - 10 = -8.1
            });
    
                                                // .closeTo(actual, expected)
            it('check if sum function sums negative floating point numbers', () => {
                expect(mathEnforcer.sum(-2.7, -3.4)).closeTo(-6.1, 0.01); // -1.9 - 10 = -11.9
            });
                                              // .closeTo(actual, expected)
    });


});