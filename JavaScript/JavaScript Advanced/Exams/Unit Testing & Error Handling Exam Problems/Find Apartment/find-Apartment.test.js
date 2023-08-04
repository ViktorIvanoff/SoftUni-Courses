const { expect } = require('chai');
const { findNewApartment } = require('./find-Apartment');

describe('findNewApartment Tests', () =>{ 
    describe('isGoodLocation', () => {
        // isGoodLocation (city, nearPublicTransportation) - A function that accepts two parameters: string and boolean. Sofia , true
        // o	If the value of the string city is different than a "Sofia", "Plovdiv" or "Varna" 
        // return :
        // "This location is not suitable for you."
            it('test 1', () => {
                expect(findNewApartment.isGoodLocation('Pleven', true)).to.equal("This location is not suitable for you.");
                expect(findNewApartment.isGoodLocation('Pleven', false)).to.equal("This location is not suitable for you.");
                expect(findNewApartment.isGoodLocation('Jau', false)).to.equal("This location is not suitable for you.");
            });
            it('test 2', () => {
                expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.");
                expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
                expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");
            });

            it('test 3', () => {
                expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
                expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!");
                expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal("You can go on home tour!");
            });

            it('test 4', () => {
                expect(() => findNewApartment.isGoodLocation('k', null)).to.throw();
                expect(() => findNewApartment.isGoodLocation('k')).to.throw();
                expect(() => findNewApartment.isGoodLocation()).to.throw();
                expect(() => findNewApartment.isGoodLocation([], false)).to.throw();
                expect(() => findNewApartment.isGoodLocation(1, {})).to.throw();
            })

        // o	If the value of the boolean nearPublicTransportation is false
        // return :
        // "There is no public transport in area."
        // o	Otherwise, if the above conditions are not met, return the following message:
        // o	"You can go on home tour!" 
        // o	You need to validate the input, if the city and nearPublicTransportation are not a string and boolean, throw an error: "Invalid input!".
        




    });

    describe('isLargeEnough', () => {
//         •	isLargeEnough (apartments, minimalSquareMeters) - A function that accepts an array and number.
// o	The apartments array will store the area of the apartment in square meters ([40, 50, 60…])
// o	You must add the area of apartment in resultArr if is equal or bigger than minimalSquareMeters.
// o	Finally, return the changed array of apartments.

// o	There is a need for validation for the input, an array and number may not always be valid. In case of submitted invalid parameters, throw an error "Invalid input!":
// 	If passed apartments parameter is not an array.
// 	If apartments is empty array.
// 	If the minimalSquareMeters is not a number.
        it('test 1', () => {
            expect(findNewApartment.isLargeEnough([100, 150, 200], 40)).to.equal('100, 150, 200');
            expect(findNewApartment.isLargeEnough([40, 100, 150, 200], 40)).to.equal('40, 100, 150, 200');
        });

        it('test 2', ()=> {
            expect( () => findNewApartment.isLargeEnough(null, 'p')).to.throw();
            expect( () => findNewApartment.isLargeEnough([0, 1, 2], 'p')).to.throw();
            expect( () => findNewApartment.isLargeEnough([], 'p')).to.throw();
            expect( () => findNewApartment.isLargeEnough({}, {})).to.throw();
            expect( () => findNewApartment.isLargeEnough()).to.throw();
        });
    });

    describe('isItAffordable', ()=> {
        it('test 1', ()=> {
            // •	isItAffordable (price, budget) - A function that accepts two parameters: number and number. 
                                    // 1, 2
            // o	You need to calculate if you can afford buying the apartment by subtracting the price of the apartment from your budget.
                                        // 2 - 1 = 1
            // o	If the result is lower than 0, return: 
            // "You don't have enough money for this house!"
            // o	Otherwise, if the above conditions are not met, return the following message:
            // "You can afford this home!"
            // o	You need to validate the input, if the price and budget are not a number and price and budget are less or equal to 0, throw an error: "Invalid input!".
            expect(findNewApartment.isItAffordable(1, 2)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(1, 1)).to.equal("You can afford this home!")
            expect(findNewApartment.isItAffordable(3, 2)).to.equal("You don't have enough money for this house!");
        });

        it('invalid input', ()=> {
            expect( () => findNewApartment.isItAffordable('p', 'z')).to.throw();
            expect( () => findNewApartment.isItAffordable('p', 1)).to.throw();
            expect( () => findNewApartment.isItAffordable({}, {})).to.throw();
            expect( () => findNewApartment.isItAffordable()).to.throw();
            expect( () => findNewApartment.isItAffordable(3)).to.throw();
            expect( () => findNewApartment.isItAffordable(0, 0)).to.throw();
            expect( () => findNewApartment.isItAffordable(-1, -1)).to.throw();
            expect( () => findNewApartment.isItAffordable(-1, 0)).to.throw();
        })

    })
});