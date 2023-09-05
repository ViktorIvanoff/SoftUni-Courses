const { expect } = require("chai");
const { isOddOrEven } = require("./02.even-or-odd");

describe("even or odd checker", () => {
  // function isOddOrEven(string) {

  //     if (typeof(string) !== 'string') {
  //         return undefined;
  //     }

  //     if (string.length % 2 === 0) {
  //         return "even";
  //     }

  //     return "odd";
  // }

  // If the passed parameter is NOT a string return undefined. If the parameter is a string return either "even" or "odd" based on the length of the string.
  it("check if returns undefined when passing an array", () => {
    expect(isOddOrEven([1, 35, 646])).to.be.undefined;
  });

  it('check if returns undefined when passing a number', () => {
    expect(isOddOrEven(56)).to.be.undefined;
});

it('check if returns undefined when passing no param', () => {
    expect(isOddOrEven()).to.be.undefined;
});

it('check if returns odd when passing odd string', () => {
    expect(isOddOrEven('axe')).to.equal('odd');
});

it('check if returns even when passing even string', () => {
    expect(isOddOrEven('po')).to.equal('even');
});

it('check if works with multiple different strings', () => {
    expect(isOddOrEven('p')).to.equal('odd');
});





});
