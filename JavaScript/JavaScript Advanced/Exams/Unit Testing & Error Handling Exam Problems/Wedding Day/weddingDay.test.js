// •	PickVenue (capacity, pricePerGuest, location) - A function that accepts three parameters: number, number, and string.
// o	There is a need for validation for the input, in case of submitted invalid parameters or empty string, throw an error "Invalid Information!
// 	If the value of the string location is different from "Varna", throw an error: 
// "The location of this venue is not in the correct area!"
const { expect } = require('chai');
const { weddingDay, pickVenue } = require('./weddingDay');

describe('Wedding Day', () => {

    describe('Check if doesnt work with a string, number and a number', () => {
        // pickVenue(capacity,pricePerGuest,location) {

        //     if (typeof capacity !== 'number' || typeof pricePerGuest !== 'number' || typeof location !== 'string' || location === '') {
              
        //         throw new Error("Invalid Information!")
        //       };
    
        // number, number, and string.
        // string, number, number
        it(pickVenue(25, 25, 'zii').throw.error('Invalid Information!'));
    })
})