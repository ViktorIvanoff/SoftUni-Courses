const { expect } = require('chai');
const { rgbToHexColor } = require('./06.rgb-to-hex');

// •	Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
// •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// •	Return undefined if any of the input parameters are of an invalid type or not in the expected range

describe('RGB to HEX Convertor', () => {
    // happy path
    it('converts black', () => {

        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        
    });

    it('converts blue', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
        
    });

    it('converts red', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        
    });

    it('converts green', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        
    });

    it('converts yellow', () => {
        expect(rgbToHexColor(255, 255, 0)).to.equal('#FFFF00');
        
    });

    it('returns undefined if input is a string', () => {
        expect(rgbToHexColor('0', '0', 'z')).to.be.undefined;
        
    });

    it('returns undefined if input is an array', () => {
        expect(rgbToHexColor([])).to.be.undefined;
        
    });

    it('returns undefined if input is out of lower bound', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
        
    });

    it('returns undefined if input is out of upper bound', () => {
        expect(rgbToHexColor(400, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 400, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 400)).to.be.undefined;
    });

    it('returns undefined if input params are too less', () => {
        expect(rgbToHexColor(0, 156)).to.be.undefined;
        
    });
    
    it('returns undefined if input param is only one', () => {
        expect(rgbToHexColor(0)).to.be.undefined;
        
    });

    it('returns undefined if there are no input params', () => {
        expect(rgbToHexColor()).to.be.undefined;
        
    });


});