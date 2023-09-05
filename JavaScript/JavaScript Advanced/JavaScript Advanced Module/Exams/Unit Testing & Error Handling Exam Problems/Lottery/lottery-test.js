const { expect } = require("chai");
const { lottery } = require("./Lottery");

describe("Lottery", () => {
  describe("buyLotteryTicket tests", () => {
    //         •	buyLotteryTicket (ticketPrice,ticketCount,buy) - A function that accepts three parameters: number, number, and boolean.
    // o	There is a need for validation for the input, in case of submitted invalid parameters, throw an error "Invalid input!"
    // o	If the value of the boolean buy is false, throw an error:
    // "Unable to buy lottery ticket!"
    // o	To be valid, the ticket purchase must meet the following requirement:
    // o	If the ticketPrice is greater than 0, and ticketCount is greater or equal to 1, and the type of ticketPrice  and ticketCount  is number, return the string:
    // "You bought ${ticketCount} tickets for ${totalPrice}$." ,

    // where totalPrice is ticketPrice multiplied by ticketCount.
    it("invalid input", () => {
      expect(() =>
        lottery.buyLotteryTicket("zz", 45, true).to.throw("Invalid input!")
      );
      expect(() =>
        lottery.buyLotteryTicket([], {}, true).to.throw("Invalid input!")
      );
      expect(() =>
        lottery
          .buyLotteryTicket(null, undefined, true)
          .to.throw("Invalid input!")
      );
      expect(() =>
        lottery.buyLotteryTicket(6, 45, true).to.throw("Invalid input!")
      );
      expect(() =>
        lottery.buyLotteryTicket("zz", 45, null).to.throw("Invalid input!")
      );
      expect(() =>
        lottery.buyLotteryTicket("zz", 45, []).to.throw("Invalid input!")
      );
      expect(() =>
        lottery.buyLotteryTicket("zz", 45, {}).to.throw("Invalid input!")
      );
      expect(() =>
        lottery
          .buyLotteryTicket(undefined, undefined, undefined)
          .to.throw("Invalid input!")
      );
      expect(() =>
        lottery.buyLotteryTicket(0, false, 0).to.throw("Invalid input!")
      );

      expect(() =>
        lottery.buyLotteryTicket().to.throw("Invalid input!")
      );
    });

    it("buy is not boolean", () => {
      expect(() =>
        lottery
          .buyLotteryTicket(6, 0, false)
          .to.throw("Unable to buy lottery ticket!")
      );
    });

    it("valid purchase of ticket tests - happy path", () => {
      // expect(lottery.buyLotteryTicket(1, true)).to.equal(`You bought 1 tickets for 3$.`);
      // expect(lottery.buyLotteryTicket(3, 3, true)).to.equal(`You bought 3 tickets for 9$.`);
    });
  });

  describe("Check ticket tests", () => {
    it("invalid input", () => {
      //         •	checkTicket (ticketNumbers,luckyNumbers) - A function that accepts two parameters: array and array.
      // o	There is a need for validation for the input, in case of submitted invalid parameters, throw an error "Invalid input!"
      // o	To be valid, the ticket must meet the following requirement:
      // 	Both ticketNumbers and luckyNumbers must be arrays with exact length of 6 numbers inside.
      // o	After validation the function compares the numbers from the ticket with the winning numbers.
      // 	If there is from 3 to 5 winning numbers in the ticket, return the following message:
      // "Congratulations you win, check your reward!"
      // 	If all 6 are winning numbers, return the following message:
      // "You win the JACKPOT!!!"
      expect(() => lottery.checkTicket("zz", 45).to.throw("Invalid input!"));
      expect(() => lottery.checkTicket(45, "aaa").to.throw("Invalid input!"));
      expect(() =>
        lottery.checkTicket(null, undefined).to.throw("Invalid input!")
      );
      expect(() => lottery.checkTicket({}, {}).to.throw("Invalid input!"));
      expect(() => lottery.checkTicket(1, 2).to.throw("Invalid input!"));
      expect(() => lottery.checkTicket(2).to.throw("Invalid input!"));
      expect(() => lottery.checkTicket("z").to.throw("Invalid input!"));
      expect(() => lottery.checkTicket().to.throw("Invalid input!"));
      expect(() =>
        lottery.checkTicket([1, 1, 1], [3, 4, 5]).to.throw("Invalid input!")
      );
    });
  });

  describe("secondChance tests", () => {
    //         •	secondChance (ticketID, secondChanceWinningIDs) - A function that accepts two parameters: number and array.
    // o	There is a need for validation for the input, in case of submitted invalid parameters, throw an error "Invalid input!"
    // o	To be valid, the ticket must meet the following requirement:
    // 	ticketID must be from type number.
    // 	secondChanceWinningIDs must be array.
    // o	After validation the function checks whether the ticketID is included in the secondChanceWinningIDs array.
    // 	If there is a match, return the following message:
    // "You win our second chance prize!"
    // 	Else, return the following message:
    // "Sorry, your ticket didn't win!"
    it("invalid input", () => {
        expect(() => lottery.secondChance("zz", 45).to.throw("Invalid input!"));
        expect(() => lottery.secondChance(45, 'z').to.throw("Invalid input!"));
        expect(() => lottery.secondChance({}, {}).to.throw("Invalid input!"));
        expect(() => lottery.secondChance([], []).to.throw("Invalid input!"));
        expect(() => lottery.secondChance(null, null).to.throw("Invalid input!"));
        expect(() => lottery.secondChance([], undefined).to.throw("Invalid input!"));
        expect(() => lottery.secondChance(45).to.throw("Invalid input!"));
        expect(() => lottery.secondChance().to.throw("Invalid input!"));
    });

    // it('works correctly', () => {
    //     expect(lottery.secondChance(5, [0, 8, 5, 6, 7])).to.equal('You win our second chance prize!');
    // });

    // it('doesnt work correctly', () => {
    //     expect(lottery.secondChance(5, [0, 8, 6, 7])).to.equal("Sorry, your ticket didn't win!");
    // })
  });
});
